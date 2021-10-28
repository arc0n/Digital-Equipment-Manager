const ItemType = require("../models/item_type.model.js");
const apiResponse = require("../api_response.js");

exports.getAll = (req, res) => {
    ItemType.getAll(req.query, (err, data) => {
    apiResponse.sendResponse(res, err, data);
  });
};