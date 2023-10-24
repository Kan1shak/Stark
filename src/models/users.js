import mongoose from "mongoose";

const messageSchema= new mongoose.Schema({

    name:String,
    email:String,
    username:String,
    password:String,
    profile:Object,

})

export const users = mongoose.model("userdatas",messageSchema);