const mongoose = require('mongoose')
const db = 'mongodb://localhost/koa-push'
const glob = require('glob')
const { resolve } = require('path')

// 引入schema
exports.initSchemas = () => {
  glob.sync(resolve(__dirname, './schema/', '**/*.js')).forEach(require)
}

exports.connect = () => {
  // 连接数据库
  mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  // 连接数据库的最大次数
  let maxConnectTimes = 0

  return new Promise((resolve, reject) => {
    // 下面的操作是异步的   所以要用promise
    // 1 增加数据库监听事件 断开连接
    mongoose.connection.on('disconnected', err => {
      console.log('>>>>>>>>数据库连接断开<<<<<<<<')
      if(maxConnectTimes <= 3){
        maxConnectTimes++
        mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true}) // 重连
      }else{
        reject(err)
        throw new Error('数据库出现问题，程序无法搞定，请人为处理......')
      }
    })

    // 数据库出错  重连
    mongoose.connection.on('error', err => {
      console.log('>>>>>>>>数据库错误<<<<<<<<')
      if(maxConnectTimes <= 3){
        maxConnectTimes++
        mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
      }else{
        reject(err)
        throw new Error('数据库出现问题，程序无法搞定，请人为处理......')
      }
    })

    // 连接打开时
    mongoose.connection.once('open', () => {
      console.log('MongoDB connected successfully')
      resolve()
    })
  })
}