import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

export const donate = async (req: Request, res: Response) => {
  const { amount, url, message, donorUserId, recipientUserId } = req.body;
};
