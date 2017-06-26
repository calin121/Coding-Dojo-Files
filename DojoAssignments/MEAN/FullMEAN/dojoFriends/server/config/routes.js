let users = require("./../controllers/users")

module.exports = function(app){
    app.post("/login", users.login)
    app.get("/login_status", users.check_status)
    app.get("/logout", users.logout)
}