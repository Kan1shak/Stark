import express from "express";
import { profile,editprofile, editprofilepost} from "../controllers/profile.js";

const router = express.Router();

router.get("/profile",profile);

router.get("/editprofile",editprofile);

router.post("/editprofile",editprofilepost);

export default router;

