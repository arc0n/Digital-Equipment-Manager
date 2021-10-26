exports.sendResponse = (res, error, result) => {
  const data = (result && result.result) ? result.result : result;
  const message = (result && result.message) ? result.message : null;

  if(error) {
    const errcode = (error.code) ? error.code : 500;
    res.status(errcode).send({
      result: (message) ? message : error.message || "UNKNOWN_ERROR",
    });
  } else {
    res.status(res.statusCode).send({
      result: data
    });
  }
};
