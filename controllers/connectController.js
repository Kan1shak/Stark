import { projects } from '/home/akshatb/Stark/models/connect.js';
import { users } from '/home/akshatb/Stark/models/users.js';
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