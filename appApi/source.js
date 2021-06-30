const Router = require('koa-router')
const mongoose = require('mongoose')
const { secret } = require('../config')
const jwt = require('koa-jwt')({ secret }) // jwt 加解码中间件
const admin = require('../middleware/admin')()
let router = new Router()
const fs = require('fs')

/**
 * @source 来源模块
 */
// 请求来源列表
router.get('/', async ctx => {
  try {
    const Source = mongoose.model('Source')
    let result = await Source.find({}).exec()
    ctx.body = { code: 200, message: "success", data: { list: result }}
  } catch (error) {
    ctx.body = { code: 500, message: error }
  }
})

// 增添原始数据 浏览器输入 http://localhost:8000/api/v1/sources/ttt
// 这里的数据要添加成功需要将下面几个带jwt的接口注释掉
/* router.get('/ttt', async ctx => {
  console.log('ttt')
  fs.readFile('./data_json/source.json', 'utf8', (err, data) => {
    data = JSON.parse(data).RECORDS
    const Source = mongoose.model('Source')

    const Counter = mongoose.model('Counter')
    let counter = new Counter({name: 'SourceNum', number: 0})
    counter.save().then(() => {
      console.log("插入 SourceNum 成功")
    })
    data.map((item, index) => {
      let newSource = new Source(item)
      newSource.save().then(() => {
        console.log(`source${index}输入成功`)
        Counter.updateOne(
          { name: 'SourceNum' },
          { number: item.id },
          function(err, res) {
            if (err) {
              ctx.body = { code: 500, message: 'source id 更新失败'}
              return
            } else {
              console.log('source id 更新成功')
            }
          }
        )
      }).catch(err => console.log(`source${index}输入失败`))
    })
  })
}) */

// 添加来源
router.post('/', jwt, async ctx => {
  try {
    const data = ctx.request.body
    const Source = mongoose.model('Source')
    // 验证key是否存在
    let sourceItem = await Source.findOne({ key: data.key }).exec()
    if(sourceItem){
      ctx.status = 422
      ctx.body = { code: 400, message: 'key exist'}
    }else{
      const Counter = mongoose.model('Counter')
      let result = await Counter.findOne({ name: 'SourceNum'}) // 存值是存的查找时的快照  id 自增1
      await Counter.updateOne(
        { name: 'SourceNum'},
        { number: result.number + 1 },
        function(err, res){
          if(err){
            ctx.body = { code: 500, message: 'source id 更新失败'}
            return
          }else{
            console.log('source id 更新成功')
          }
        }
      )
      let result2 = await Counter.findOne({ name: 'SourceNum'})
      let oneRecord = new Source({
        key: data.key,
        name: data.name,
        remark: data.remark,
        id: result2.number
      })
      let saveS = await oneRecord.save()
      if(saveS) ctx.body = { code: 200, message: 'success' }
      else ctx.body = { code: 500, message: "新增失败" }
    }
  } catch (error) {
    ctx.body = { code: 500, message: "服务器内部错误 " +  error }
  }
})

// 查看来源
router.get('/:id', jwt, async ctx => {
  try {
    const id = ctx.request.url.split('/')[2]
    const Source = mongoose.model('Source')
    let result = await Source.findOne({ id }).exec()
    if(result) ctx.body = { code: 200, message: 'success', data: result }
    else {
      ctx.status = 422
      ctx.body = { code: 404, message: "未找到记录" }
    }
  } catch (error) {
    ctx.body = { code: 500, message: error}
  }
})

// 修改来源
router.put('/:id', jwt, async ctx => {
  try {
    const id = ctx.request.url.split("/")[2]
    const data = ctx.request.body
    const Source = mongoose.model('Source')
    await Source.updateOne(
      { id },
      {
        name: data.name,
        remark: data.remark
      },
      function(err, res){
        if(err) ctx.body = { code: 500, message: "修改source 失败"}
        else ctx.body = { code: 200, message: "修改source 成功"}
      }
    )
  } catch (error) {
    ctx.body = { code: 500, message: error }
  }
})


module.exports = router