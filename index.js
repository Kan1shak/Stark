const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
// moved the user model to a separate file and import it here
const users = require("./src/models/users");
const connectRouter = require("./src/routes/connect");

const app = express();

const dirname = path.resolve();

app.set("view engine","ejs");
app.set("views", path.join(dirname, "src/views"));

let user;
let userName;

// setting Middlewares

app.use(express.static(path.join(dirname, "src/public")));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// login page -------------------------------------------------------------------------------------------------------------------------------------------------------------------

const isPresent =(req,res,next) =>{
    let token = req.cookies.token;
     if(token){
       next();
     }
     else{
       res.redirect("/login");
     }
 }

const check =async(req,res,next)=>{
    let a={username:req.body.USERNAME,password:req.body.PASSWORD}
    const b = users.findOne(a).then((b)=>{
        if(b)
        {
            user = b;
            next();
        }
        else{
            res.redirect("/register");
        }
    });

}

mongoose.connect("mongodb://localhost:27017",{
    dbName:"login",

}).then(()=> console.log("DATABASE CONNECTED"))
.catch(()=>console.log('e'));


app.get("/",(req,res) =>{

    res.render("index");
})

app.get("/login",(req,res)=>{

    res.render("login");
})

app.get("/done",isPresent,(req,res)=>{

    res.render("done");
})

app.get("/login",isPresent,(req,res)=>{
    res.render("/done");
})

app.get("/register", (req,res)=>{
    res.render("register");
})
app.post("/register",(req,res)=>{

    (req.body);
    const userData= {name:req.body.Name,email:req.body.email,username:req.body.username,password:req.body.password};
    
    users.create(userData);

    res.redirect("/login");

})

app.post("/login",check,(req,res)=>{
    res.cookie("token", user._id,{
    httpOnly:true,
    maxAge: 99999999,
    }
    )
    res.redirect("/afterhome");
}
)

// login page--------------------------------------------------------------------------------------------------------------------------------------------------------------------

// after login-------------------------------------------------------------------------------------------------------------------------------------------------------------------

app.get("/afterhome",isPresent,(req,res)=>{

    userName=user.username;
    res.render("afterhome",{userName});
})

app.get("/profile",isPresent,(req,res)=>{

    res.send("profile");
})


//after login-------------------------------------------------------------------------------------------------------------------------------------------------------------------

// services page-----------------------------------------------------------------------------------------------------------------------------------------------------------------

app.get("/services",isPresent,(req,res)=>{

    res.render("services");
})
// services page-----------------------------------------------------------------------------------------------------------------------------------------------------------------


app.use("/connect",isPresent,connectRouter);

app.listen(3000,()=>{

    console.log("SERVER IS WORKING");
})