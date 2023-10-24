const mongoose = require('mongoose');
const projectSchema = mongoose.Schema({
    name:String,
    description:String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userdatas'
    },
    skills: [String],
});

module.exports = mongoose.model("projects",projectSchema);