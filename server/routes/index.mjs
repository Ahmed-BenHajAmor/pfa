import { Router } from "express";
import adminRoute from "./adminRoutes.mjs";


const router = Router();

router.use(adminRoute)
export default router;