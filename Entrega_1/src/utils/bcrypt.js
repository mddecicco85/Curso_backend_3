//import bcrypt from 'bcrypt';  //Para encriptar las contraseñas. Importa bcrypt completo.
import { hashSync, compareSync, genSaltSync } from "bcrypt"; //Importo lo que necesito.
//Si no hago esto, tengo que poner siempre bcrypt.hashSync, bcrypt.compareSync, etc.

//hashSync toma el password y hace el hasheo a partir de un Salt.
//genSaltSync genera el string Salt, que hace que el hasheo sea impredecible.
//La función devuelve un String con el password hasheado. El proceso es IRREVERSIBLE.

export const createHash = (password) => hashSync(password, genSaltSync(10));

//compareSync toma el password sin hashear y lo compara con el hasheado en la DB. Devuelve true o false.
export const validatePassword = (passIngresada, passBD) => {
  return compareSync(passIngresada, passBD); //compareSync(ingresado, en la DB)
};

/* const pass = "hola";
const hashedPass = createHash(pass);
console.log(hashedPass);
console.log(validatePassword(pass, hashedPass)); //Da undefined si la función no tiene el return
console.log(compareSync(pass, hashedPass)); */
