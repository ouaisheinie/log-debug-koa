const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CounterSchema = new Schema({
  name: { type: String },
  number: { type: Number }
}, {
  collection: 'counter'
})

mongoose.model('Counter', CounterSchema)