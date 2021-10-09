const sql = require("./db.js");

/**
 * @class Item
 * @classdesc The Item object
 */
 class Item {
  constructor(item) {
    this.serial_number= item.serial_number;
    this.photo = item.photo;
    this.description = item.description;
    this.dynamic_id = item.dynamic_id;
    this.status = item.status;
    this.item_model_id = item.item_model_id;
  }
};

  /**
   * Inserts a new item into db.
   * @param {Object} item Item to create
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
   Item.create = (item, result)=> {
    sql.query("INSERT INTO item SET ?", item, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("Created item: ", { id: res.insertId, ...item });
      result(null, { id: res.insertId, ...item });
    });
  };

  /**
   * Returns all items with their types and models.
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
  Item.getAll = (result) => {
    sql.query(
      "SELECT item.*, item_model.name AS model_name, item_type.name AS item_type, item_type.id AS item_type_id, item_type.description AS item_type_description FROM item " +
      "INNER JOIN item_model ON item_model.id = item.item_model_id " + 
      "INNER JOIN item_type ON item_type.id = item_model.item_type_id", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("items: ", res);
      result(null, res);
    });
  };

  /**
   * Returns item with a specific dynamic ID
   * @param {Number} id ID of the item
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
     Item.getById = (id, result) => {
      sql.query(
      "SELECT * FROM item " +
      "INNER JOIN item_model ON item.item_model_id = item_model.id " +
      "INNER JOIN item_type ON item_type.id = item_model.item_type_id " +
      "WHERE item.dynamic_id= ?", [id], (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
    
        console.log("Item: ", res);
        result(null, res);
      });
    };


  /**
   * Updates item with a specific dynamic ID
   * @param {Number} id ID of the item
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
    Item.updateById = (id, item, result) => {
      sql.query(
        "UPDATE item SET serial_number = ?, photo = ?, description = ?, status = ?, item_model_id = ?, dynamic_id = ? WHERE dynamic_id = ?",
        [item.serial_number, item.photo, item.description, item.status, item.item_model_id, item.dynamic_id, id],
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
    
          if (res.affectedRows == 0) {
            // not found Item with the id
            result({ kind: "not_found" }, null);
            return;
          }
    
          console.log("updated item: ", { ...item });
          result(null, { ...item });
        }
      );
    };

  /**
   * Deletes an item from db. Will only be deleted if there are no bookings of this item.
   * @param {Number} id Dynamic ID of the item to delete.
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
   Item.delete = (id, result) => {
    sql.query("DELETE FROM item WHERE dynamic_id= ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("Deleted item: ", { id: res.insertId, ...id });
      result(null, { id: res.insertId, ...id });
    });
  };

module.exports = Item;