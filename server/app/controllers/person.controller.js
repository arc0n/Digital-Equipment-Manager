const Person = require("../models/person.model.js");
const randomGenerator = require("../dynamic_id_generator.js");
const apiResponse = require("../api_response.js");

// Create and Save a new Person
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      apiResponse.sendResponse(res, {message: 'INVALID_REQUEST'}, 'Missing body parameters');
      return;
    }
  
    //Generate Random dynamic ID
    const dynamic_id = randomGenerator.generateRandomDynamicId();

    // Creates a new Person
    const item = new Person({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      birthdate: req.body.birthdate,
      sex: req.body.sex,
      id_card: req.body.id_card,
      dynamic_id: dynamic_id,
      address_id: req.body.address_id
    });
  
    // Save Person in the database
    Person.create(item, (err, data) => {
      apiResponse.sendResponse(res, err, data);
    });
  };

//Get all Persons
exports.getAll = (req, res) => {
  Person.getAll((err, data) => {
    apiResponse.sendResponse(res, err, data);
  });
};

//Update Person by ID
exports.updateById = (req, res) => {
  Person.updateById(req.params.id, new Person(req.body), (err, data) => {
    apiResponse.sendResponse(res, err, data);
  });
};

//Get Person by Id
exports.getById = (req, res) => {
  Person.getById(req.params.id, (err, data) => {
    apiResponse.sendResponse(res, err, data);
  });
};


//Delete Person by Id
exports.delete = (req, res) => {
  Person.delete(req.params.id, (err, data) => {
    apiResponse.sendResponse(res, err, data);

  });
};