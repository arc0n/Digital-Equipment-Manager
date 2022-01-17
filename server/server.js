const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")


const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



// TODO only allow CORS for the own server
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
// const cors = require("cors");
//app.use("*", cors());

/*
 put the build angular project in the dist folder to get the app served
*/
app.use(express.static(path.join(__dirname, '/dist/www')));
  app.get('/app', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/www'));
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to dem application." });
});

require("./app/routes/auth.routes.js")(app);
require("./app/routes/item.routes.js")(app);
require("./app/routes/person.routes.js")(app);
require("./app/routes/booking.routes.js")(app);
require("./app/routes/item_type.routes.js")(app);
require("./app/routes/item_model.routes.js")(app);
require("./app/routes/casuality.routes.js")(app);

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
