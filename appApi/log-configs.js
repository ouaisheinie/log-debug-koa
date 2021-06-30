const Router = require('koa-router')
const mongoose = require('mongoose')
const { secret } = require('../config')
const jwt = require('koa-jwt')({ secret }) // jwt 加解码中间件
const admin = require('../middleware/admin')()
let router = new Router()


/** 
 * @log-config 日志配置
*/

// 查询日志配置列表  这里有多条件模糊匹配
router.get('/', async ctx => {
  try {
    const data = ctx.request.query // 得到链接里的参数
    console.log(data)
    const LogConfig = mongoose.model('LogConfig')
    let condiration = []
    if(data.keyword){
      condiration.push({ log_type: {$regex: data.keyword, $options: '$i'}})
    }
    if(data.category_id){
      condiration.push({ category_id: data.category_id })
    }
    if(data.role_id){
      condiration.push({ role_id: data.role_id })
    }
    let result
    if(condiration.length){ // 如果有查找条件
      result = await LogConfig.find({
        $or: condiration
      }).exec()
    }else{ // 没有查找条件
      result = await LogConfig.find({}).exec()
    }
    ctx.body = { code: 200, message: 'success', data: { list: result }}
  } catch (error) {
    ctx.body = { code: 500, message: error }
  }
})

// 添加日志配置
router.post('/', jwt, async ctx => {
  try {
    const data = ctx.request.body
    const LogConfig = mongoose.model('LogConfig')
    /* 这个接口不需要验证key */
    const Counter = mongoose.model('Counter')
    let result = await Counter.findOne({ name: 'logConfigNum'})
    if (!result) {
      let count = new Counter({name: 'logConfigNum', password: 0})
      count.save().then(async () => {
        console.log("插入 logConfigNum 成功")
        result = await Counter.findOne({ name: 'logConfigNum'})
      })
    }
    await Counter.updateOne(
      { name: 'logConfigNum' },
      { number: result.number + 1 },
      function(err, res){
        if(err){
          console.log("logconfig id 和 code 更新失败！")
          ctx.body = { code: 500, message: 'logconfig id 和 code 更新失败！'}
        }
        else console.log("logconfig id 和 code 更新成功！")
      }
    )
    let result2 = await Counter.findOne({ name: 'logConfigNum' })
    let oneRecord = new LogConfig({
      category_id: data.category_id,
      code: result2.number,
      log_type: data.log_type,
      role_id: data.role_id,
      arg_docs: data.arg_docs,
      template: data.template,
      remark: data.remark,
      id: result2.number
    })
    let saveS = await oneRecord.save()
    if(saveS) ctx.body = { code: 200, message: 'success' }
    else ctx.body = { code: 500, message: '添加日志配置失败' }
  } catch (error) {
    ctx.body = { code: 500, message: error }
  }
})

// 查看日志配置
router.get('/:id', jwt, async ctx => {
  try {
    const code = ctx.request.url.split('/')[2]
    const LogConfig = mongoose.model('LogConfig')
    let result = await LogConfig.findOne({ code }).exec()
    if(result) ctx.body = { code: 200, message: 'success', data: result }
    else{
      ctx.status = 422
      ctx.body = { code: 404, message: "未找到记录" }
    }
  } catch (error) {
    ctx.body = { code: 500, message: error }
  }
})

// 修改日志配置
router.put('/:id', jwt, async ctx => {
  try {
    const code = ctx.request.url.split("/")[2]
    const data = ctx.request.body
    LogConfig = mongoose.model('LogConfig')
    await LogConfig.updateOne(
      { code },
      {
        arg_docs: data.arg_docs,
        remark: data.remark,
        template: data.template
      },
      function(err, res){
        if(err){
          console.log('日志配置更新失败')
          ctx.body = { code: 500, message: '日志配置更新失败'}
        }else{
          console.log("日志配置 更新成功")
          ctx.body = { code: 200, message: 'success' }
        }
      }
    )
  } catch (error) {
    ctx.body = { code: 500, message: error }
  }
})

module.exports = router