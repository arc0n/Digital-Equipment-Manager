const Person = require("../models/person.model.js");

// Create and Save a new Person
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    //Generate Random dynamic ID
    const dynamic_id = randomGenerator.generateRandomDynamicId();

    // Creates a new Person
    const item = new Person({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      dateofbirth: req.body.dateofbirth,
      sex: req.body.sex,
      id_card: req.body.id_card,
      dynamic_id: dynamic_id,
      address_id: req.body.address_id
    });
  
    // Save Person in the database
    Person.create(item, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating new Person."
        });
      else res.send(data);
    });
  };

//Get all Persons
exports.getAll = (req, res) => {
  Person.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving people."
      });
    else res.send(data);
  });
};

//Update Person by ID
exports.updateById = (req, res) => {
  Person.updateById(req.params.id, new Person(req.body), (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating person."
      });
    else res.send(data);
  });
};

//Get Person by Id
exports.getById = (req, res) => {
  Person.getById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Person with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not get Person with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};


//Delete Person by Id
exports.delete = (req, res) => {
  Person.delete(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Person with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Person with id " + req.params.id
        });
      }
    } else res.send({ message: `Person was deleted successfully!` });
  });
};