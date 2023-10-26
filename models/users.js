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
    sd:String,
    phone:Number,
    description:String,
    ad1:String,ad2:String,
    state:String,country:String,
    pc:String,
    area:String,
    edu:String,
    git:String,
    link:String,
    gender:String,
    dob:String,

})

export const users = mongoose.model("userdatas",messageSchema);