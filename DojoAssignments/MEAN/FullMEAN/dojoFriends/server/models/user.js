const mongoose = require("mongoose")

const CommentSchema = mongoose.Schema({
    user: String,
    body: String
}, {timestamps:true})

const RatSchema = mongoose.Schema({
    name: {type: String, required: true},
    age: {type: number, required: true},
    // comments: {type: [mongoose.Schema.Types.ObjectId]}
    comments: [CommentSchema]
}, {timestamps:true})

const UserSchema = mongoose.Schema({
    name: {type:String},
    rats: [RatSchema]
}, {timestamps: true})

mongoose.model("User", RatSchema)


// User has an array of rats, which has an array of comments