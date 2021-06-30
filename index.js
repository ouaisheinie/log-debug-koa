const Koa = require('koa')
const app = new Koa()
const { connect, initSchemas } = require('./database/init')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
// token验证逻辑

app.use(bodyParser())
app.use(cors())

const Router = require('koa-router')
const user = require('./appApi/user')
const category = require('./appApi/category')
const logConfigs = require('./appApi/log-configs')
const userlist = require('./appApi/userlist')
const source = require('./appApi/source')
const sourceConfigs = require('./appApi/source-configs')

let router = new Router()
// 装载所有子路由
router.use('/user', user.routes()) // user.routes() 获取user路由内部的配置信息  然后将这些信息放进router里的/user下
router.use('/category', category.routes())
router.use('/log-configs', logConfigs.routes())
router.use('/roles', userlist.routes())
router.use('/sources', source.routes())
router.use('/source-configs', sourceConfigs.routes())
// 加载中间路由
app.use(router.routes())
app.use(router.allowedMethods())

// 数据库操作
;(async () => {
  await connect()
  initSchemas()
  mongoose.set('useCreateIndex', true)
  // 这里可以插入数据用来创建一个表 mongodb要插入数据才会创建表文件 模板在下面
  
})()

// 插入用户

    // 数据库操作
    // const User = mongoose.model('User') // 声明User模型
    // // 用mongoose 插入一条的语法
    // let oneUser = new User({username: 'zhangzeyi', password: '123456'})
    // oneUser.save().then(() => {
    //   console.log("插入成功")
    // })

    // // 查数据
    // let user1 = await User.findOne({}).exec() // 找到第一条
    // console.log(user1)


app.use(async ctx => {
  ctx.body = "log_debug 后台"
})

app.listen(3002, () => {
  console.log('server start at port 3002')
})