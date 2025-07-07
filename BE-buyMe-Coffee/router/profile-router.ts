import { Router } from "express";
import { getAllUsers } from "../controller/profiles/get-all-users";


export const ProfileRouter = Router();
ProfileRouter.get("/getAllUsers", getAllUsers);