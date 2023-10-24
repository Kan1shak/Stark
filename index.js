import  express  from "express";
import path from "path";
import cookieParser from "cookie-parser";
import loginrouter from "./src/routes/login.js"
import { isPresent } from "./src/controllers/login.js";
import { user } from "./src/controllers/login.js";
import {connectDB} from "./src/data/database.js";

const app = express();

connectDB();

app.set("view engine","ejs");

// setting Middlewares

app.use(express.static(path.join("/home/akshatb/Stark/src/public")));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(loginrouter);

// before login ---------------------------------------------------------------------------------------------------------------------------------------------------------------

app.get("/",isPresent,(req,res) =>{

    res.render("/home/akshatb/Stark/src/views/index.ejs");
})

// before login ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// after login--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

app.get("/afterhome",(req,res)=>{
    let {token}=req.cookies;
    const userName = user.username;
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