import mongoose from 'mongoose';
const projectSchema = mongoose.Schema({
    name:String,
    description:String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userdatas'
    },
    skills: [String],
});

export const projects = mongoose.model("projects",projectSchema);