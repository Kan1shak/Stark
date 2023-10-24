import express  from 'express';
const router = express.Router();
import { connect_get, connect_new_get, connect_new_post, connect_user_one_get, connect_project_one_get } from '/home/akshatb/Stark/controllers/connectController.js';

router.get("/connect",connect_get);

router.get("/new",connect_new_get);

router.post("/new",connect_new_post);

router.get("/user/:id",connect_user_one_get);

router.get("/project/:id",connect_project_one_get);

export default router;