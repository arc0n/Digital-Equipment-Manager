module.exports = app => {
    const item = require("../controllers/item.controller.js");
  
    // Create a new Item
    app.post("/item", item.create);

    // Get all Items
    app.get("/item", item.getAll);

    // Get Item by Id
    app.get("/item/:id", item.getById);

    //Delete item
    app.delete("/item/:id", item.delete);
};