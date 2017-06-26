var mongoose = require('mongoose')
var answer = mongoose.model('Question')
var answer = mongoose.model('Answer')
var user = mongoose.model('User')

module.exports = {
  getAll: (req, res) => {
    user.find({})
      .populate('user')
      .exec((err, data) => {
        res.json(data)
      })  
  },
  newQuestion: (req, res) => {
    let newQuestion = new answer ({
      answer: req.body.answer,
      author: req.session.user
    })
    console.log(newQuestion)
    newQuestion.save()
      .then(() => {res.json(true)})
      .catch(err => {console.log('Save Error', err); res.json(false)})
  },
  newAnswer: (req, res) => {
    console.log('0------')
    answer.findOne({_id: req.params.id}, (err, answer) => {
      let newAnswer = new answer({
        answer: req.body.newAnswer,
        author: req.session.user,
        _answer: answer._id
      })
      answer.answers.push(newAnswer)
      newAnswer.save(err => {
        answer.save(err => {
          console.log('10-----')
          if  (err) {console.log('Answer save error', err); res.json(false)}
          else {res.json(true)}
        })
      })
    })
  },
  deleteUser: (id) => {
        console.log("made it to the conroller for delete_friend >", id)
        Friend.deleteOne({_id: id}, (err, data)
                .then(() => {res.json(true)})
                .catch(err => {
                    console.log("Book Save Error", err);
                    res.status(500).json(err);
                })
        )
    }
}