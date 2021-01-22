import express from "express";
import { getHospital } from "../controllers/hospital";

const router = express.Router();

router.get("/", getHospital);

export default router;
