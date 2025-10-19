const AppError = require("../utils/errorHandler");

const errorHandler = (error, req, res, next) => {
  let err = { ...error };
  err.message = error.message;

  if (err.Joi) {
    const details =
    err.details?.[0]?.message.replace(/"/g, "") || "Invalid input data";
    return res.status(500).json({ status: "fail", message: `${details}` });
  }
  
  if (err) {
    console.log(err)
    return res
      .status(err.status)
      .json({ status: "fail", message: err.message });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
};

module.exports = errorHandler;
