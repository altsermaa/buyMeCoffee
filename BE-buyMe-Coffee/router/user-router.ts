import { Router } from "express";
import { signUp } from "../controller/user/sign-up";
import { login } from "../controller/user/login";
import { checkUserName } from "../controller/user/check-user-name";
import { verify } from "../controller/user/verify";
import { checkProfile } from "../controller/user/check-profile";
import { createBankCard } from "../controller/user/create-bank-card";
import { checkDetailInfo } from "../controller/user/check-detail-info";
import { createProfile } from "../controller/user/create-profile";
import { getUserInfo } from "../controller/user/get-user-info";

export const UserRouter = Router();

UserRouter.post("/signUp", signUp);
UserRouter.post("/login", login);
UserRouter.post("/checkUserName", checkUserName);
UserRouter.post("/verify", verify);
UserRouter.post("/checkProfile", checkProfile);
UserRouter.post("/createProfile", createProfile);
UserRouter.post("/createBankCard", createBankCard);
UserRouter.post("/checkDetailInfo", checkDetailInfo);
UserRouter.get("/getUserInfo/:user", getUserInfo);
