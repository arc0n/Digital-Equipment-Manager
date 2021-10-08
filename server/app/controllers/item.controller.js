const Item = require("../models/item.model.js");

// Create and Save a new Item
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    //Generate Random dynamic ID: TODO, better solution required
    const dynamic_id = Array.from(Array(15), () => Math.floor(Math.random() * 36).toString(36)).join('');

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
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating new Item."
        });
      else res.send(data);
    });
  };

//Get all Items
exports.getAll = (req, res) => {
  Item.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving items."
      });
    else res.send(data);
  });
};

//Update Item by dynamic ID
exports.updateById = (req, res) => {
  Item.updateById(req.params.id, new Item(req.body), (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating items."
      });
    else res.send(data);
  });
};

//Get Item by Id
exports.getById = (req, res) => {
  Item.getById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Item with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not get Item with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};


//Delete Item by Id
exports.delete = (req, res) => {
  Item.delete(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Item with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Item with id " + req.params.id
        });
      }
    } else res.send({ message: `Item was deleted successfully!` });
  });
};