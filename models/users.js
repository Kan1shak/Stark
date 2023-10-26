import mongoose from "mongoose";

const messageSchema= new mongoose.Schema({

    name:String,
    email:String,
    username:String,
    password:String,
    profile: Object,
    projects: [Object],
    skills: [String],
    services:[Object],
    job:String,
    description:String,

})

export const users = mongoose.model("userdatas",messageSchema);