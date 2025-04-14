import { Router } from "express";
import { generateUser, generatePet } from "../utils/faker.js";
import userModel from "../models/user.js";
import petModel from "../models/pet.js";
import mongoose from "mongoose";
import petsRouter from "./pets.routes.js";

const mocksRouter = Router();

mocksRouter.use("/", petsRouter); //Uso la ruta que ya tenía, así no lo modifico.

mocksRouter.get("/mockingusers", async (req, res) => {
  try {
    let users = [];
    for (let i = 0; i < 50; i++) {
      users.push(generateUser());
    }
    console.log(users);
    res.send({ status: "success", payload: users });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

mocksRouter.get("/users", async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).send(users);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

mocksRouter.get("/pets", async (req, res) => {
  try {
    const pets = await petModel.find();
    res.status(200).send(pets);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

mocksRouter.post("/generateData", async (req, res) => {
  try {
    //Si no ingresa cantidad, que cree 1.
    let usersNum = parseInt(req.query.users) || 1;
    let petsNum = parseInt(req.query.pets) || 1;

    for (let i = 0; i < usersNum; i++) {
      await userModel.create(generateUser());
    }
    const users = await userModel.find();
    console.log("Usuarios: ", users);

    for (let i = 0; i < petsNum; i++) {
      await petModel.create(generatePet());
    }
    const pets = await petModel.find();
    console.log("Mascotas: ", pets);

    //res.send({ status: "success", payload: users });
    res.status(201).send("Data generated correctly.");
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

export default mocksRouter;
