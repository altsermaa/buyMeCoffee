import { Request, response, Response } from "express";
import { prisma } from "../../utils/prisma";

export const createBankCard =async (req: Request, res: Response) => {
    const {country, firstName, lastName, cardNumber, expiryDate, userId} = req.body; 

    try{
         await prisma.bankCard.create({
            data: {
                country: country, 
                firstName: firstName, 
                lastName: lastName, 
                cardNumber: cardNumber, 
                expiryDate: expiryDate, 
                userId: userId
            }
        })
        res
      .status(201)
      .json({ message: "Bank card created successfully"});

    }catch(err: any) {
        res.status(500).send(err);
    console.log(err);
    return;
    }

}