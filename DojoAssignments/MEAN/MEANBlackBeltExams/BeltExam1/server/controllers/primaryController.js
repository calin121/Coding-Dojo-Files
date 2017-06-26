var mongoose = require('mongoose')
var user = mongoose.model('User')

module.exports = {
  login: (req, res) => {
    console.log('0----------', req.body.username)
    user.findOne({name: req.body.username})
      .then(data => {
        console.log('1-----')
        if (data) { // user exists and name added to session
          console.log('2-----')
          req.session.user = data.name
          res.json({name: data.username})
        } else { // user DNE, add user to usre DB
          console.log('3-----')
          let newUser = new user({name: req.body.username})
          newUser.save()
            .then(() => {
              console.log('4-----')              
              req.session.user = newUser.name
              res.json({name: user})
            })
            .catch(err => { console.log(err) })
        }
      })
      .catch(err => { console.log(err) })
  },
  logout: (req, res) => {
    req.session.destroy()
  },
  checkStatus: (req, res) => {
    res.json({loggedIn: req.session.user})
  },
  index: function (req, res) {
    res.render('index', {title: 'Node project shell'})
  }
}

