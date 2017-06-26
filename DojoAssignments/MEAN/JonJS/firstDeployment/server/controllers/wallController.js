var mongoose = require('mongoose')
var message = mongoose.model('Message')
var comment = mongoose.model('Comment')

module.exports = {
  getAll: (req, res) => {
    message.find()
      .populate('comments')
      .exec((err, data) => {
        res.json(data)
      })  
  },
  newMessage: (req, res) => {
    let newMessage = new message ({
      message: req.body.message,
      author: req.session.user
    })
    console.log(newMessage)
    newMessage.save()
      .then(() => {res.json(true)})
      .catch(err => {console.log('Save Error', err); res.json(false)})
  },
  newComment: (req, res) => {
    console.log('0------')
    message.findOne({_id: req.params.id}, (err, message) => {
      let newComment = new comment({
        comment: req.body.newComment,
        author: req.session.user,
        _message: message._id
      })
      message.comments.push(newComment)
      newComment.save(err => {
        message.save(err => {
          console.log('10-----')
          if  (err) {console.log('Comment save error', err); res.json(false)}
          else {res.json(true)}
        })
      })
    })
  }
}