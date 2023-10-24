import  express  from "express";
import path from "path";
import cookieParser from "cookie-parser";
import loginrouter from "./src/routes/login.js"
import servicerouter from "./src/routes/services.js"
import { isPresent } from "./src/controllers/login.js";
import { user } from "./src/controllers/login.js";
import {connectDB} from "./src/data/database.js";
import  connectRouter  from "./src/routes/connect.js"
const app = express();

connectDB();

app.set("view engine","ejs");

// setting Middlewares

app.use(express.static(path.join("/home/akshatb/Stark/src/public")));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use("/connect",connectRouter);

// setting routes

app.use(loginrouter);
app.use(servicerouter);

// before login ---------------------------------------------------------------------------------------------------------------------------------------------------------------

app.get("/",isPresent,(req,res) =>{

    res.render("/home/akshatb/Stark/src/views/index.ejs");
})

// before login ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// after login--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

app.get("/afterhome/services",(req,res)=>{

    let userName = user.username;
    console.log(userName);
    res.render("/home/akshatb/Stark/src/views/servicesafter.ejs",{userName});
})

// services page-----------------------------------------------------------------------------------------------------------------------------------------------------------------

app.listen(3000,()=>{

    console.log("SERVER IS WORKING");
})

