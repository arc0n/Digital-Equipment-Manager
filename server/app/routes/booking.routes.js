/**
 * Exports app routings for CRUD operations on <borrowed_item>.
 * @param {Function} app Express application
 * @returns {Undefined} Undefined
 */
 module.exports = app => {
    const booking = require("../controllers/booking.controller.js");
  
    app.post("/booking", booking.create);
   
    app.put("/booking", booking.return);

    app.get("/booking", booking.getAll);


};