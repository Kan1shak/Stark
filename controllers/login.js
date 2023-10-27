import jwt from "jsonwebtoken"; 
import { users } from "../models/users.js";
import bcrypt from "bcrypt";

export let user;
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

export const check =async(req,res,next)=>{

    const username= req.body.USERNAME;
    const password= req.body.PASSWORD;
    let check = await users.findOne({username});
        if(check)
        {
            user=check;
            const match= await bcrypt.compare(password,user.password);
            if(match)
            next();
            else
            res.render("login",{username:username,message:"Incorrect Password"});
        }
        else{
            res.redirect("/register");
        }
     }
export const login =(req,res)=>{
    res.render("login");
}

export const register = (req,res)=>{
    res.render("register");
}
export const login_post = (req,res)=>{

    const token = jwt.sign({_id:user._id},"arimeee");

    res.cookie("token", token,{
    httpOnly:true,
    })
    res.redirect("/");
}

export const register_post = async(req,res)=>{

    (req.body);

    let userData= {name:req.body.Name,email:req.body.email,username:req.body.username,password:req.body.password,profile:{}};
    let email=userData.email;
    let username=userData.username;
    let user = await users.findOne({email});
    let userNameExists = await users.findOne({username});
    if(user)
    {
        return res.render("login",{message:"Email is already registered"});
    }
    user = await users.findOne({username});
    if(userNameExists)
    {
        return res.render("register", {message:"Username already taken",email:userData.email,name:userData.name});
    }
    const hashedpassword = await bcrypt.hash(userData.password,10);
    
    userData= {name:req.body.Name,email:req.body.email,username:req.body.username,password:hashedpassword,profile:{}};

    users.create(userData);

    res.redirect("/login");

}
