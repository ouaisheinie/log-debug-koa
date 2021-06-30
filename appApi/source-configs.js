const Router = require('koa-router')
const mongoose = require('mongoose')
const { secret } = require('../config')
const jwt = require('koa-jwt')({ secret }) // jwt 加解码中间件
const admin = require('../middleware/admin')()
let router = new Router()

/* source-config  在日志详情里面的 */

// 获取 source-config 列表
router.get('/', async ctx => {
  try {
    const code = ctx.request.query.code
    const sourceConfig = mongoose.model('SourceConfig')
    let result = await sourceConfig.find({ code }).exec()
    let resData = Object.create(null)
    result.map(item => {
      resData[item.source_id] = item
    })
    ctx.body = { code: 200, message: 'success', data: { [code]: resData }}
  } catch (error) {
    ctx.body = { code: 500, message: error }
  }
})

// 添加source-config
router.post('/', jwt, async ctx => {
  try {
    const data = ctx.request.body
    const SourceConfig = mongoose.model('SourceConfig')
    // 要检测 source_id 是否重复
    let existRecords = await SourceConfig.find({
      code: data.code,
      source_id: data.source_id
    }).exec()
    console.log(existRecords)
    if(existRecords.length){ // 已经包含相同的source_id的记录
      ctx.body = { code: 5, message: 'source config 已存在'}
      return
    }
    const Counter = mongoose.model('Counter')
    let result = await Counter.findOne({ name: 'sourceConfigNum' })
    await Counter.updateOne(
      { name: 'sourceConfigNum' },
      { number: result.number + 1 },
      function(err, res){
        if(err) console.log("sourceConfig Num 更新失败")
        else console.log("sourceConfig Num 更新成功")
      }
    )
    let result2 = await Counter.findOne({ name: 'sourceConfigNum' })
    let oneRecord = new SourceConfig({
      id: result2.number,
      code: data.code,
      source_id: data.source_id,
      template: data.template,
      version: data.version,
      remark: data.remark
    })
    let saveS = await oneRecord.save()
    if(saveS){
      console.log("数据增添成功")
      ctx.body = { code: 200, message: 'success' }
    }
    else ctx.body = { code: 500, message: '新增失败'}
  } catch (error) {
    ctx.body = { code: 500, message: error }
  }
})

// 更新 source-config
router.put('/:id', jwt, async ctx => {
  try {
    const id = ctx.request.url.split('/')[2]
    const data = ctx.request.body
    const SourceConfig = mongoose.model('SourceConfig')
    await SourceConfig.updateOne(
      { id },
      {
        template: data.template,
        remark: data.remark
      },
      function(err, res){
        if(err){
          console.log("更改记录失败")
          ctx.body = { code: 500, message: '日志配置更新失败'}
        }else{
          console.log("更新记录成功")
          ctx.body = { code: 200, message: 'success' }
        }
      }
    )
  } catch (error) {
    ctx.body = { code: 500, message: error }
  }
})


module.exports = router