import { Router } from "express";
import randomRouter from "./random.routes";

const router = Router()
router.use(randomRouter)
export default router