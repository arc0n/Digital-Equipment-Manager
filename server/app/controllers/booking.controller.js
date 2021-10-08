const Booking = require("../models/booking.model.js");

// Create and Save a new Borrowed Item
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    // Creates a new Item
    const item = new Booking({
      item_id: req.body.item_id,
      person_id: req.body.person_id,
    });
  
    // Save Item in the database
    Booking.create(item, (err, data) => {
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
  Booking.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving items."
      });
    else res.send(data);
  });

};

//Returns a borrowed item
exports.return = (req, res) => {
  Booking.return(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating items."
      });
    else res.send(data);
  });
};
