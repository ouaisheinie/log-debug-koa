const Router = require('koa-router')
const mongoose = require('mongoose')
const { secret } = require('../config')
const jwt = require('koa-jwt')({ secret }) // jwt 加解码中间件
const admin = require('../middleware/admin')()
let router = new Router()
const fs = require('fs')

/**
 * @userlist 角色目录 
 * */ 

// 获取列表
router.get('/', async ctx => {
  try {
    const rolelist = mongoose.model('UserList')
    let result = await rolelist.find({}).exec()
    ctx.body = { code: 200, message: "success", data: result }
  } catch (error) {
    ctx.body = { code: 500, message: error }
  }
})

// 加入userlist.json 数据  浏览器输入 http://localhost:8000/api/v1/roles/aaa
/* router.get('/aaa', async ctx => {
  fs.readFile('./data_json/userlist.json', 'utf8', (err, data) => {
    data = JSON.parse(data).RECORDS
    const Userlist = mongoose.model('UserList')
    data.map((item, index) => {
      let newUser = new Userlist(item)
      newUser.save().then(() => {
        console.log(`role${index}输入成功`)
      }).catch(err => console.log(`role${index}输入失败`))
    })
  })
}) */

module.exports = router