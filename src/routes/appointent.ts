import express from "express";
import { addAppointment } from "../controllers/appointment";

const router = express.Router();

router.post("/addappointment", addAppointment);

export default router;
