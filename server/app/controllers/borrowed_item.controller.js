const BorrowedItem = require("../models/borrowed_item.model.js");

// Create and Save a new Borrowed Item
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Creates a new Item
    const item = new BorrowedItem({
      item_id: req.body.item_id,
      person_id: req.body.person_id,
      datetime_in: req.body.datetime_in,
      datetime_out: req.body.datetime_out,
      item_model_id: req.body.item_model_id
    });
  
    // Save Item in the database
    BorrowedItem.create(item, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating new Borrowed Item."
        });
      else res.send(data);
    });
  };

//Get all Borrowed Items
exports.getAll = (req, res) => {
  BorrowedItem.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving items."
      });
    else res.send(data);
  });

//Returns a borrowed item
exports.return = (req, res) => {
  BorrowedItem.return(req.params.serial_number, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating items."
      });
    else res.send(data);
  });
};

};