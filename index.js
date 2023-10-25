import  express  from "express";
import path from "path";
import cookieParser from "cookie-parser";
import loginrouter from "./routes/login.js";
import servicerouter from "./routes/services.js";
import connectrouter from "./routes/connect.js";
import { isPresent } from "./controllers/login.js";
import {connectDB} from "./data/database.js";
import  connectRouter  from "./routes/connect.js"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import json from "jsonwebtoken";
import { users } from "./models/users.js";

const app = express();

connectDB();

app.set("view engine","ejs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// setting Middlewares

app.use(express.static(path.join("public")));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use("/connect",connectRouter);
app.use(express.static(__dirname + '/views'));

// setting routes

app.use(loginrouter);
app.use(servicerouter);
app.use(connectrouter);

// before login ---------------------------------------------------------------------------------------------------------------------------------------------------------------

app.get("/",isPresent,(req,res) =>{

    res.render("index");
})

// before login ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// after login--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

app.get("/afterhome",async(req,res)=>{
    let {token}=req.cookies;
    if(token)
    {
        const decoded = json.verify(token,"arimeee");
       const user = req.user = await users.findById(decoded._id);
        let userName=user.username;
        res.render("afterhome",{userName});
    }
    else
        res.redirect("/");
})

app.get("/profile",(req,res)=>{

    res.send("profile");
})


//after login-------------------------------------------------------------------------------------------------------------------------------------------------------------------

// services page-----------------------------------------------------------------------------------------------------------------------------------------------------------------

app.get("/afterhome/services",async(req,res)=>{
    let {token}=req.cookies;
    if(token){
        const decoded = json.verify(token,"arimeee");
       const user =  req.user = await users.findById(decoded._id);
        let userName = user.username;
        res.render("servicesafter",{userName});
    }
    else{
        res.render("services");
    }
}
)
app.get("/services",async(req,res)=>{
    let {token}=req.cookies;
    if(!token)
    return res.render("services");
    const decoded = json.verify(token,"arimeee");
       const user = req.user = await users.findById(decoded._id);
       let userName=user.username;
        res.render("servicesafter",{userName});
}
)
// services page-----------------------------------------------------------------------------------------------------------------------------------------------------------------

app.listen(3000,()=>{

    console.log("SERVER IS WORKING");
})

