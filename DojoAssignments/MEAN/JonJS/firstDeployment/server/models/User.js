var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  name: {type: String}
}, {timestamps: true})

mongoose.model('User', userSchema)

