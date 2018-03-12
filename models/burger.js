// Import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var burgers = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            //console(res.body);
            cb(res);
        });
    },
    
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
          });
        },
    
    deleteOne: function(condition, cb) {
        orm.deleteOne("cats", condition, function(res) {
        cb(res);
        });
    }
    
};
      
// Export the database functions for the controller (catsController.js).
module.exports = burgers;


