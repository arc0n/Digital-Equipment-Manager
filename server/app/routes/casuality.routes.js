const auth = require("../middleware/auth-middleware");

/**
 * Exports app routings for CRUD operations on <casuality>.
 * @param {Function} app Express application
 * @returns {Undefined} Undefined
 */
 module.exports = app => {
    const casuality = require("../controllers/casuality.controller.js");
  
    app.get("/casuality",auth, casuality.getAll);
    app.post("/casuality",auth, casuality.create);
   
};