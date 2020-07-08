require("../connection");

const User = require("../models/User");
//
const someFunction = async () => {
  const user = await User.findOne({ username: "claudio" });
  console.log(user);
  user.password = "minuevacontrasena";
  user.save();
};
//
const otherFunction = async () => {
  const user = await User.findOneAndUpdate(
    { username: "juan" },
    {
      name: "Juan Perez",
    },
    //Esto para que nos muestre el valor actualizado y no el anterior
    { new: true }
  );
  console.log(user);
};
//
async function updateUsers() {
  const user = await User.update(
    { username: "oscarzatell" },
    { password: "contrasenasegura" }
  );
  console.log(user);
}

otherFunction();
