import express from "express";
import { addAppointment, getAppointment } from "../controllers/appointment";

const router = express.Router();

router.post("/addappointment", addAppointment);
router.get("/:user", getAppointment);

export default router;
