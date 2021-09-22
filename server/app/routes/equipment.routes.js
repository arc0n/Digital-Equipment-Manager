module.exports = app => {
    const equipment = require("../controllers/equipment.controller.js");
  
    // Create a new Customer
    app.post("/equipment", equipment.create);
};