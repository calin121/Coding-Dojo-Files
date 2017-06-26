var userController = require('../controllers/primaryController.js')
var triviaController = require('../controllers/triviaController.js')
var path =require('path')

module.exports = function (app) {
  // login - out routes
  app.post('/login', userController.login)
  app.get('/logout', userController.logout)
  app.get('/checkStatus', userController.checkStatus)
  // question - answer routes
  app.get('/getAll', triviaController.getAll)
  app.post('/newQuestion', triviaController.newQuestion)
  app.post('/:id/newAnswer', triviaController.newAnswer)
  app.all('*', (req, res) => {
    res.sendFile(path.resolve('client/dist/index.html'))
  });
  app.delete('/user/:id', (req, res, next) => {
        console.log("Made it to the delete route > Delete > '/user/:id'> id", req.params.id);
        triviaController.deleteUser(req.params.id);
    });
    // app.delete('/user/:id', triviaController.deleteUser(req.params.id));
}