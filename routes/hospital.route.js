import express from "express";
import { getAllHospital, getHospital } from "../controllers/hospital.js";
import { verifyToken } from "../middleware/auth.js";

const hospitalRouter = express.Router();

/* READ */
hospitalRouter.get("/:id", getHospital);
hospitalRouter.get("/", getAllHospital);

export { hospitalRouter };
