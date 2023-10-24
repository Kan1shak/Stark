import express from "express";


const router = express.Router();


router.get("/services",(req,res)=>{

    res.render("/home/akshatb/Stark/src/views/services.ejs");
})

export default router;