const sql = require("./db.js");

/**
 * @class Item
 * @classdesc The Item object
 */
 class Booking {
  constructor(borrowed_item) {
    this.item_id= borrowed_item.item_id;
    this.person_id = borrowed_item.person_id;
    this.datetime_out = Booking.dateNow();
    this.datetime_in = null;
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
        result(err);
        return;
      }

        const person_id = res[0].id;
        
        sql.query("SELECT id FROM item WHERE dynamic_id = ?", [item.item_id], (err, res)=> {
          if (err) {
            console.log("error: ", err);
            result(err);
            return;
          }

          const item_id = res[0].id;

          /* Replace Dynamic IDs with Primary Key ID */
          item.person_id = person_id;
          item.item_id = item_id;

          sql.query("INSERT INTO borrowed_item SET ?", item, (err, res) => {
            if (err) {
              console.log("error: ", err);
              result(err);
              return;
            }
    
            console.log("Created borrowed_item: ", { id: res.insertId, ...item });
            result(null, { result: {...item}, message: 'Item borrowed successfully!' });
          });
      });
    });
  };

  /**
   * Lists all borrowed items.
   * @param {Object} item Booking to create
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
   Booking.getAll = (result) => {
    //WORKS BUT WORK IN PROGRESS (CHECKS and other stuff)
    sql.query("SELECT * FROM borrowed_item", (err, res) => {
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
     * Returns a borrowed item with a specific dynamic ID
     * @todo
     * @param {Number} dynamic_id Dynamic ID of the item that should be returned
     * @param {Function} result Callback
     * @returns {Undefined} Undefined
     */
    Booking.return = (dynamic_id, result) => {
      //WORKS BUT WORK IN PROGRESS (CHECKS and other stuff)
      sql.query("SELECT id FROM item WHERE dynamic_id = ?", [dynamic_id], (err, res)=> {
        if (err) {
          console.log("error: ", err);
          result(err);
          return;
        }

        const item_id = res[0].id;
        console.log(item_id);
        sql.query(
            "UPDATE borrowed_item " +
            "SET datetime_in = ? "  +
            "WHERE item_id = ? "         +
            "ORDER BY datetime_out DESC LIMIT 1",
            [Booking.dateNow(), item_id],
            (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err);
                return;
            }
        
            if (res.affectedRows == 0) {
              // not found Booking with the id
              result({message: 'NOT_FOUND', code: 404});
              return;
            }
  
        
            console.log("The item was returned: ", { "serial_number": dynamic_id });
            result(null, {"result": dynamic_id, "message": 'Item returned successfully!' });
            }
        );
      });
    };

Booking.dateNow = () => {
  return new Date().toISOString().slice(0, 19).replace('T', ' ');
}


module.exports = Booking;