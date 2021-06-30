
export const errorHandler = (err, req, res, next) => {
  if (err && err.error && err.error.isJoi) {

    res.status(400).json({
      status: false,
      message: err.error.message,
    });
  } else {
    res.status(err.status).send({ status: false, message: err.message });
  }
};
