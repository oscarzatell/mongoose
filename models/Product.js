//EL archivo Product.js es un Schema por eso se agrega en mayuscula la primera letra
//Un eschema son las propiedades que van a tener nuestros datos dentro de la base de datos
// Model es para interactuar con la base de datos, guardar datos, eliminarlos y actualizarlos
const { Schema, model } = require("mongoose");

//Aqui se está instanciando una nueva clase con "new"
const productSchema = new Schema({
  name: {
    type: String,
  },
  description: String,
  price: {
    type: Number,
    default: 0,
  },
});

module.exports = model("Product", productSchema);
