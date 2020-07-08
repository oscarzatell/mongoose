require("../connection");

const Product = require("../models/Product");

const someFuction = async () => {
  const result = await Product.deleteMany({ name: "keyboard" });
  console.log(result);
};

someFuction();
