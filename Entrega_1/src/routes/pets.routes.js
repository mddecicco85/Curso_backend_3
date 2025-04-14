import { Router } from "express";
import { generatePet } from "../utils/faker.js";

const petsRouter = Router();

petsRouter.get("/mockingpets", (req, res) => {
  let pets = [];
  for (let i = 0; i < 100; i++) {
    pets.push(generatePet());
  }
  console.log(pets);
  res.send({ status: "success", payload: pets });
});

export default petsRouter;
