import { Router } from "express";
import { signUp } from "../controller/user/sign-up";

export const UserRouter = Router();

UserRouter.post("/signUp", signUp);
UserRouter.post("/login", login);
