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
    const conditions = ItemModel._buildConditions(params);
    console.log(conditions);
    sql.query(
      "SELECT * FROM item_model WHERE " + conditions.where, conditions.values , (err, res) => {
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
     ItemModel._buildConditions = (params, delimeter = ' AND ') => {
      let conditions = [],
          values = [];
  
      if (params.item_type_id !== undefined) {
        conditions.push("item_type_id = ?");
        values.push(params.item_type_id);
      }
  
      return {
        where: conditions.length ? conditions.join(delimeter) : '1',
        values: values
      };
    }

module.exports = ItemModel;