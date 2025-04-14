import { Schema, model } from "mongoose";

const userCollection = "users";

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  birth_date: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    //default: "user"
  },
  password: {
    type: String,
    required: true,
    //default: "coder123"
  },
  pets: {
    type: [
      //Cada objeto del vector tiene una sola propiedad: id_pet
      {
        id_pet: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "pets",
        },
      },
    ],
    default: [],
  },
});

userSchema.pre("findOne", function () {
  //Al hacer el método findOne, voy a ejecutar esa función.
  this.populate("pets.id_pet"); //vector.propiedad_de_los_objetos (ENTRE COMILLAS)
  //populate necesita recibir una CADENA con el nombre del campo que deseas poblar.
}); //Que traiga toda la información del carrito cuando lo consulto.
userSchema.pre("find", function () {
  //Para que funcione también con findById
  this.populate("pets.id_pet");
});

const userModel = model(userCollection, userSchema);

export default userModel;
