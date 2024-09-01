import { signup,login } from "../controller/user.controller.js";
import express from "express";
const urouter = express.Router();
urouter.post("/signup",signup);
urouter.post("/login",login);
export default urouter;
