const express = require('express');
const mysql = require('mysql2'); // Changed from 'pg'
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 1. MySQL Connection Configuration
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',           // Default MySQL user
    password: 'tiger', 
    database: 'portfolio'   // The name of your database in MySQL Workbench
});

// 2. Connect to MySQL
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL Database!');
});

// 3. Updated Route for MySQL
app.get('/api/projects', (req, res) => {
    const sql = "SELECT * FROM projects";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results); // Sends your MySQL table data to the site
    });
});

app.listen(5000, () => console.log("Server running on port 5000"));