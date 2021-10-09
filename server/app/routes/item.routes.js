/**
 * Exports app routings for CRUD operations on <item>.
 * @param {Function} app Express application
 * @returns {Undefined} Undefined
 */
module.exports = app => {
    const item = require("../controllers/item.controller.js");
  
    app.post("/item", item.create);

    app.get("/item", item.getAll);

    app.get("/item/:id", item.getById);

    app.put("/item/:id", item.updateById);

    app.delete("/item/:id", item.delete);
};