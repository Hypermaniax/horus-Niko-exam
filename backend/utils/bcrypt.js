const bcrypt = require("bcrypt");

const saltRounds = 10;

const hash = async (password) => {
  try {
    const hashPassword = await bcrypt.hash(password, saltRounds);

    return hashPassword;
  } catch (error) {
    console.log(error);
  }
};

const compare = async (password,hash) => {
  try {
    const compareHash = bcrypt.compare(password, hash);

    return compareHash;
  } catch (error) {
    console.log();
  }
};

module.exports = { hash, compare };
