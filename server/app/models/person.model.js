const sql = require("./db.js");

/**
 * @class Person
 * @classdesc The Person object
 */
 class Person {
  constructor(person) {
    this.firstname= person.firstname;
    this.lastname = person.lastname;
    this.dateofbirth = person.dateofbirth;
    this.sex = person.sex;
    this.id_card = person.id_card;
    this.address_id = person.address_id;
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
        result(err, null);
        return;
      }
  
      console.log("Created person: ", { id: res.insertId, ...person });
      result(null, { id: res.insertId, ...person });
    });
  };

  /**
   * Returns all persons.
   * @param {Object} person Person to create
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
  Person.getAll = (result) => {
    sql.query("SELECT * FROM person", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("persons: ", res);
      result(null, res);
    });
  };

  /**
   * Returns person with a specific ID
   * @param {Number} id ID of the person
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
     Person.getById = (id, result) => {
      sql.query("SELECT * FROM person WHERE id=" + id, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
    
        console.log("Person: ", res);
        result(null, res);
      });
    };


  /**
   * Updates person with a specific ID
   * @param {Number} id ID of the person
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
    Person.updateById = (id, person, result) => {
      sql.query(
        "UPDATE person SET firstname = ?, lastname = ?, dateofbirth = ?, sex = ?, id_card = ?, address_id = ? WHERE id = ?",
        [person.firstname, person.lastname, person.dateofbirth, person.sex, person.id_card, person.address_id, id],
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
    
          if (res.affectedRows == 0) {
            // not found Person with the id
            result({ kind: "not_found" }, null);
            return;
          }
    
          console.log("updated person: ", { id: id, ...person });
          result(null, { id: id, ...person });
        }
      );
    };

  /**
   * Inserts a new person into db.
   * @param {Number} person Person to create
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
   Person.delete = (id, result) => {
    sql.query("DELETE FROM person WHERE id= ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("Deleted person: ", { id: res.insertId, ...id });
      result(null, { id: res.insertId, ...id });
    });
  };

module.exports = Person;