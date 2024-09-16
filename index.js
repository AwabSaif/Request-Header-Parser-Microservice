const express = require('express');
const app = express();
const cors = require('cors');

// Enable CORS for FCC testing
app.use(cors({ optionsSuccessStatus: 200 }));

// Serve static files (optional if you have HTML)
app.use(express.static('public'));

// Main API endpoint to handle /api/whoami requests
app.get('/api/whoami', (req, res) => {
  // Get IP address
  const ipaddress = req.ip;

  // Get preferred language from request headers
  const language = req.headers['accept-language'];

  // Get user-agent from request headers (browser and system info)
  const software = req.headers['user-agent'];

  // Return the JSON object with ipaddress, language, and software
  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software
  });
});

// Listen on the environment port or 3000 if not set
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});