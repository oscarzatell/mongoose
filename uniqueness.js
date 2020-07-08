require("./connection");

const User = require("./models/User");

async function createUsers() {
  const userOne = new User({
    username: "claudio",
    password: "12345",
  });
  await userOne.save();

  const userTwo = new User({
    username: "juan",
    password: "12345",
  });
  await userTwo.save();
}

createUsers();
