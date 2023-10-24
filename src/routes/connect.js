const express = require('express');
const router = express.Router();
const connectController = require('../controllers/connectController');

const isPresent =(req,res,next) =>{
   let token = req.cookies.token;
    if(token){
      next();
    }
    else{
      res.redirect("/login");
    }
}

router.get("/",connectController.connect_get);

router.get("/new",isPresent,connectController.connect_new_get);

router.post("/new",connectController.connect_new_post);

router.get("/user/:id",connectController.connect_user_one_get);

router.get("/project/:id",connectController.connect_project_one_get);

module.exports = router;