class AppError extends Error {
  constructor(message, statusCode) {
    super(message); // set the Error.message property
    this.status = statusCode || 500;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
