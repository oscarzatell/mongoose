require("../connection");

const Product = require("../models/Product");

const someFuction = async () => {
  //const result = await Product.deleteMany({ name: "keyboard" });
  //const result = await Product.deleteOne({ name: "laptop hp" }); //esto solo eliminará un dato
  //const result = await Product.findOneAndDelete({ name: "laptop" });
  const result = await Product.findByIdAndDelete("5f06275d9f8deb393ce798dc");
  console.log(result);
};

someFuction();
