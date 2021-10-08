const sql = require("./db.js");

/**
 * @class Item
 * @classdesc The Item object
 */
 class Booking {
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
   Booking.create = (item, result)=> {
     sql.query("SELECT id FROM person WHERE dynamic_id = ?", [item.person_id], (err, res)=> {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
        const person_id = res.id;

        sql.query("SELECT id FROM item WHERE dynamic_id = ?", [item.item_id], (err, res)=> {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }

          const item_id = res.id;

          /* Replace Dynamic IDs with Primary Key ID */
          item.person_id = person_id;
          item.item_id = item_id;

          sql.query("INSERT INTO borrowed_item SET ?", item, (err, res) => {
            if (err) {
              console.log("error: ", err);
              result(err, null);
              return;
            }
    
            console.log("Created borrowed_item: ", { id: res.insertId, ...item });
            result(null, { id: res.insertId, ...item });
          });
      });
    });
  };

  /**
   * Returns all borrowed items.
   * @param {Object} item Booking to create
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
   Booking.getAll = (result) => {
    sql.query("SELECT * FROM borrowed_item", (err, res) => {
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
     * @param {Number} dynamic_id Dynamic ID of the item that should be returned
     * @param {Function} result Callback
     * @returns {Undefined} Undefined
     */
    Booking.return = (dynamic_id, result) => {
    sql.query(
        "UPDATE borrowed_item"                   +
        "INNER JOIN borrowed_item.id ON item.id" +
        "SET borrowed_item.datetime_in = ?"      +
        "WHERE item.dynamic_id = ?"              +
        "ORDER BY borrowed_item.datetime_out DESC LIMIT 1",
        [Date.now(), dynamic_id],
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
    
        console.log("The item was returned: ", { "serial_number": dynamic_id });
        result({"serial_number": dynamic_id });
        }
    );
    };

  };


module.exports = Booking;