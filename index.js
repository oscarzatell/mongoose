//Requerimos la conexion
require("./connection");

//Requerimos el modelo productos y lo agregamos a una constante
const Product = require("./models/Product");

const product = new Product({
  name: "laptop",
  description: "lenovo thinkpad x1 carbon 6th generation",
  price: 1300.99,
});

console.log(product);
