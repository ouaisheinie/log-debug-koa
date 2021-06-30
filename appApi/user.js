const Router = require('koa-router')
const mongoose = require('mongoose')
const { sign } = require('jsonwebtoken') // sign 签发token令牌
const { secret } = require('../config')

const jwt = require('koa-jwt')({ secret }) // jwt 加解码中间件
const admin = require('../middleware/admin')()

let router = new Router()

router.get("/", async ctx => {
  ctx.body = "这个是登录页"
})

router.post("/login", async (ctx) => {
  console.log(ctx.request.body)
  let loginUser = ctx.request.body
  console.log(loginUser)
  let username = loginUser.username
  let password = loginUser.password
  // 引入 User中的model
  const User =  mongoose.model('User')

  await User.findOne({ username }).exec().then(async (result) => {
    console.log(result)
    const token = sign({ username }, secret, { expiresIn: '24h'})
    const expired_at = new Date(new Date().getTime() + 1000 * 60 * 60 * 24) // 把过期时间传过去
    if(result){
      let newUser = new User() // 实例化的之后调用里面的方法
      await newUser.comparePassword( password, result.password).then(isMatch => {
        if(isMatch){ // 密码正确
          ctx.body = { code:200, message: "登录成功", data: {
            user_name: username,
            token,
            expired_at
          }}
        }else{ // 密码不正确
          ctx.body = { code: 422, message: "密码错误" }
        }
      }).catch(error => {
        ctx.body = {code: 500, message: error}
      })
    }else{
      ctx.body = { code: 422, message: "用户名不存在" }
    }
  }).catch(err => {
    console.log(err)
    ctx.body = { code: 500, message: error }
  })
})


module.exports = router