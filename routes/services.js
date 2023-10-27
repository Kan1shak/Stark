import express from "express";
import { renderService,services_get,newService,service_new_post, services_get_ai, services_get_wp, services_get_DE, services_get_logo, services_get_ve, services_get_vo, services_get_trans, services_get_sm, openform, openformpost} from "../controllers/services.js";
import { services_user_one_get } from "../controllers/services.js";


const router = express.Router();

router.get("/servicedetail",services_get);

router.get("/servicedetailai",services_get_ai);

router.get("/servicedetaillogo",services_get_logo);

router.get("/servicedetailwp",services_get_wp);

router.get("/servicedetailDE",services_get_DE);

router.get("/servicedetailve",services_get_ve);

router.get("/servicedetailvo",services_get_vo);

router.get("/servicedetailtrans",services_get_trans);

router.get("/servicedetailsm",services_get_sm);

router.get("/newservice",newService);

router.post("/newservice",service_new_post);

router.get("/openform/:id",openform);

router.post("/openform/:id",openformpost);

router.get("/user/:id",services_user_one_get);

// router.post("/services/new",services_new_post);

// router.get("/user/:id",services_user_one_get);

// router.get("/services/:id",services_project_one_get);

export default router;