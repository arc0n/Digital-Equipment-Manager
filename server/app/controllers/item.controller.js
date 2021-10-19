const Item = require("../models/item.model.js");
const randomGenerator = require("../dynamic_id_generator.js");
const apiResponse = require("../api_response.js");

// Create and Save a new Item
exports.create = (req, res) => {
    // Validate request
    if (!req.body || (!req.body.serial_number || !req.body.item_model_id || !req.body.status)) {
      apiResponse.sendResponse(res, {message: 'INVALID_REQUEST'}, 'Missing body parameters');
      return;
    }
  
    //Generate Random dynamic ID
    const dynamic_id = randomGenerator.generateRandomDynamicId();

    // Creates a new Item from request parameters
    const item = new Item({
      serial_number: req.body.serial_number,
      dynamic_id: dynamic_id,
      photo: req.body.photo,
      description: req.body.description,
      status: req.body.status,
      item_model_id: req.body.item_model_id,
    });
  
    // Save Item in the database and sends response
    Item.create(item, (err, data) => {
      apiResponse.sendResponse(res, err, data);
    });
  };

//Get all Items
exports.getAll = (req, res) => {
  Item.getAll((err, data) => {
    apiResponse.sendResponse(res, err, data);
  });
};

//Update Item by dynamic ID
exports.updateById = (req, res) => {
  Item.updateById(req.params.id, new Item(req.body), (err, data) => {
    apiResponse.sendResponse(res, err, data);
  });
};

//Get Item by Id
exports.getById = (req, res) => {
  Item.getById(req.params.id, (err, data) => {
    apiResponse.sendResponse(res, err, data);
  });
};


//Delete Item by Id
exports.delete = (req, res) => {
  Item.delete(req.params.id, (err, data) => {
    apiResponse.sendResponse(res, err, data);
  });
};