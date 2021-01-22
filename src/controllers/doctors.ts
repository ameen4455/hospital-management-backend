// TODO get doctors from hospital id

// TODO get all doctors
import { Request, Response } from "express";
import { Doctor } from "../models/doctors";

export const getDoctor = async function (req: Request, res: Response) {
  try {
    const { hid } = req.params;

    const data = await Doctor.query()
      .select("*")
      .join("works", "works.d_id", "doctor.id")
      .where("h_id", hid);
    if (!data) {
      res.sendStatus(400);
      return;
    }

    res.send({ data });
  } catch (e) {
    res.status(500).send(e);
    console.log(e);
  }
};
// TODO add doctor
