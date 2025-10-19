const { deleteUser } = require("../repository/users");

const deleteUserByid = async (id) => {
  const deleteId = await deleteUser(id);
  return deleteId;
};

module.exports = deleteUserByid;
