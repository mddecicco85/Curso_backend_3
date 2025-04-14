import express from "express";
import __dirname from "./utils/path.js";
import usersRouter from "./routes/users.routes.js";
import petsRouter from "./routes/pets.routes.js";
import mocksRouter from "./routes/mocks.routes.js";
import mongoose from "mongoose";

const app = express();

const server = app.listen(8080, () => console.log("Listening on PORT 8080."));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

//app.use("/api/users", usersRouter);
//app.use("/api/pets", petsRouter);
app.use("/api/mocks", mocksRouter);

mongoose
  .connect(
    "mongodb+srv://mddecicco85:OP8eeeOJ0uSHNI4Z@cluster0.uh8jie7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Conectado a la DB."))
  .catch((e) => console.log("Error al conectar con la DB: ", e));
