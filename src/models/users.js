const mongoose = require('mongoose');

const messageSchema= new mongoose.Schema({
    name:String,
    email:String,
    username:String,
    password:String,
    profile: Object,
    projects: [Object],
    skills: [String],
    services: [Object],
});

module.exports = mongoose.model("userdatas",messageSchema);