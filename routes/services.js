import express from "express";
import { renderService } from "../controllers/services.js";


const router = express.Router();


router.get("/services",renderService)

export default router;