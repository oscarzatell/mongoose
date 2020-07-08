require("./connection");

const Product = require("./models/Product");

async function main() {
  const product = new Product({
    name: "keyboard",
    description: "corsair a68 rgb gaming keyboard",
    price: 150,
  });

  const productSave = await product.save();
  return productSave;
}

main()
  .then((productSave) => console.log(productSave))
  .catch((err) => console.log(err));
