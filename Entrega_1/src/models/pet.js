import { Schema, model } from "mongoose";

const petCollection = "pets";

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true
  },
  /* owner: {
    //type: Schema.Types.ObjectId, //HAY UN PROBLEMA DE DOBLE VINCULACIÓN/POPULATE
    type: Array,
    default: [], //Si pongo {} con type Object, no anda. Podría tener más de 1 dueño.
  }, */
  adopted: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const petModel = model(petCollection, petSchema);

export default petModel;
