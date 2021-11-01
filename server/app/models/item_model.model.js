const sql = require("./db.js");

/**
 * @class ItemModel
 * @classdesc The ItemModel object
 */
 class ItemModel {
  constructor(item) {
    
  }
};



  /**
   * Returns all ItemModel 
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
   ItemModel.getAll = (params, result) => {
    sql.query(
      "SELECT * FROM item_model", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err);
        return;
      }
  
      console.log("items: ", res);
      result(null, res);
    });
  };


module.exports = ItemModel;