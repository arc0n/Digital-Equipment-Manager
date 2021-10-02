const sql = require("./db.js");

 class Item {

  constructor() {
    
  }

  /**
   * Inserts a new item into db.
   * @param {Object} item Item to create
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
  create(item, result) {
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
};


module.exports.Item = Item;