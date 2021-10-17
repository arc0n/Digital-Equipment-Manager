exports.sendResponse = (res, error, result) => {
  const data = (result && result.result) ? result.result : result;
  const message = (result && result.message) ? result.message : null;

  if(error) {
    res.send({
      code: res.statusCode,
      error: true,
      message: (message) ? message : error.message || "Some error occurred.",
      result: data
    });
  } else {
    res.send({
      code: res.statusCode,
      message: message,
      error: false,
      result: data
    });
  }
};
