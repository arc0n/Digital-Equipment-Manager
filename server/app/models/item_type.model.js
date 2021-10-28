const sql = require("./db.js");

/**
 * @class ItemType
 * @classdesc The ItemType object
 */
 class ItemType {
  constructor(item) {
    
  }
};



  /**
   * Returns all ItemType 
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
   ItemType.getAll = (params, result) => {
    sql.query(
      "SELECT * FROM item_type", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err);
        return;
      }
  
      console.log("items: ", res);
      result(null, res);
    });
  };


module.exports = ItemType;