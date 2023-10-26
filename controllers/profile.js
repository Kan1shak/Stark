import { users } from "../models/users.js";
import json from "jsonwebtoken";

export const profile = async(req,res)=>{
    let {token} = req.cookies;
    if(!token)
    res.redirect("/login");
    const decoded = json.verify(token,"arimeee");
    const user = req.user = await users.findById(decoded._id);
    let name = user.name;
    let email = user.email;
    let phone = user.phone;
    let username = user.username;
    let job = user.job;
    let description = user.description;
    let sd = user.sd;
    let git = user.git;
    let link = user.link;
    let skills = user.skills;
    let gender = user.gender;
    let ad1 = user.ad1;
    let ad2 = user.ad2;
    let country = user.country;
    let state = user.state;
    let dob = new Date(user.dob).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"});
    res.render("profilepage",{name,email,username,job,sd,description,phone,git,link,skills,gender,dob,ad1,ad2,country,state});
}

export const editprofile = async(req,res)=>{
    let {token} = req.cookies;
    if(!token)
    res.redirect("/login");
    const decoded = json.verify(token,"arimeee");
    const user = req.user = await users.findById(decoded._id);
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
    res.render("editprofile",{name,email,username,job,sd,phone,description,ad1,ad2,state,country,pc,area,edu,skills,git,link,gender,dob});
}

export const editprofilepost = async(req,res)=>{
    let {token} = req.cookies;
    if(!token)
    res.redirect("/login");
    const decoded = json.verify(token,"arimeee");
  await users.findByIdAndUpdate(decoded._id,{
    name:req.body.name,
    description:req.body.description,skills:req.body.skills.split(","),phone:req.body.phone,email:req.body.email,username:req.body.username,job:req.body.job,sd:req.body.sd,ad1:req.body.ad1,ad2:req.body.ad2,state:req.body.state,country:req.body.country,pc:req.body.pc,edu:req.body.edu,area:req.body.area,git:req.body.git,link:req.body.link,
    gender:req.body.gender, dob:req.body.dob,
  }
  )
  res.redirect("/profile");
}