var mongoose = require('mongoose')
var fs = require('fs')
var path = require('path')

const dbName = 'thewall'
const dbLocation = 'localhost'
const dbString = dbLocation + '/' + dbName

mongoose.connect(`mongodb://${dbString}`)

var modelsPath = path.join(__dirname, './../models')

 fs.readdirSync(modelsPath).forEach(function (file) {
   if (file.indexOf('.js') >= 0) {
     require(modelsPath + '/' + file)
   }
 })
