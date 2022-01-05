/**
 * Exports app routings for CRUD operations on <casuality>.
 * @param {Function} app Express application
 * @returns {Undefined} Undefined
 */
 module.exports = app => {
    const casuality = require("../controllers/casuality.controller.js");
  
    app.get("/casuality", casuality.getAll);
    app.post("/casuality", casuality.create);
   
};