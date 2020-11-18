import express, { Application, Request, Response, NextFunction } from "express";
import userRouter from "./routes/users";
import { db } from "./utils/db";
const bodyParser = require("body-parser");
require("dotenv").config();
import cors from "cors";


// Boot express
const app: Application = express();
const port = 8080;

app.set("db", db);

//middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())



app.use("/user", userRouter);

//ping
app.use("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ ping: true, db: `This is ${process.env.DB_CONNECTION}` });
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
