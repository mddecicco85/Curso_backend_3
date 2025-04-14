import { Router } from "express";
import { generateUser } from "../utils/faker.js";
import userModel from "../models/user.js";
import mongoose from 'mongoose';

const usersRouter = Router();

usersRouter.get("/generate", (req, res) => {
  let users = [];
  for (let i = 0; i < 50; i++) {
    users.push(generateUser());
  }
  console.log(users);
  res.send({ status: "success", payload: users });
});

export default usersRouter;
