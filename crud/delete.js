require("../connection");

const Product = require("../models/Product");

const someFuction = async () => {
  //const result = await Product.deleteMany({ name: "keyboard" });
  const result = await Product.deleteOne({ name: "laptop hp" }); //esto solo eliminará un dato
  console.log(result);
};

someFuction();
