const mongoose = require('mongoose');
const projects = require('../models/connect');
const users = require('../models/users');

exports.connect_get = (req,res)=>{
    let projectsList;
    let usersList;
    projects.find().then((a)=>{
        projectsList = a;
    }).catch((err)=>{
        console.log(err);
    });
    users.find().then((a)=>{
        usersList = a;
    }).catch((err)=>{
        console.log(err);
    });
    res.render("connect",{projects:projectsList,users:usersList});
}

exports.connect_new_get = (req,res)=>{
    res.render("newConnect");
}

exports.connect_new_post = (req,res)=>{
    let a = {name:req.body.name,description:req.body.description,skills:req.body.skills};
    projects.create(a).then(()=>{
        res.redirect("/connect");
    }).catch((err)=>{
        console.log(err);
    });
}

exports.connect_user_one_get = (req,res)=>{
    projects.find({user:req.params.id}).then((a)=>{
        res.render("userConnect",{user:a});
    }).catch((err)=>{
        console.log(err);
    });
}

exports.connect_project_one_get = (req,res)=>{
    projects.findById(req.params.id).populate('user').then((a)=>{
        res.render("projectConnect",{project:a});        
    })
    .catch((err)=>{
        console.log(err);
    });
}