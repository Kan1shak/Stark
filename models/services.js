import mongoose from "mongoose";

const servicesSchema = mongoose.Schema({
    name:String,
    description:String,
    wages:String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userdatas'
    },
    skills: [String],
});