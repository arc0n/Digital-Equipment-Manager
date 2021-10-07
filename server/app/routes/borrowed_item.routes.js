/**
 * Exports app routings for CRUD operations on <borrowed_item>.
 * @param {Function} app Express application
 * @returns {Undefined} Undefined
 */
 module.exports = app => {
    const borrowed_item = require("../controllers/borrowed_item.controller.js");
  
    app.post("/borrowed_item", borrowed_item.create);
   
    app.put("/borrowed_item/:serial_number", borrowed_item.return);

    app.get("/borrowed_item", borrowed_item.getAll);


};