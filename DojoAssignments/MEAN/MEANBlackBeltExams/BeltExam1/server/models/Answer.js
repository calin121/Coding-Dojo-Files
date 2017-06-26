var mongoose = require('mongoose')
var Schema = mongoose.Schema

var answerSchema = new mongoose.Schema({
  _question: {type: Schema.Types.ObjectId, ref: 'Question'},
  author: {type: String},
  answer: {type: String},
  correct: {type: Boolean},
}, {timestamps: true})

mongoose.model('Answer', answerSchema)