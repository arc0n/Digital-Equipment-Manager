const ItemModel = require("../models/item_model.model.js");
const apiResponse = require("../api_response.js");

exports.getAll = (req, res) => {
    ItemModel.getAll(req.query, (err, data) => {
    apiResponse.sendResponse(res, err, data);
  });
};

exports.getById = (req, res) => {
  ItemModel.getById(req.params.id, (err, data) => {
  apiResponse.sendResponse(res, err, data);
});
};