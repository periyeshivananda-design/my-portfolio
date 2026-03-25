const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// 1. Create the Connection to PostgreSQL
// When you host on Render, you will replace these with a "Connection String"
const pool = new Pool({
    user: 'postgres',       // Your default Postgres username
    host: 'localhost',
    database: 'portfolio_db',
    password: 'your_password_here', // Change this to your Postgres password
    port: 5432,
});

// 2. Test the connection
pool.connect((err) => {
    if (err) {
        console.error('PostgreSQL Connection Error: ' + err.message);
    } else {
        console.log('Connected to PostgreSQL Database! 🐘');
    }
});

// 3. The Route to receive data from Frontend
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
    const queryText = 'INSERT INTO messages(name, email, message) VALUES($1, $2, $3)';
    
    try {
        await pool.query(queryText, [name, email, message]);
        res.status(200).json({ message: 'Data saved to PostgreSQL!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));