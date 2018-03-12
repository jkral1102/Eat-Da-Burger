var mysql = require("mysql");

// Create MySQL connection
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "jenn",
  database: "burgers_db"
});

// Display message if database connection error or upon successful connection
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

module.exports = connection;