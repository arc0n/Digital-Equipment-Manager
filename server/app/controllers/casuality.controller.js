const Casuality = require("../models/casuality.model.js");
const apiResponse = require("../api_response.js");
const validStates = ['aktiv', 'inaktiv', 'dekommisioniert'];

exports.create = (req, res) => {
  // Validate request
  if (!req.body || (!req.body.item_id || !req.body.status || !validStates.includes(req.body.status))) {
    apiResponse.sendResponse(res, {message: 'INVALID_REQUEST'}, 'Missing body parameters');
    return;
  }
  // Creates a new Casuality from request parameters
  const casuality = new Casuality({
    description: req.body.description,
    status: req.body.status,
    item_id: req.body.item_id,
    casuality_type_id: (req.body.casuality_type_id) ? req.body.casuality_type_id : 1,
  });
  
  Casuality.create(casuality, (err, data) => {
  apiResponse.sendResponse(res, err, data);
  });

};

exports.getAll = (req, res) => {
    Casuality.getAll(req.query, (err, data) => {
    apiResponse.sendResponse(res, err, data);
  });
};