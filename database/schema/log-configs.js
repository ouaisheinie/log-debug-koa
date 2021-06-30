const mongoose = require('mongoose')
const Schema = mongoose.Schema

const logConfigSchema = new Schema({
  category_id: { type: Number },
  code: { unique: true, type: Number },
  log_type: { unique: true, type: String },
  role_id: { type: Number },
  arg_docs: { type: String },
  template: { type: String },
  version: { type: Number , default: 1 },
  remark: { type: String },
  id: { unique: true, type: Number , defautl: 1 },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() },
  deleted_at: { type: Date, default: Date.now() }
}, {
  collection: 'logConfigs'
})

mongoose.model('LogConfig', logConfigSchema)