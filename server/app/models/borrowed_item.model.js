const sql = require("./db.js");

/**
 * @class Item
 * @classdesc The Item object
 */
 class BorrowedItem {
  constructor(borrowed_item) {
    this.item_id= borrowed_item.item_id;
    this.person_id = borrowed_item.person_id;
    this.datetime_in = Date.now();
    this.datetime_out = null;
  }
};

  /**
   * Inserts a new borrowed_item into db.
   * @param {Object} item borrowed_item to add
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
   BorrowedItem.create = (item, result)=> {
    sql.query("INSERT INTO borrowed_item SET ?", item, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("Created borrowed_item: ", { id: res.insertId, ...item });
      result(null, { id: res.insertId, ...item });
    });
  };

  /**
   * Returns all borrowed items.
   * @param {Object} item BorrowedItem to create
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
   BorrowedItem.getAll = (result) => {
    sql.query("SELECT * FROM item", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("items: ", res);
      result(null, res);
    });

    /**
     * Returns a borrowed item with a specific ID
     * @param {Number} serial_number ID of the item that should be returned
     * @param {Function} result Callback
     * @returns {Undefined} Undefined
     */
    BorrowedItem.return = (serial_number, result) => {
    sql.query(
        "UPDATE borrowed_item"                   +
        "INNER JOIN borrowed_item.id ON item.id" +
        "SET borrowed_item.datetime_in = ?"      +
        "WHERE item.serial_number = ?"           +
        "ORDER BY borrowed_item.datetime_out DESC LIMIT 1",
        [Date.now(), serial_number],
        (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
    
        if (res.affectedRows == 0) {
            // not found Borrowed Item with the id
            result({ kind: "not_found" }, null);
            return;
        }
    
        console.log("The item was returned: ", { "serial_number": serial_number });
        result({"serial_number": serial_number });
        }
    );
    };

  };


module.exports = BorrowedItem;