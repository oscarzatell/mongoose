//Requerimos la conexion
require("./connection");

//Requerimos el modelo productos y lo agregamos a una constante
const Product = require("./models/Product");

const product = new Product({
  name: "laptop",
  description: "lenovo thinkpad x1 carbon 6th generation",
  price: 1300.99,
});

//Esto me puede devolver un error o un documento
product.save((err, document) => {
  if (err) console.log(err);
  console.log(document);
});

console.log(product);
