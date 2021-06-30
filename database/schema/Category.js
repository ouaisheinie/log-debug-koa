const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
  id: { unique: true, type: Number , defautl: 1 },
  name: { type: String },
  remark: { type: String },
  key: { type: String },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() },
  deleted_at: { type: Date, default: Date.now() }
}, {
  collection: 'category'
})

mongoose.model('Category', categorySchema)