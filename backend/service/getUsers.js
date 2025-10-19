const { getAllUser } = require("../repository/users");

const getusers = async () => {
  const users = await getAllUser();
  return users;
};

module.exports = getusers;
