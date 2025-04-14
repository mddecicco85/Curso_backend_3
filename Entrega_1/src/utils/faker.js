import { fakerDE as faker } from "@faker-js/faker";
import { createHash } from "./bcrypt.js";

export const generatePet = () => {
  return {
    id: faker.database.mongodbObjectId(),
    name: faker.animal.petName(),
    species: faker.animal.type(),
    owner: {}, //Sería un objeto user (VINCULAR A LA COLECCIÓN USER EN EL MODELO)
    //adopted: false,
  };
};

export const generateUser = () => {
  //let pets = [];
  /* let numberPets = faker.number.int({ min: 1, max: 4 });
  for (let i = 0; i < numberPets; i++) {
    pets.push(generatePet()); //Lo crea y asigna con owner: {} y adopted: false
  } */
  let role = "";
  let bit = Math.round(Math.random());
  if (bit === 0) {
    role = "user";
  } else {
    role = "admin";
  }
  return {
    id: faker.database.mongodbObjectId(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    sex: faker.person.sex(),
    birth_date: faker.date.birthdate(),
    phone: faker.phone.number(),
    //img: faker.internet.avatar(),
    email: faker.internet.email(),
    password: createHash("coder123"),
    role: role,
    //pets: [],
    //pets, //Con esto hay un problema con el id_pet
  };
};
