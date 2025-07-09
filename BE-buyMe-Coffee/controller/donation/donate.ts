import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";
// import QRCode from "qrcode";

export const donate = async (req: Request, res: Response) => {
  const { amount, url, message, donorUserId, recipientUserId } = req.body;
  const paymentUrl = "http://localhost:3000/payment/:";

  try {
    await prisma.donation.create({
      data: {
        amount: amount,
        specialMessage: message,
        socialURLOrBuyMeACoffee: url,
        donor: { connect: { id: donorUserId } },
        recipient: { connect: { id: recipientUserId } },
      },
    });
    res.status(201).json({ message: "Donated successfully" });
  } catch (err: any) {
    res.status(500).send(err);
    console.log(err);
    return;
  }
};
