
var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')
var session = require('express-session')
var sess = {
  secret: 'secretsecret',
  cookie: {}
}

const PORT = 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, './client/dist')))
app.use(session(sess))

require('./server/config/dbConfig.js')

var routesSetter = require('./server/config/routes.js')
routesSetter(app)

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`)
})

