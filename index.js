import  express  from "express";
import path from "path";
import cookieParser from "cookie-parser";
import loginrouter from "./routes/login.js"
import servicerouter from "./routes/services.js"
import { isPresent } from "./controllers/login.js";
import { user } from "./controllers/login.js";
import {connectDB} from "./data/database.js";
import  connectRouter  from "./routes/connect.js"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

connectDB();

app.set("view engine","ejs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// setting Middlewares

app.use(express.static(path.join("/home/akshatb/Stark/public")));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use("/connect",connectRouter);
app.use(express.static(__dirname + '/views'));

// setting routes

app.use(loginrouter);
app.use(servicerouter);

// before login ---------------------------------------------------------------------------------------------------------------------------------------------------------------

app.get("/",isPresent,(req,res) =>{

    res.render("index");
})

// before login ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// after login--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

app.get("/afterhome",(req,res)=>{
    let {token}=req.cookies;
    let userName = user.username;
    if(token)
    {
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

app.get("/afterhome/services",(req,res)=>{

    let userName = user.username;
    console.log(userName);
    res.render("servicesafter",{userName});
})

// services page-----------------------------------------------------------------------------------------------------------------------------------------------------------------

app.listen(3000,()=>{

    console.log("SERVER IS WORKING");
})

