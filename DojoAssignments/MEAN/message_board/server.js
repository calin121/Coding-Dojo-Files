// require express and path
var express = require("express");
var path = require("path");
// create the express app
var app = express();
// adds mongoose to our app
var mongoose = require('mongoose');
// require bodyParser since we need to handle post data for adding a message
var bodyParser = require("body-parser");
// set the port
var PORT = 8000;
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));

// connecting to the mongoose DB, the name needs to match the db name
mongoose.connect('mongodb://localhost/message_board');

// create a schema for Message
var MessageSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 2},
	message: {type: String, required: true},
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps:true});
// create a schema for Comment
var CommentSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 2},
	comment: {type: String, required: true},
	_message: {type: Schema.Types.ObjectId, ref: 'Message'}
}, {timestamps: true});

mongoose.model('Comment', CommentSchema);
mongoose.model('Message', MessageSchema); // We are setting this Schema in our Models as 'Message'
var Message = mongoose.model('Message'); // We are retrieving this Schema from our Models, named 'Message'
var Comment = mongoose.model('Comment'); // we are retrieving this Schema from our MOdels, name 'Comments'


// static content 
app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static(path.join(__dirname, "./views")));
app.use(express.static(path.join(__dirname, "./node_modules")));
app.use(express.static(path.join(__dirname, "./server")));

// setting up ejs and our views folder
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

// root route to render the index.ejs view
app.get('/', function(req, res) {
	Message.find({}).populate('comments').exec(function (err, messages) {
		console.log(messages);
		res.render("index", {messages:messages});
	});
});

// route to add a message
app.post('/post_message', function(req, res) {
	console.log("POST DATA", req.body);
	var new_message = new Message (req.body);
	 new_message.save(function(err) {
		// if there is an error console.log that something went wrong!
		if(err) {
			console.log('something went wrong');
			res.redirect('/')} 
		else {
			console.log('successfully added a user!'); // else console.log that we did well and then redirect to the root route
			res.redirect('/');
		}
	});
});

//route to add a comment to a message
app.post('/post_comment/:id', function(req, res) {
	Message.findOne({_id: req.params.id}, function(err, message) {
		console.log("POST DATA", req.body);
		var new_comment = new Comment (req.body);
		new_comment._message = message._id;
		message.comments.push(new_comment);
		new_comment.save(function(err) {
			message.save(function(err) {
				if(err) {
					console.log('Error occured with the comment');
					res.redirect('/'); }
				else { res.redirect('/'); }
			});
		});
	});
});

// tell the express app to listen on port 8000
app.listen(PORT, function(){
	console.log(`Listening on port ${PORT}`);
});