const mysql = require("mysql2");

const MY_SQL_HOST = process.env.MYSQL_HOST || 'localhost'
const MY_SQL_PORT = process.env.MYSQL_PORT || '3307'
// Create a connection to the database
const connection =  mysql.createConnection({
  host: MY_SQL_HOST,
  port: MY_SQL_PORT,
  user:'root',
  password: 'root',
  database:'equipment_manager',
});

// open the MySQL connection
connection.connect(error => {

  if (error) {
    console.log("Used host: ", MY_SQL_HOST)
    console.log("Used port: ", MY_SQL_PORT)
    throw error;

  }
  console.log("Successfully connected to the database.");
});

module.exports = connection;
