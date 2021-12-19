const Person = require("../models/person.model.js");
const Address = require("../models/address.model.js");
const randomGenerator = require("../dynamic_id_generator.js");
const apiResponse = require("../api_response.js");

// Create and Save a new Person
exports.create = (req, res) => {
    // Validate request
    if (!req.body || !req.body.birthdate || !req.body.sex || !req.body.firstname || !req.body.lastname) {
      apiResponse.sendResponse(res, {message: 'INVALID_REQUEST', code: 400}, 'Missing or invalid body parameters');
      return;
    }
  
    //Generate Random dynamic ID
    const dynamic_id = randomGenerator.generateRandomDynamicId();

    // Creates a new Person
    const person = new Person({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      birthdate: new Date(req.body.birthdate).toISOString().split('T')[0],
      sex: (req.body.sex) ? req.body.sex : '-1',
      id_card: (req.body.id_card) ? req.body.id_card : 'unknown',
      dynamic_id: dynamic_id
    });

    const address = new Address({
      city: req.body.city,
      zip: req.body.zip,
      street: req.body.street
    });
  
    // Save Person in the database
    Person.create(person, address, (err, data) => {
      apiResponse.sendResponse(res, err, data);
    });
  };

//Get all Persons
exports.getAll = (req, res) => {
  Person.getAll(req.query, (err, data) => {
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