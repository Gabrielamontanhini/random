import { getRandomPerson } from "controllers/random.controllers";
import { Router } from "express";

const randomRouter = Router()

randomRouter.get("/person", getRandomPerson)

export default randomRouter