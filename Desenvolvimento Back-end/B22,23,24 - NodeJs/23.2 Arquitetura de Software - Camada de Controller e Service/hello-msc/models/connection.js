// models/connection.js
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.USER,
    password:  process.env.USER_PASSWORD,
    database: process.env.MYSQL_DB_NAME });

module.exports = connection;
  

