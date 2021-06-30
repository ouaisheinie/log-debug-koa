const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userlistSchema = new Schema({
  id: { unique: true, type: Number , defautl: 1 },
  name: { type: String },
  remark: { type: String },
  key: { unique: true, type: String }
}, {
  collection: 'userlist'
})

mongoose.model('UserList', userlistSchema)