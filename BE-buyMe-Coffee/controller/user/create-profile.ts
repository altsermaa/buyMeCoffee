import { Request, response, Response } from "express";
import { prisma } from "../../utils/prisma";

export const createProfile = async (req: Request, res: Response) => {
  const { image, name, about, url, userId } = req.body;

  try {
    const newProfile = await prisma.profile.create({
      data: {
        name: name,
        about: about,
        avatarImage: image,
        socialMediaURL: url,
        user: { connect: { id: userId } },
      },
    });

    res
      .status(201)
      .json({ message: "Profile created successfully", profile: newProfile });
  } catch (err: any) {
    res.status(500).send(err);
    console.log(err);
    return;
  }
};
