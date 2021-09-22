const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'sql11.freemysqlhosting.net',
  user:'sql11439208',
  password: 'h6VRIjT3HW',
  database:'sql11439208'
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;