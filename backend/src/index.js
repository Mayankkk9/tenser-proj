// index.js
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleOAuthMiddleware = require('./GoogleOAuthMiddleware');
const ZapierIntegrationController = require('./ZapierIntegrationController');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors());

// Google OAuth Routes
app.get('/auth/google', GoogleOAuthMiddleware);

// Zapier Integration Routes
app.use('/zapier', ZapierIntegrationController);

// Protected route
app.get('/invoices', (req, res) => {
  // Fetch and return due invoices for the authenticated user
  // This route should be protected to ensure only authenticated users can access it
  res.json({ invoices: [] });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
