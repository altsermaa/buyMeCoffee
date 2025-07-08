import dotenv from "dotenv";
import express from "express";
import { UserRouter } from "./router/user-router";
import cors from "cors";
import { ProfileRouter } from "./router/profile-router";
import { DonationRouter } from "./router/donation";

const app = express();
app.use(express.json());
dotenv.config();

app.use(cors());
app.use(UserRouter);
app.use(ProfileRouter);
app.use(DonationRouter);

app.listen(8000, () => {
  console.log("Server is running on 8000");
});
