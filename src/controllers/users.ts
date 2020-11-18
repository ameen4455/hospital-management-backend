import { Request, Response } from "express";

const bcrypt = require("bcryptjs");

function validateEmail(mail: any) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail
    )
  ) {
    return true;
  }
  return false;
}

const getUserFromDB = async (email: string, db: any) => {
  return db
    .select("*")
    .from("users")
    .where("email", email)
    .then((rows: any) => rows);
};

const insertUserIntoDB = async (email: string, password: string, db: any) => {
  return db
    .insert({ email, password })
    .into("users")
    .returning("*")
    .then((rows: any) => {
      return rows[0];
    });
};

const checkIfInvalid = (email: string, password: string) => {
  if (!validateEmail(email)) {
    return true;
  }

  if (password.length < 5) {
    return true;
  }

  return false;
};

export const login = async function (req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (checkIfInvalid(email, password)) {
      res.status(400).send({ message: "Invalid username or password" });
      return;
    }

    const db = req.app.get("db");

    const user = await getUserFromDB(email, db);

    if (user[0]) {
      bcrypt.compare(password, user[0].password, async function (
        err: any,
        resp: any
      ) {
        if (resp) {
          res.send({ token:"thisisafaketokenpleasegenerate" });
        } else {
          res.status(400).send({ message: "Invalid username or password" });
          return;
        }
      });
    } else {
      res.status(400).send({ message: "Invalid username or password" });
      return;
    }
  } catch (e) {
    res.status(500).send(e);
    console.log(e);
  }
};

export const register = async function (req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (checkIfInvalid(email, password)) {
      res.status(400).send({ message: "Invalid username or password" });
      return;
    }

    const db = req.app.get("db");

    let user;

    console.log(req.body);

    const ifUser = await getUserFromDB(email, db);

    if (ifUser.length) {
      res.status(400).send({ message: "Email is taken" });
      return;
    }

    bcrypt.hash(password, 10, async function (err: any, hash: any) {
      const user = await insertUserIntoDB(email, hash, db);
    });

    res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e);
    console.log(e);
  }
};
