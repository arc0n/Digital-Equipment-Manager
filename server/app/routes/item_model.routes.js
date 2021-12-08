/**
 * Exports app routings for CRUD operations on <item_type>.
 * @param {Function} app Express application
 * @returns {Undefined} Undefined
 */
 module.exports = app => {
    const itemModel = require("../controllers/item_model.controller.js");
  
    app.get("/itemmodel", itemModel.getAll);

};