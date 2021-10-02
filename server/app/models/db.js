const mysql = require("mysql2");

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  port: '3307',
  user:'root',
  password: 'root',
  database:'test_db',
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;