const auth = require("../middleware/auth-middleware");


/**
 * Exports app routings for CRUD operations on <borrowed_item>.
 * @param {Function} app Express application
 */
 module.exports = app => {
    const booking = require("../controllers/booking.controller.js");
  
    app.post("/booking",auth,  booking.create);
   
    app.put("/booking",auth, booking.return);

    app.get("/booking",auth, booking.getAll);


};