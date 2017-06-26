var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  name: {type: String},
  score: {type: Number}
}, {timestamps: true})

mongoose.model('User', userSchema)

