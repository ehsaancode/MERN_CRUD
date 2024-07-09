const mongoose = require("mongoose")


//creating schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
}, {timestamps: true})

//creating model
const User = mongoose.model("User", userSchema)

module.exports = User