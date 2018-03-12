// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
    // Select names of all burgers
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) throw err;
          cb(result);
        });
    },

    // Insert a new burger
    insertOne: function(table, col, value) {
        var queryString = "INSERT INTO ?? (??) VALUES (??);";
        connection.query(queryString, [table, col, value], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    // Update a burger
    updateOne: function(table, col, id, burgerID) {
        var queryString = "UPDATE ?? SET ?? WHERE ?? = ? ;";
        connection.query(queryString, [table, col, id, burgerID], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    // Delete a burger
    deleteOne: function(table, id, burgerID) {
        var queryString = "DELETE FROM ?? WHERE ?? = ?;";
        connection.query(queryString, [table, id, burgerID], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }

}
module.exports = orm;