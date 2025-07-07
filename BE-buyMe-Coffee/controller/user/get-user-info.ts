import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

export const getUserInfo = async (req: Request, res: Response) => {
  const { user } = req.params;

  try {
    const userInfo = await prisma.profile.findFirst({
      where: { userId: Number(user) },
    });
    if (userInfo) {
      res.status(200).send({
        message: "User info is fetched",
        userInfo,
      });
      return;
    } else {
      res.status(404).send({
        message: "User info is not fetched",
      });
    }
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
    return;
  }
};
