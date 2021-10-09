/**
 * Exports app routings for CRUD operations on <person>.
 * @param {Function} app Express application
 * @returns {Undefined} Undefined
 */
module.exports = app => {
    const person = require("../controllers/person.controller.js");
  
    app.post("/person", person.create);

    app.get("/person", person.getAll);

    app.get("/person/:id", person.getById);

    app.put("/person/:id", person.updateById);

    app.delete("/person/:id", person.delete);
};