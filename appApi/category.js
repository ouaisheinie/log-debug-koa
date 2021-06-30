const Router = require('koa-router')
const mongoose = require('mongoose')
const { secret } = require('../config')
const jwt = require('koa-jwt')({ secret }) // jwt 加解码中间件
const admin = require('../middleware/admin')()
let router = new Router()

/**
 * 日志一级分类页接口 
 * */ 

// 获取列表
router.get('/', async ctx => {
  try {
    let page = ctx.request.body.page // 页码
    let num = 10 // 每一页显示数量
    let startPoint = (page - 1) * num //开始位置
    const Category = mongoose.model('Category')
    // let result = await Category.find({}).skip(startPoint).limit(num).exec()   // 这里是做分页的逻辑 但是此项目暂时不用
    let result = await Category.find({}).exec()
    ctx.body = { code: 200, message: "success", data: { list: result }}
  } catch (error) {
    ctx.body = { code: 500, message: error}
  }
})

// 查看记录详情 要鉴权
router.get('/:id', jwt, async ctx => {
  try {
    const id = ctx.request.url.split("/")[2]
    const Category = mongoose.model('Category')
    let result = await Category.findOne({ id }).exec()
    // 下面这样返回才避免了页面崩溃
    if(result) ctx.body = { code: 200, message: "success", data: result }
    else{
      ctx.status = 422
      ctx.body = { code: 404, message: "未找到记录"}
    }
  } catch (error) {
    ctx.body = { code: 500, message: error }
  }
})

// 添加父类型
router.post('/', jwt, async ctx => {
  try {
    const data = ctx.request.body
    const Category = mongoose.model('Category')
    // 验证key是否存在
    let categoryitem = await Category.findOne({ key: data.key }).exec()
    if(categoryitem){
      ctx.status = 422
      ctx.body = { code: 400, message: 'key exist'}
    }else{
      const Counter = mongoose.model('Counter')
      let result = await Counter.findOne({ name: 'CategoryNum' }) // 存值是存的查找时的快照  id 自增1
      if (!result) {
        let count = new Counter({name: 'CategoryNum', number: 0})
        await count.save().then(() => {
          console.log("插入 CategoryNum 成功")
        })
      }
      result = await Counter.findOne({ name: 'CategoryNum'})
      await Counter.updateOne(
        { name: 'CategoryNum' },
        { number: result.number + 1 },
        function(err , res){
          if(err) console.log("Category Id 更新失败")
          else console.log("Category Id 更新成功")
        }
      )
      let result2 = await Counter.findOne({ name: 'CategoryNum' })
      let oneRecord = new Category({
        key: data.key,
        name: data.name,
        remark: data.remark,
        id: result2.number
      })
      let saveS = await oneRecord.save()
      if(saveS){
        console.log("数据插入成功")
        ctx.body = { code: 200, message: 'success'}
      } 
      else ctx.body = { code: 500, message: "新增失败"}
    }
  } catch (error) {
    ctx.body ={ code: 500, message: "服务器内部错误 " + error }
  }
})

// 修改父类型
router.put('/:id', jwt, async ctx => {
  try {
    const id = ctx.request.url.split("/")[2]
    const data = ctx.request.body
    const Category = mongoose.model('Category')
    await Category.updateOne(
      { id },
      {
        name: data.name,
        remark: data.remark
      },
      function(err, res){
        if(err){
          console.log("父类型 更新失败")
          ctx.body = { code: 500, message: "父类型 更新失败"}
        }
        else {
          console.log("父类型 更新成功")
          ctx.body = { code: 200, message: 'suceess'}
        }
      }
    )
  } catch (error) {
    ctx.body = { code: 500, message: error }
  }
})

module.exports = router