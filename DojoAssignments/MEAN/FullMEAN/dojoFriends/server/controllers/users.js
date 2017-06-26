const mongoose = require("mongoose")
const User = mongoose.model("User")

module.exports = {
    login: (req, res) => {
        // req.session.name = req.body.name
        User.findOne({name: req.body.name})
            .catch(err => {
                console.log("user FindONe error", err)
                res.status(500).json(err)
            })
            .then(user => {
                if (user){
                    req.session.user = user;
                    res.json(true);
                } else {
                    let new_user = new User(req.body)
                    new_user.save()
                        .catch(err => {
                            console.log("user save error", err)
                            res.status(500).json(err)
                        })
                        .then(() => {
                            req.session.user = new_user;
                            res.json(true);
                        })
                }
            })
    },
    check_status: (req, res) => {
        res.json({user: req.session.user})
    },
    logout: (req, res) => {
        req.session.destroy();
        req.json(true);
    }
}
