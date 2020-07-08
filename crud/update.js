require("../connection");

const User = require("../models/User");

async function updateUsers() {
  const user = await User.update(
    { username: "oscarzatell" },
    { password: "contrasenasegura" }
  );
  console.log(user);
}

updateUsers();
