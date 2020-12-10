var connection = require("./connection.js");

var tableName = "burgers";

var orm = {
    findAll: function(tableName, callback) {
      var s = "SELECT * FROM " + tableName;
      connection.query(s, function(err, result) {
        callback(result);
      });
    },
  
  };
//* In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
module.exports = orm;