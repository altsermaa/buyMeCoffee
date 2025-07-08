import { Router } from "express";
import { donate } from "../controller/donation/donate";

export const DonationRouter = Router();
DonationRouter.post("/donate", donate)