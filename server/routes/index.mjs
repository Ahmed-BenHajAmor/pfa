import { Router } from "express";
import adminRoute from "./adminRoutes.mjs";
import signinRoutes from "./signinRoutes.mjs";
import usersRoutes from "./usersRoutes.mjs";


const router = Router();

router.use(adminRoute)
router.use(signinRoutes)
router.use(usersRoutes)
export default router;