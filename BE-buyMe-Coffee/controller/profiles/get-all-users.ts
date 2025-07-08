import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

export const getAllUsers = async (req: Request, res: Response) => {
  const userId = Number(res.locals.userId);

  try {
    const allUsersProfiles = await prisma.profile.findMany({
      where: {
        userId: {
          not: userId,
        },
      },
    });

    if (allUsersProfiles) {
      res.status(200).send({
        message: "All profiles are fetched",
        allUsersProfiles,
      });
      return;
    } else {
      res.status(404).send({
        message: "Users data are not fetched",
      });
      return;
    }
  } catch (err: any) {
    res.status(500).send(err);
    console.log(err);
    return;
  }
};
