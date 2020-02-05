var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "elte"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE IF NOT EXISTS elte", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

  var sql = "DROP TABLE major";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table 'major' dropped");
  });
  var sql = "CREATE TABLE major (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table 'major' created");
  });

  var sql = "INSERT INTO elte.major (name) VALUES ?";
  var values = [
    ['szak1'],
    ['szak2'],
    ['szak3'],
    ['szak4'],
    ['szak5'],
    ['szak6'],
    ['szak7'],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    con.destroy();
  });
});
