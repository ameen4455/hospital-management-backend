import express, { Application, Request, Response, NextFunction } from "express";
import userRouter from "./routes/users";
import appointmentRouter from "./routes/appointent";
import doctorRouter from "./routes/doctor";
import hospitalRouter from "./routes/hospital";
import { db } from "./utils/db";
const bodyParser = require("body-parser");
require("dotenv").config();
const { Model } = require("objection");
import cors from "cors";
import doctor from "./routes/doctor";
Model.knex(db);

// Boot express
const app: Application = express();
const port = process.env.PORT || 5000;

app.set("db", db);

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/appointment", appointmentRouter);
app.use("/doctor", doctorRouter);
app.use("/hospital", hospitalRouter);

//ping
app.use("/", (req: Request, res: Response, next: NextFunction) => {
  res
    .status(200)
    .send({ ping: true, db: `This is ${process.env.DB_CONNECTION}` });
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
