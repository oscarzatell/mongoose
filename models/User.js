const { Schema, model } = require("mongoose");

//Este es el Schema del usuario
const userSchema = new Schema({
  username: {
    type: String,
    unique: String,
    required: true,
  },
  password: String,
  date: {
    type: Date,
    default: new Date(),
  },
});
