const auth = require("../middleware/auth-middleware");


/**
 * Exports app routings for CRUD operations on <person>.
 * @param {Function} app Express application
 * @returns {Undefined} Undefined
 */
module.exports = app => {
    const person = require("../controllers/person.controller.js");
  
    app.post("/person",auth, person.create);

    app.get("/person",auth, person.getAll);

    app.get("/person/:id",auth, person.getById);

    app.put("/person/:id",auth, person.updateById);

    app.delete("/person/:id",auth, person.delete);
};