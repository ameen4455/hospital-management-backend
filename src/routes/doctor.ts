import express from "express";
import { getDoctor } from "../controllers/doctors";

const router = express.Router();

router.get("/:hid", getDoctor);

export default router;
