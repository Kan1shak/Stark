import { projects } from '../models/connect.js';
import { users } from "../models/users.js";
import jwt from "jsonwebtoken"; 

const getUsername = async (id)=>{
    let a = await users.findById(id);
    return a.username;
}

export const isPresent =async(req,res,next) =>{
    let {token} = req.cookies;
      if(token){

        const decoded=jwt.verify(token,"arimeee");
        req.user = await users.findById(decoded._id);
        res.redirect("/afterhome");
      }
      else{
        next();
      }
}


export const connect_get = async (req,res)=>{
    let {token} = req.cookies;
    if(!token)
    return res.render("connect1");
    const decoded=jwt.verify(token,"arimeee");
    const userName = await getUsername(decoded._id);
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

export  const connect_new_get = async (req,res)=>{
    let {token} = req.cookies;
    const decoded=jwt.verify(token,"arimeee");
    const userName = await getUsername(decoded._id);
    res.render("newConnect", {userName:userName});
}

export  const connect_new_post = async (req,res)=>{
    let {token} = req.cookies;
    const decoded=jwt.verify(token,"arimeee");
    let a = {name:req.body.name,description:req.body.description,skills:req.body.skills.split(","),user:decoded._id};
    projects.create(a).then((response)=>{
        // add the project to the user
        console.log(response._id);
        users.findById(decoded._id).then((b)=>{
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

export  const connect_user_one_get = async (req,res)=>{
    let {token} = req.cookies;
    const decoded=jwt.verify(token,"arimeee");
    const userName = await getUsername(decoded._id);
    users.findById(req.params.id).populate("projects").then((user)=>{
        if (user) {
    let name = user.name;
    let email = user.email;
    let phone = user.phone;
    let username = user.username;
    let job = user.job;
    let description = user.description;
    let sd = user.sd;
    let ad2= user.ad2;
    let ad1=user.ad1;
    let state = user.state;
    let country = user.country;
    let pc=user.pc;
    let area= user.area;
    let edu = user.edu;
    let skills = user.skills;
    let git = user.git;
    let link = user.link;
    let gender = user.gender;
    let dob = user.dob;
        res.render("profileother",{name,email,username,job,sd,description,phone,git,link,skills,gender,dob,ad1,ad2,country,state});
        } else {
            res.redirect("/connect");
        }
    }).catch((err)=>{
        console.log(err);
        res.redirect("/connect");
    });
}

export  const connect_project_one_get = async (req,res)=>{
    let {token} = req.cookies;
    const decoded=jwt.verify(token,"arimeee");
    const userName = await getUsername(decoded._id);
    projects.findById(req.params.id).populate('user').then((a)=>{
        res.render("projectConnect",{project:a, userName:userName});        
    })
    .catch((err)=>{
        console.log(err);
    });
}