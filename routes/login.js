import express from "express";
import { register } from "../controllers/login.js";
import { login } from "../controllers/login.js";
import { check } from "../controllers/login.js";
import { register_post } from "../controllers/login.js";
import { login_post } from "../controllers/login.js";

const router = express.Router();


router.get("/login",login);
router.get("/register",register );
router.post("/register",register_post);

router.post("/login",check,login_post);

export default router;