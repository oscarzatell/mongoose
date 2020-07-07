const mongoose = require("mongoose");
const uri = "mongodb://127.0.0.1:27017/mywebstore";
const db = mongoose.connection;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  //En la siguiente linea le decimos que cuando nos de un error nos lo muestre por consola
  .catch((err) => console.log(err));

//Decirme cuando la base de datos ha sido conectada
db.on("open", (_) => {
  console.log("Base de datos conectada a", uri);
});
//Decirme cuando hay un error a la conexion de bd
db.on("error", (err) => {
  console.log(err);
});
