import  express  from "express";
import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const app = express();



app.set("view engine","ejs");
// setting Middlewares

app.use(express.static(path.join("/home/akshatb/Stark/src/public")));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// login page -------------------------------------------------------------------------------------------------------------------------------------------------------------------

let user;
const isPresent =async(req,res,next) =>{
    let {token} = req.cookies;
      if(token){

        const decoded=jwt.verify(token,"arimeee");
        req.user = await users.findById(decoded._id);
        res.redirect("/afterhome");
      }
      else{
        next();
        user=null;
      }
}

const check =async(req,res,next)=>{

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
            res.render("/home/akshatb/Stark/src/views/login.ejs",{username,message:"Incorrect Password"});
        }
        else{
            res.redirect("/register");
        }
     }

mongoose.connect("mongodb://localhost:27017",{
    dbName:"login",

}).then(()=> console.log("DATABASE CONNECTED"))
.catch(()=>console.log('e'));

const messageSchema= new mongoose.Schema({

    name:String,
    email:String,
    username:String,
    password:String,
    profile:Object,

})

const users = mongoose.model("userdatas",messageSchema)

app.get("/",isPresent,(req,res) =>{

    res.render("/home/akshatb/Stark/src/views/index.ejs");
})

app.get("/login",(req,res)=>{

    res.render("/home/akshatb/Stark/src/views/login.ejs");
})
app.get("/register", (req,res)=>{
    res.render("/home/akshatb/Stark/src/views/register.ejs");
})
app.post("/register",async(req,res)=>{

    (req.body);

    let userData= {name:req.body.Name,email:req.body.email,username:req.body.username,password:req.body.password,profile:{}};
    let email=userData.email;
    let user = await users.findOne({email});
    if(user)
    {
        return res.redirect("/login");
    }
    const hashedpassword = await bcrypt.hash(userData.password,10);
    
    userData= {name:req.body.Name,email:req.body.email,username:req.body.username,password:hashedpassword,profile:{}};

    users.create(userData);

    res.redirect("/login");

})

app.post("/login",check,(req,res)=>{

    const token = jwt.sign({_id:user._id},"arimeee");

    res.cookie("token", token,{
    httpOnly:true,
    maxAge: 99999999,
    })
    res.redirect("/");
}
)

// login page--------------------------------------------------------------------------------------------------------------------------------------------------------------------

// after login-------------------------------------------------------------------------------------------------------------------------------------------------------------------

app.get("/afterhome",(req,res)=>{
    let {token}=req.cookies;
    let userName = user.username;
    if(token)
    {
        res.render("/home/akshatb/Stark/src/views/afterhome.ejs",{userName});
    }
    else
        res.redirect("/");
})

app.get("/profile",(req,res)=>{

    res.send("profile");
})


//after login-------------------------------------------------------------------------------------------------------------------------------------------------------------------

// services page-----------------------------------------------------------------------------------------------------------------------------------------------------------------

app.get("/services",(req,res)=>{

    res.render("/home/akshatb/Stark/src/views/services.ejs");
})
// services page-----------------------------------------------------------------------------------------------------------------------------------------------------------------

app.listen(3000,()=>{

    console.log("SERVER IS WORKING");
})