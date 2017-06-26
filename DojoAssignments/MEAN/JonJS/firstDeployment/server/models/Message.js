var mongoose = require('mongoose')
var Schema = mongoose.Schema


var messageSchema = new mongoose.Schema({
  author: {type: String},
  message: {type: String},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true})

mongoose.model('Message', messageSchema)
