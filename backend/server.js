// ✅ server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const { registerUser, loginUser } = require('./auth');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // serve your frontend if needed

// Register route
app.post('/api/register', async (req, res) => {
  try {
    const result = await registerUser(req.body);
    res.status(200).json({ message: 'Registered successfully', user: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  try {
    const result = await loginUser(req.body);
    res.status(200).json({ message: 'Login successful', user: result });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
