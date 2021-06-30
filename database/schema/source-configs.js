const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sourceConfigSchema = new Schema({
  id: { unique: true, type: Number , defautl: 1 },
  code: { type: Number },
  source_id: { type: Number },
  template: { type: String },
  remark: { type: String, default: "" },
  version: { type: Number, default: 1 }
}, {
  collection: 'sourceConfigs'
})

mongoose.model('SourceConfig', sourceConfigSchema)