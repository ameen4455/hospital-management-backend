// TODO Add doctors

import { Request, Response } from "express";
import { Hospital } from "../models/hospital";

export const getHospital = async function (req: Request, res: Response) {
  try {
    const data = await Hospital.query().select("*");

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
