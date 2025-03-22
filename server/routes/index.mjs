import { Router } from "express";
import adminRoute from "./adminRoutes.mjs";
import signinRoutes from "./signinRoutes.mjs";
import usersRoutes from "./usersRoutes.mjs";
import seanceRoutes from "./seanceRoutes.mjs";


const router = Router();

router.use(adminRoute)
router.use(signinRoutes)
router.use(usersRoutes)
router.use(seanceRoutes)
export default router;