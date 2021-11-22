const sql = require("./db.js");

/**
 * @class Item
 * @classdesc The Item object
 */
 class Item {
  constructor(item) {
    this.serial_number= item.serial_number;
    this.photo = item.photo;
    this.description = item.description;
    this.dynamic_id = item.dynamic_id;
    this.status = item.status;
    this.item_model_id = item.item_model_id;
  }
};

  /**
   * Inserts a new item into db.
   * @param {Object} item Item to create
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
   Item.create = (item, result)=> {
    sql.query("INSERT INTO item SET ?", item, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err);
        return;
      }
  
      console.log("Created item: ", { id: res.insertId, ...item });
      result(null, { result: {id: item.dynamic_id}, message: 'Item created successfully.' });
    });
  };

  /**
   * Returns all items with their types and models.
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
  Item.getAll = (params, result) => {
    const conditions = Item._buildConditions(params);

    sql.query(
      "SELECT item.*, item_model.name AS model_name, item_type.name AS item_type, item_type.id AS item_type_id, item_type.description AS item_type_description, " +
      "CASE WHEN t.borrowed IS NULL THEN 'false' ELSE t.borrowed END AS borrowed FROM item " +
      "INNER JOIN item_model ON item_model.id = item.item_model_id " +
      "INNER JOIN item_type ON item_type.id = item_model.item_type_id " +
      "LEFT JOIN (WITH ordered_items AS (SELECT CASE WHEN datetime_in IS NULL THEN 'false' ELSE 'true' END AS borrowed, item_id, ROW_NUMBER() " +
      "OVER (PARTITION BY item_id ORDER BY datetime_out DESC) AS rn FROM borrowed_item) " +
      "SELECT * FROM ordered_items  where rn = 1) AS t ON item.id = t.item_id " +
      "WHERE " + conditions.where, conditions.values, (err, res) => {
 
      if (err) {
        console.log("error: ", err);
        result(err);
        return;
      }
  
      const resConverted = res.map(item => ({...item, borrowed: item.borrowed === 'true'}));
      console.log("items: ", resConverted);
      result(null, resConverted);
    });
  };

  /**
   * Returns item with a specific dynamic ID
   * @param {Number} id ID of the item
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
     Item.getById = (id, result) => {
      sql.query(
      "SELECT item.*,CASE WHEN t.borrowed IS NULL THEN 'false' ELSE t.borrowed END AS borrowed FROM item " +
      "INNER JOIN item_model ON item.item_model_id = item_model.id " +
      "INNER JOIN item_type ON item_type.id = item_model.item_type_id " +
      "LEFT JOIN (WITH ordered_items AS (SELECT CASE WHEN datetime_in IS NULL THEN 'false' ELSE 'true' END AS borrowed, item_id, ROW_NUMBER() " +
      "OVER (PARTITION BY item_id ORDER BY datetime_out DESC) AS rn FROM borrowed_item) " +
      "SELECT * FROM ordered_items  where rn = 1) AS t ON item.id = t.item_id " +
      "WHERE item.dynamic_id= ?", [id], (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err);
          return;
        }
    
        if(res.length === 0) {
          result({message: 'NOT_FOUND', code: 404});
          return;
        }

        const resConverted = res.map(item => ({...item, borrowed: item.borrowed === 'true'}));
        console.log("Item: ", resConverted);
        result(null, resConverted[0]);
      });
    };


  /**
   * Updates item with a specific dynamic ID
   * @param {Number} id ID of the item
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
    Item.updateById = (id, item, result) => {
      const newValues = Item._buildConditions(item, ', ');
      newValues.values.push(id);

      sql.query(
        "UPDATE item SET "+ newValues.where + " WHERE dynamic_id = ?",
        newValues.values,
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err);
            return;
          }
    
          if (res.affectedRows == 0) {
            // not found Person with the id
            result({message: 'NOT_FOUND', code: 404});
            return;
          }

          console.log("updated item: ", { ...item });
          result(null, { result: 'UPDATE_SUCCESSFUL', message: 'Item updated successfully!' });
        }
      );
    };

  /**
   * Deletes an item from db. Will only be deleted if there are no bookings of this item.
   * @param {Number} id Dynamic ID of the item to delete.
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
   Item.delete = (id, result) => {
    sql.query("DELETE FROM item WHERE dynamic_id= ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Person with the id
        result({message: 'NOT_FOUND', code: 404});
        return;
      }
  
      console.log("Deleted item: ", { id: id });
      result(null, { result: id, message:'Item deleted successfully!' });
    });
  };

  /**
   * Builds Query conditions
   * @private
   * @param {Object} params Object with api request parameters
   * @returns {Object} Object with condition and condition values.
   */
  Item._buildConditions = (params, delimeter = ' AND ') => {
    let conditions = [],
        values = [];

    if (params.status !== undefined) {
      conditions.push("status = ?");
      values.push(params.status);
    }

    if (params.item_model_id !== undefined) {
      conditions.push("item_model_id = ?");
      values.push(parseInt(params.item_model_id));
    }

    if (params.item_type_id !== undefined) {
      conditions.push("item_type_id = ?");
      values.push(parseInt(params.item_type_id));
    }

    if (params.serial_number !== undefined) {
      conditions.push("serial_number = ?");
      values.push(params.serial_number);
    }

    if (params.dynamic_id !== undefined) {
      conditions.push("dynamic_id = ?");
      values.push(params.dynamic_id);
    }

    if (params.description !== undefined) {
      conditions.push("description = ?");
      values.push(params.description);
    }

    if (params.photo !== undefined) {
      conditions.push("photo = ?");
      values.push(params.photo);
    }

    if (params.status !== undefined) {
      conditions.push("status = ?");
      values.push(params.status);
    }

    return {
      where: conditions.length ? conditions.join(delimeter) : '1',
      values: values
    };
  }

module.exports = Item;
