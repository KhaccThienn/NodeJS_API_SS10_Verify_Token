const mysql = require('mysql');

const conn = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE
});

conn.connect((err) => {
    if (err) { throw err; }
    console.log(`Connect to database success on port: ${conn.threadId}`);
});

module.exports = conn;