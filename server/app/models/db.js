const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'http://127.0.0.1:3307/',
  user:'root',
  password: 'root',
  database:'equipment_manager'
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;