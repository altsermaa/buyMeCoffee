import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../../utils/prisma";


export const login = async (req: Request, res: Response) => {
    const {email, password} = req.body; 

    try{    
        const isEmailExisted = await prisma.user.findFirst({where: {
        email
    }});

    if(!isEmailExisted) {
        res.send({message: "User does not exist"})
        return;
    } else{
        const hashedPassword = bcrypt.compareSync(password, isEmailExisted.password); 
        
        const tokenPassword = "buyMeCoffee"; 
        if(hashedPassword) {
            const token = jwt.sign({
                userId: isEmailExisted.id
            }, tokenPassword)

        res.status(200).send({ message: "Successfully logged in", token: token });
        return;
        } else {
            res.status(404).send("Wrong password");
            return;
        }
    }
    } catch(err) {
            res.status(500).send(err);
            console.log(err);
            return;
    }
}