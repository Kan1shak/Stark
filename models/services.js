import mongoose from "mongoose";

const servicesSchema = mongoose.Schema({
    username:String,
    name:String,
    description:String,
    skills:[String],
    servicetype:[String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userdatas'
    },
    responses:[Object],
    skills: [String],
    }
);
const responsesSchema = mongoose.Schema({
    id:String,
    name:String,
    description:String,
    yourskillls:String,
    emailID:String,
    phone:Number,
    links:String,
    services: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'services'
    },
});

export const services = mongoose.model("services",servicesSchema);
export const responses = mongoose.model("responses",responsesSchema);
