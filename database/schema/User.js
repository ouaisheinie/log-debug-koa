const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 主键
let ObjectId = Schema.Types.ObjectId

// 加盐加密操作
const bcrypt = require('bcryptjs')
const SALT_WORK_FACTOR = 10

// 创建userSchema
const userSchema = new Schema({
  userId: { type: ObjectId },
  username: { unique: true, type: String },
  password: { type: String },
  createAt: { type: Date, default: Date.now() },
  lastLoginAt: { type: Date, default: Date.now() }
}, {
  collection: 'user'
})

// 每次保存都加盐加密
userSchema.pre('save', function(next){
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if(err) return next(err)
    bcrypt.hash(this.password, salt, (err, hash) => { // this代表userSchema
      if(err) return next(err)
      this.password = hash
      next()
    })
  })
})

userSchema.methods = {
  // 定义一个方法用于密码的解密
  comparePassword: (_password, password) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(_password, password, (err, isMatch) => { // isMatch 是对比结果
        if(!err) resolve(isMatch)
        else reject(err)
      })
    })
  }
}

mongoose.model('User', userSchema)