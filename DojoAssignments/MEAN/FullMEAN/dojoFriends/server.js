var express = require("express")
var path = require("path")

var app = express()
var bodyParser = require("body-parser")
var session = require("express-session")

var PORT = 8000

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "./client/dist")))
app.use(express.static(path.join(__dirname, "./node_modules")))
app.use(session({
	secret: "rat secret",
	resave: false,
	saveUninitialized: false,
}))

require("./server/config/mongoose.js")

require("./server/config/routes.js")(app)

app.listen(PORT, function(){
	console.log(`Listening on port ${PORT}`)
})