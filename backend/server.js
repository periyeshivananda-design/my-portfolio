const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server is moving at http://localhost:${PORT}`);
});
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connecting to a local database named 'portfolio'
mongoose.connect('mongodb://127.0.0.1:27017/portfolio')
    .then(() => console.log("Connected to Database! 💾"))
    .catch(err => console.log("Database error: ", err));

app.get('/', (req, res) => {
    res.send('Backend is running and Database is connected!');
});

app.listen(PORT, () => {
    console.log(`Server is moving at http://localhost:${PORT}`);
});