const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// REST API Endpoint
app.post('/api/register', (req, res) => {
    const { name, email } = req.body;

    // Basic server-side validation logic
    if (!name || !email) {
        return res.status(400).json({ message: "All fields are required." });
    }

    console.log("Received Data:", req.body);
    res.status(200).json({ message: "User registered successfully!" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
