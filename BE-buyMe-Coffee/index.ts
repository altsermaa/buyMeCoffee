import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { prisma } from "./utils/prisma";
import { UserRouter } from "./router/user-router";

const app = express();
app.use(express.json());
dotenv.config();

app.use(UserRouter);

// app.get("/", async (_req: Request, res: Response) => {
//   console.log(process.env.DATABASE_URL);
//   res.send("hello");
// });

// app.post("/addUser", async (req: Request, res: Response) => {
//   const { email, password, username } = req.body;

//   await prisma.user.create({
//     data: {
//       email: email,
//       password: password,
//       username: username,
//     },
//   });
//   res.send("created new user");
// });

app.listen(5000, () => {
  console.log("Server is running on 5000");
});
