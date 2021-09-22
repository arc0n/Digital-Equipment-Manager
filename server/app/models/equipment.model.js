const sql = require("./db.js");

 class Equipment {

  constructor() {
    
  }

  create(equipment, result) {
    sql.query("INSERT INTO equipment SET ?", equipment, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created equipment: ", { id: res.insertId, ...equipment });
      result(null, { id: res.insertId, ...equipment });
    });
  };
};


module.exports.Equipment = Equipment;