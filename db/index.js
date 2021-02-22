// build your database
const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'ebid'
});

connection.connect();

module.exports = connection;