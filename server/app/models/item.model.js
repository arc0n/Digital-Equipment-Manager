const sql = require("./db.js");

 class Item {

  constructor(item) {
    this.serial_number= item.serial_number;
    this.photo = item.photo;
    this.description = item.description;
    this.status = item.status;
    this.item_model_id = item.item_model_id;
  }

  /**
   * Inserts a new item into db.
   * @param {Object} item Item to create
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
  create(result) {
    sql.query("INSERT INTO item SET ?", this, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("Created item: ", { id: res.insertId, ...this });
      result(null, { id: res.insertId, ...this });
    });
  };
};


module.exports = Item;