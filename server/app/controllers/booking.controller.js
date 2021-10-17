const Booking = require("../models/booking.model.js");
const apiResponse = require("../api_response.js");

// Create and Save a new Borrowed Item
exports.create = (req, res) => {
    // Validate request
    if (!req.body || (!req.body.item_id || !req.body.person_id )) {
      apiResponse.sendResponse(res, {message: 'INVALID_REQUEST'}, 'Missing body parameters');
      return;
    }


    // Creates a new Item
    const item = new Booking({
      item_id: req.body.item_id,
      person_id: req.body.person_id,
    });
  
    // Save Item in the database
    Booking.create(item, (err, data) => {
      apiResponse.sendResponse(res, err, data);
    });
  };

//Get all Borrowed Items
exports.getAll = (req, res) => {
  Booking.getAll((err, data) => {
    apiResponse.sendResponse(res, err, data);
  });

};

//Returns a borrowed item
exports.return = (req, res) => {
  Booking.return(req.params.id, (err, data) => {
    apiResponse.sendResponse(res, err, data);
  });
};
