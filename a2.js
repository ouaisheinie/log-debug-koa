const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const { sign } = require('jsonwebtoken') // sign 签发token令牌
const { secret } = require('./config')
const jwt = require('koa-jwt')({ secret }) // jwt 加解码中间件
const admin = require('./middleware/admin')()

const app = new Koa()
app.use(bodyParser())

const router = new Router()
router.post('/api/login', async(ctx, next) => {
  const user = ctx.request.body
  console.log(ctx.request)
  if(user && user.username){

    let  { username } = user
    // 签发令牌 token
    const token = sign({ username }, secret, { expiresIn: '1h'})
    ctx.body = {
      message: '成功得到了 token',
      code: 1,
      token
    }
  }else{
    ctx.body ={
      message: "参数错误",
      code: -1
    }
  }
}).get('/api/userinfo', jwt, async(ctx) => {  // 这里这个jwt 就代表要权鉴 要验证token
  ctx.body = {
    message: "Token 鉴权通过了",
    username: ctx.state.user.username
  }
}).get('/api/adminInfo', jwt, admin, async ctx => { // 这里不但要验证token  还要验证圈钱
  ctx.body = {
    message: "你是管理员",
    username: ctx.state.user.username
  }
})


app.use(router.routes()).use(router.allowedMethods())

app.listen(3005, () => {
  console.log('server 3005')
})



/*  
  ctx.request.params 获取url的路径参数
  ctx.request.query 获取请求参数
  ctx.request.header 获取请求头参数
  ctx.request.body 获取JSON对象参数

*/