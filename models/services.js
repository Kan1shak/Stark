import mongoose from "mongoose";

const servicesSchema = mongoose.Schema({
    name:String,
    description:String,
    skills:[String],
    servicetype:[String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userdatas'
    },
    skills: [String],
    responses:{
        name:String,
        description:String,
        yourskillls:String,
        emailID:String,
        phonenumber:Number,
        connectlinks:String,
        img:{
            data:Buffer,
            contentType:String,
        }
    }
});


export const services = mongoose.model("services",servicesSchema);
