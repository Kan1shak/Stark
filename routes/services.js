import express from "express";
import { renderService,services_get } from "../controllers/services.js";


const router = express.Router();

router.get("/ai",services_get)

// router.get("/services/new",services_new_get);

// router.post("/services/new",services_new_post);

// router.get("/user/:id",services_user_one_get);

// router.get("/services/:id",services_project_one_get);

export default router;