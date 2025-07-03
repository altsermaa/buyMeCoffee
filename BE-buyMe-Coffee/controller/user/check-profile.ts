import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

export const checkProfile = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const isProfileExist = await prisma.profile.findFirst({ where: { id } });

    if (!isProfileExist) {
      res.status(200).send({ message: "Profile doesn't exist" });
      return;
    }

    res.send({ message: "Profile is complete" });
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
    return;
  }
};
