const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors()); // This allows your frontend to talk to your backend

app.get('/api/projects', (req, res) => {
    // This simulates data from your Database
    const projects = [
        { id: 1, title: "Portfolio Site", description: "My first full-stack site!" },
        { id: 2, title: "Database App", description: "Connecting Node to Postgres." }
    ];
    res.json(projects);
});

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}');
});