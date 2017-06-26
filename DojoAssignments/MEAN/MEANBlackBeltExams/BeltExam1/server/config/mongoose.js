var mongoose = require('mongoose')
var fs = require('fs')
var path = require('path')

mongoose.Promise = global.Promise;

const dbName = 'blackBeltTrivia'
const dbLocation = 'localhost'
const dbString = dbLocation + '/' + dbName

mongoose.connect(`mongodb://${dbString}`)

var modelsPath = path.join(__dirname, './../models')

 fs.readdirSync(modelsPath).forEach(function (file) {
   if (file.indexOf('.js') >= 0) {
     require(modelsPath + '/' + file)
   }
 })
