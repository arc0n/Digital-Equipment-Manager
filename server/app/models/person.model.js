const sql = require("./db.js");

/**
 * @class Person
 * @classdesc The Person object
 */
 class Person {
  constructor(person) {
    this.firstname= person.firstname;
    this.lastname = person.lastname;
    this.birthdate = person.birthdate;
    this.sex = person.sex;
    this.id_card = person.id_card;
    this.address_id = person.address_id;
    this.dynamic_id = person.dynamic_id;
  }
};

  /**
   * Inserts a new person into db.
   * @param {Object} person Person to create
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
   Person.create = (person, result)=> {
    sql.query("INSERT INTO person SET ?", person, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err);
        return;
      }
  
      console.log("Created person: ", { id: res.insertId, ...person });
      result(null, { result: {...person}, message: 'Person created successfully.' });
    });
  };

  /**
   * Returns all persons.
   * @param {Object} person Person to create
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
  Person.getAll = (result) => {
    sql.query(
      "SELECT * FROM person " + 
      "INNER JOIN address ON person.address_id = address.id", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err);
        return;
      }
  
      console.log("persons: ", res);
      result(null, res);
    });
  };

  /**
   * Returns person with a specific dynamic ID
   * @param {Number} id Dynamic ID of the person
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
     Person.getById = (id, result) => {
      sql.query(
        "SELECT * FROM person " +
        "INNER JOIN address ON person.address_id = address.id " +
        "WHERE person.dynamic_id= ?", [id], (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err);
          return;
        }
        if(res.length === 0) {
          result({message: 'NOT_FOUND'});
          return;
        }

        result(null, res);
      });
    };


  /**
   * Updates person with a specific dynamic ID
   * @param {Number} id ID of the person
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
    Person.updateById = (id, person, result) => {
      sql.query(
        "UPDATE person SET firstname = ?, lastname = ?, birthdate = ?, sex = ?, id_card = ?, dynamic_id = ?, address_id = ? WHERE dynamic_id = ?",
        [person.firstname, person.lastname, person.birthdate, person.sex, person.id_card, person.dynamic_id, person.address_id, id],
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err);
            return;
          }
    
          if (res.affectedRows == 0) {
            // not found Person with the id
            result({message: 'NOT_FOUND'});
            return;
          }
    
          console.log("updated person: ", { ...person });
          result(null, { result: {...person }, message: 'Person updated successfully!' });
        }
      );
    };

  /**
   * Deletes person from db. Works only if there are no bookings for this person
   * @param {Number} dynamic_id Dynamic ID of the person to delete
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
   Person.delete = (dynamic_id, result) => {
    sql.query("DELETE FROM person WHERE dynamic_id= ?", dynamic_id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err);
        return;
      }
  
      console.log("Deleted person: ", { id: dynamic_id });
      result(null, { result: {...dynamic_id}, message: 'Person deleted successfully!' });
    });
  };

module.exports = Person;