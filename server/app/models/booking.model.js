const sql = require("./db.js");

/**
 * @class Item
 * @classdesc The Item object
 */
 class Booking {
  constructor(borrowed_item) {
    this.item_id= borrowed_item.item_id;
    this.person_id = borrowed_item.person_id;
    this.datetime_out = Booking.dateNow();
    this.datetime_in = null;
  }
};

  /**
   * Inserts a new borrowed_item into db.
   * @param {Object} item borrowed_item to add
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
   Booking.create = (item, result)=> {
     //Select Person
     sql.query("SELECT id FROM person WHERE dynamic_id = ?", [item.person_id], (err, res)=> {
      if (err) {
        console.log("error: ", err);
        result(err);
        return;
      }

      if(!res || res.length === 0) result(err);
      const person_id = res[0].id;
      
      //Select Item or Items
      const conditions = (typeof item.item_id === 'object') ? 
            Booking._buildConditions(item.item_id, ' OR ') :
            { where: 'dynamic_id = ?', values: item.item_id };

        sql.query("SELECT id FROM item WHERE " + conditions.where, conditions.values, (err, res_items)=> {
        if (err) {
          console.log("error: ", err);
          result(err);
          return;
        }

          //Check if Item or Items are already borrowed
          sql.query("SELECT item_id FROM borrowed_item WHERE datetime_in IS NULL", (err, res_borrowed_items) => {
            if (err) {
              console.log("error: ", err);
              result(err);
              return;
            }

          const values = [], item_ids = [];
          if(res_items.length >= 1) {
            res_items.forEach(res_item => {
              values.push([item.datetime_out, res_item.id, person_id]);
              item_ids.push(res_item.id);
            });
            } else {
              result(err);
              return;
            }

          // Check intersection
          if(res_borrowed_items.length > 0) {
            const borrowed_items = res_borrowed_items.map(item=> item.item_id);
            const intersection = item_ids.filter(element => borrowed_items.includes(element));
            
            if(intersection.length > 0) {
              result({message: 'UNFINISHED_BOOKING',code:409});
              return;
            }
          }

          
          sql.query("INSERT INTO borrowed_item (datetime_out, item_id, person_id) VALUES ?", [values], (err, res) => {
            if (err) {
              console.log("error: ", err);
              result(err);
              return;
            }
    
            console.log("Items borrowed successfully!");
            result(null, { result: true, message: 'Item borrowed successfully!' });
          });
        });
      });
    });
  };

  /**
   * Lists all bookings.
   * @param {Object} item Booking to create
   * @param {Function} result Callback
   * @returns {Undefined} Undefined
   */
   Booking.getAll = (params, result) => {
    const conditions = Booking._buildConditions(params);

    sql.query("SELECT im.name AS model_name, im.id AS model_id, it.id AS item_type_id, borrowed_item.id AS booking_id, datetime_out, datetime_in, p.dynamic_id as person_id, p.sex, p.id_card, p.firstname, p.lastname, i.dynamic_id as item_id, " +
    "im.name AS model_name, it.name AS item_type FROM borrowed_item " +
    "INNER JOIN person p ON p.id = borrowed_item.person_id " +
    "INNER JOIN item i ON i.id = borrowed_item.item_id " +
    "INNER JOIN item_model im ON im.id = i.item_model_id " + 
    "INNER JOIN item_type it ON it.id = im.item_type_id WHERE " + conditions.where, conditions.values, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err);
        return;
      }
      let formattedReponse = [];
      res.forEach(booking => {
        formattedReponse.push({
          booking_id: booking.booking_id,
          datetime_out: booking.datetime_out,
          datetime_in: booking.datetime_in,
          person: {
            person_id: booking.person_id,
            firstname: booking.firstname,
            lastname: booking.lastname,
          },
          item: {
            item_id: booking.item_id,
            model_id: booking.model_id,
            model_name: booking.model_name,
            item_type_id: booking.item_type_id,
            item_type: booking.item_type,
          }
        });
      });
      console.log("items: ", formattedReponse);
      result(null, formattedReponse);
    });
  };
  
    /**
     * Returns a borrowed item with a specific dynamic ID
     * @todo
     * @param {Object} item_ids Objekt mit einem Array oder String mit item_ids
     * @param {Function} result Callback
     * @returns {Undefined} Undefined
     */
    Booking.return = (item_ids, result) => {
       //Select Item or Items
       const conditions = (typeof item_ids.item_id === 'object') ? 
       Booking._buildConditions(item_ids.item_id, ' OR ') :
       { where: 'dynamic_id = ?', values: item_ids.item_id };

      sql.query("SELECT id FROM item WHERE " + conditions.where, conditions.values, (err, res)=> {
        if (err) {
          console.log("error: ", err);
          result(err);
          return;
        }

        let query = "", conditions2 = [];
        //TODO is null datetime_in and WHERE?
        res.forEach(item=> {
          query += "UPDATE borrowed_item SET datetime_in = ? WHERE item_id = ? AND datetime_in IS NULL ORDER BY datetime_out DESC LIMIT 1; "
          conditions2.push(Booking.dateNow(),item.id);
        });

        sql.query(
          query, conditions2,
            (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err);
                return;
            }

            // TODO: more detailed response
  
            console.log("The item/s was/were returned");
            result(null, {"result": true, "message": 'Item returned successfully!' });
            }
        );
      });
    };

    Booking.dateNow = () => {
      return new Date().toISOString().slice(0, 19).replace('T', ' ');
    }

  /**
   * Builds Query conditions
   * @private
   * @param {Object} params Object with api request parameters
   * @returns {Object} Object with condition and condition values.
   */
   Booking._buildConditions = (params, delimeter = ' AND ') => {
    let conditions = [],
        values = [];

   if (params.borrowed !== undefined && params.borrowed == 'true') {
      conditions.push("datetime_in IS NULL");
    }

   if (params.item_id !== undefined) {
      conditions.push("i.dynamic_id = ?");
      values.push(params.item_id);
    }

    if (params.person_id !== undefined) {
      conditions.push("p.dynamic_id = ?");
      values.push(params.person_id);
    }

    //TODO: Quickfix for booking parametrs to work. Debug later
    if(typeof params === 'object' && delimeter === ' OR ') {
      for(id in params) {
        conditions.push("dynamic_id = ?");
        values.push(params[id]);
      }
    }

    return {
      where: conditions.length ? conditions.join(delimeter) : '1',
      values: values
    };
  }



module.exports = Booking;
