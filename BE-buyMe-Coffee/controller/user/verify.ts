import { Request, response, Response } from "express";
import jwt from "jsonwebtoken";

export const verify = async (req: Request, res: Response) => {
  const auth = req.headers.authorization;
  if (!auth) {
    response.status(401).send({ message: "token is not valid" });
    return;
  }

  const token = auth.split(" ")[1];

  const tokenPassword = "buyMeCoffee";
  try {
    const isValid = jwt.verify(token, tokenPassword);
    if (isValid) {
      const destructedToken = jwt.decode(token);
      res.status(200).send(destructedToken);
      return;
    } else {
      res.status(401).send({ message: "token is not valid" });
    }
  } catch (err) {
    res.status(401).send({ message: "token is not valid" });
  }
};
