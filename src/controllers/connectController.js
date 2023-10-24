const mongoose = require('mongoose');
const projects = require('../models/connect');
const users = require('../models/users');
const { redirect } = require('express/lib/response');

const getUsername = async (id)=>{
    let a = await users.findById(id);
    return a.username;
}

exports.connect_get = async (req,res)=>{
    const userName = await getUsername(req.cookies.token);
    let projectsList;
    let usersList;
    await projects.find().populate("user").then((a)=>{
        projectsList = a;
    }).catch((err)=>{
        console.log(err);
    });
    await users.find().then((a)=>{
        usersList = a;
    }).catch((err)=>{
        console.log(err);
    });
    res.render("connect",{projectsList:projectsList,usersList:usersList,userName:userName});
}

exports.connect_new_get = async (req,res)=>{
    const userName = await getUsername(req.cookies.token);
    res.render("newConnect", {userName:userName});
}

exports.connect_new_post = (req,res)=>{
    let a = {name:req.body.name,description:req.body.description,skills:req.body.skills.split(","),user:req.cookies.token};
    projects.create(a).then((response)=>{
        // add the project to the user
        console.log(response._id);
        users.findById(req.cookies.token).then((b)=>{
            a.projectId = response._id;
            b.projects.push(a);
            b.save();
        }).catch((err)=>{
            console.log(err);
        });
        res.redirect("/connect");
    }).catch((err)=>{
        console.log(err);
    });
}

exports.connect_user_one_get = async (req,res)=>{
    const userName = await getUsername(req.cookies.token);
    users.findById(req.params.id).populate("projects").then((a)=>{
        if (a) {
        res.render("userConnect",{user:a, userName:userName});
        } else {
            res.redirect("/connect");
        }
    }).catch((err)=>{
        console.log(err);
        res.redirect("/connect");
    });
}

exports.connect_project_one_get = async (req,res)=>{
    const userName = await getUsername(req.cookies.token);
    projects.findById(req.params.id).populate('user').then((a)=>{
        res.render("projectConnect",{project:a, userName:userName});        
    })
    .catch((err)=>{
        console.log(err);
    });
}