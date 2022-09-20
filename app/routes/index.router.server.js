import { Router } from "express";
import { helloWorld } from "../controller/index.controller.server.js";
import { goodbyeWorld } from "../controller/index.controller.server.js";

const router = Router();


router.get('/hello', helloWorld);
router.get('/goodbye', goodbyeWorld);


export default router;