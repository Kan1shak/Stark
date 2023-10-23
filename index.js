import  express  from "express";
import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const app = express();


app.set("view engine","ejs");
let user;
let userName;

// setting Middlewares

app.use(express.static(path.join("/home/akshatb/Stark/src/public")));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// login page -------------------------------------------------------------------------------------------------------------------------------------------------------------------

const isPresent =(req,res,next) =>{
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

const messageSchema= new mongoose.Schema({

    name:String,
    email:String,
    username:String,
    password:String,

})

const users = mongoose.model("userdatas",messageSchema)

app.get("/",(req,res) =>{

    res.render("/home/akshatb/Stark/src/views/index.ejs");
})

app.get("/login",(req,res)=>{

    res.render("/home/akshatb/Stark/src/views/login.ejs");
})

app.get("/done",(req,res)=>{

    res.render("/home/akshatb/login/views/done.ejs");
})

app.get("/login",(req,res)=>{
    

      res.render("/home/akshatb/login/views/login.ejs");
}
)
app.get("/login",isPresent,(req,res)=>{
    

    res.render("/done");
}
)
app.get("/register", (req,res)=>{
    res.render("/home/akshatb/Stark/src/views/register.ejs");
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

app.get("/afterhome",(req,res)=>{

    userName=user.username;
    res.render("/home/akshatb/Stark/src/views/afterhome.ejs",{userName});
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