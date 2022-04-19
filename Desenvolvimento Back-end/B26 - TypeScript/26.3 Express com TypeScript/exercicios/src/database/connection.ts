import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
dotenv.config();
export const connection = mysql.createPool({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'TypeScriptExpress',
})