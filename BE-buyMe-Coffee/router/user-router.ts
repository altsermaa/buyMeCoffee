import { Router } from "express";
import { signUp } from "../controller/user/sign-up";
import { login } from "../controller/user/login";
import { checkUserName } from "../controller/user/check-user-name";
import { verify } from "../controller/user/verify";
import { checkProfile } from "../controller/user/check-profile";
// import { createProfile } from "../controller/user/create-profile";
import { createBankCard } from "../controller/user/create-bank-card";

export const UserRouter = Router();

UserRouter.post("/signUp", signUp);
UserRouter.post("/login", login);
UserRouter.post("/checkUserName", checkUserName);
UserRouter.post("/verify", verify);
UserRouter.post("/checkProfile", checkProfile);
// UserRouter.post("/createProfile", createProfile);
UserRouter.post("/createBankCard", createBankCard);
