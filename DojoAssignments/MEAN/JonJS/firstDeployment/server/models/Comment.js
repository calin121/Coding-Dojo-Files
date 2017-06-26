var mongoose = require('mongoose')
var Schema = mongoose.Schema

var commentSchema = new mongoose.Schema({
  _message: {type: Schema.Types.ObjectId, ref: 'Message'},
  author: {type: String},
  comment: {type: String}
}, {timestamps: true})

mongoose.model('Comment', commentSchema)