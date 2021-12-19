const sql = require("./db.js");

/**
 * @class Casuality
 * @classdesc The Casuality object
 */
 class Casuality {
  constructor(casuality) {
    this.date = Casuality.dateNow(),
    this.description = casuality.description;
    this.status = casuality.status;
    this.casuality_type_id = casuality.casuality_type_id;
    this.item_id = casuality.item_id;
  }
};

  /**
   * Inserts a new casuality into db.
   * @param {Object} casuality casuality to add
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
   Casuality.create = (casuality, result)=> {
    //Select Item
    sql.query("SELECT id,status FROM item WHERE dynamic_id = ?", [casuality.item_id], (err, res)=> {
     if (err) {
       console.log("error: ", err);
       result(err);
       return;
     }

     if(!res || res.length === 0) result(err);

     if(res[0].status == casuality.status) {
      result({message: 'INVALID_CASUALITY_STATUS', result: 'INVALID_CASUALITY_STATUS', code: 409});
      return;
     }
   
     const item_id = res[0].id;
     casuality.item_id = item_id;

      sql.query("INSERT INTO casuality SET ?", casuality, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err);
          return;
        }

        sql.query("UPDATE item SET status = ? WHERE id = ?",[casuality.status,casuality.item_id], (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err);
            return;
          }

        console.log("Casuality added successfully!");
        result(null, { result: true });
        });
      });
    });
};

  /**
   * Returns all Casuality 
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
   Casuality.getAll = (params, result) => {
    const conditions = Casuality._buildConditions(params);

    sql.query(
      "SELECT c.id, c.date, c.description, casuality_type.name as type, c.status, i.dynamic_id as item_id FROM casuality c " +
      "LEFT JOIN casuality_type ON casuality_type.id = c.casuality_type_id " + 
      "INNER JOIN item i ON i.id = c.item_id " +
      "WHERE " + conditions.where, conditions.values, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err);
        return;
      }
  
      console.log("items: ", res);
      result(null, res);
    });
  };

  /**
   * Builds Query conditions
   * @private
   * @param {Object} params Object with api request parameters
   * @returns {Object} Object with condition and condition values.
   */
   Casuality._buildConditions = (params, delimeter = ' AND ') => {
    let conditions = [],
        values = [];


   if (params.item_id !== undefined) {
      conditions.push("i.dynamic_id = ?");
      values.push(params.item_id);
    }

    return {
      where: conditions.length ? conditions.join(delimeter) : '1',
      values: values
    };
  }

Casuality.dateNow = () => {
  return new Date().toISOString().slice(0, 19).replace('T', ' ');
}

module.exports = Casuality;