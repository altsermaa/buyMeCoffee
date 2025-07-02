import { Request, response, Response } from "express";
import bcrypt from "bcrypt";
import { prisma } from "../../utils/prisma";

export const checkUserName = async (req: Request, res: Response) => {
  const { username } = req.body;

  try {
    const isUserNameExisted = await prisma.user.findFirst({ where: { username } });

    if (!isUserNameExisted) {
      res.status(200).send({ message: "Username available" });
      return;
    }
    res.status(400).send({ message: "User already exists" });
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
    return;
  }
};
