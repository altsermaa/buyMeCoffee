import { prisma } from "../../utils/prisma";
import { Request, response, Response } from "express";

export const checkDetailInfo = async (req: Request, res: Response) => {
  const { userId } = req.body;

  try {
    const isProfileExisted = await prisma.profile.findFirst({
      where: { userId },
    });
    const isBankCardExisted = await prisma.bankCard.findFirst({
      where: { userId },
    });

    if (isProfileExisted && !isBankCardExisted) {
      res
        .status(200)
        .send({
          message: "Bank card info is missing",
          profile: true,
          bankCard: false,
        });
      return;
    }
    res
      .status(400)
      .send({
        message: "Profile and bank card infos are missing",
        profile: false,
        bankCard: false,
      });
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
    return;
  }
};
