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
   * Returns all ItemModels that have a specific item_type_id
   * @param {Number} id The item type id
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
   ItemModel.getById = (id, result) => {
    sql.query(
      "SELECT * FROM item_model WHERE item_type_id = ? ", [id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err);
        return;
      }
  
      if(res.length === 0) {
        result({message: 'NOT_FOUND', code: 404});
        return;
      }

      console.log("Item: ", res);
      result(null, res);
    });
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