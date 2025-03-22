import mysql from 'mysql2/promise';


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password:"0000",
  database: "etablissement",
  port: 3306
});

export default pool;
