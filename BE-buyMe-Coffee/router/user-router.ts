import { Router } from "express";
import { signUp } from "../controller/user/sign-up";
import { login } from "../controller/user/login";
import { checkUserName } from "../controller/user/check-user-name";

export const UserRouter = Router();

UserRouter.post("/signUp", signUp);
UserRouter.post("/login", login);
UserRouter.post("/checkUserName", checkUserName);
