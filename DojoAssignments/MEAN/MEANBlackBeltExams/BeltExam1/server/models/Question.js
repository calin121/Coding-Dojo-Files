var mongoose = require('mongoose')
var Schema = mongoose.Schema


var questionSchema = new mongoose.Schema({
  author: {type: String},
  question: {type: String},
  answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
}, {timestamps: true})

mongoose.model('Question', questionSchema)