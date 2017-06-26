var userController = require('../controllers/primaryController.js')
var wallController = require('../controllers/wallController.js')
var path =require('path')

module.exports = function (app) {
  // login - out routes
  app.post('/login', userController.login)
  app.get('/logout', userController.logout)
  app.get('/checkStatus', userController.checkStatus)
  // message - comment routes
  app.get('/getAll', wallController.getAll)
  app.post('/newMessage', wallController.newMessage)
  app.post('/:id/newComment', wallController.newComment)
  app.all('*', (req, res) => {
    res.sendFile(path.resolve('client/dist/index.html'))
  })
}