import express from "express";
import { register } from "../controllers/register";

const registerRouter = express.Router();

registerRouter.post("/", register);

module.exports = { registerRouter };

