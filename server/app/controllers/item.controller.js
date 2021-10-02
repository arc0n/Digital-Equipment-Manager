const Item = require("../models/item.model.js");

// Create and Save a new Item
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a new Item
    const item = new Item({
      serial_number: req.body.serial_number,
      photo: req.body.photo,
      description: req.body.description,
      status: req.body.status,
      item_model_id: req.body.item_model_id
    });
  
    // Save Item in the database
    item.create((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating new Item."
        });
      else res.send(data);
    });
  };