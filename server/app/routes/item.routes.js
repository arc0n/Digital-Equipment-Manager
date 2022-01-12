const auth = require("../middleware/auth-middleware");


/**
 * Exports app routings for CRUD operations on <item>.
 * @param {Function} app Express application
 * @returns {Undefined} Undefined
 */
module.exports = app => {
    const item = require("../controllers/item.controller.js");
  
    app.post("/item", auth,  item.create);

    app.get("/item",auth,  item.getAll);

    app.get("/item/:id",auth, item.getById);

    app.put("/item/:id",auth, item.updateById);

    app.delete("/item/:id",auth, item.delete);
};