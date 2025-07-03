import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { prisma } from "../../utils/prisma";

export const signUp = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;

  try {
    const isEmailExisted = await prisma.user.findFirst({ where: { email } });

    if (!isEmailExisted) {
      const hashedPassword = await bcrypt.hashSync(password, 10);
      await prisma.user.create({
        data: {
          email: email,
          password: hashedPassword,
          username: username,
        },
      });
      res.status(200).send({ message: "Successfully created new user" });
      return;
    }
    res.status(400).send({ message: "User already exists" });
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
    return;
  }
};
