module.exports = app => {
    const item = require("../controllers/item.controller.js");
  
    // Create a new Item
    app.post("/item", item.create);
};