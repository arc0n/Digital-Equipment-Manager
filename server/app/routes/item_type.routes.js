/**
 * Exports app routings for CRUD operations on <item_type>.
 * @param {Function} app Express application
 * @returns {Undefined} Undefined
 */
 module.exports = app => {
    const itemType = require("../controllers/item_type.controller.js");

    app.get("/itemtype", itemType.getAll);


};