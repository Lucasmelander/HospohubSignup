const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

// Secure CORS setup
app.use(cors({
  origin: '*',  // We'll lock this down when deploying
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Authorization'],
  credentials: true
}));

app.use(express.json());

// Simple in-memory storage (will be replaced with proper DB later)
const storage = {
  workerSignups: [],
  businessSignups: [],
  contactSubmissions: [] // Add storage for contact submissions
};

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET || 'default_dev_secret');
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

// Login endpoint
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;

  // Using environment variables with fallback for development
  const validUsername = process.env.ADMIN_USERNAME || 'Lucasmelander';
  const validPassword = process.env.ADMIN_PASSWORD || 'Hospohub2024SwedenRock142645';

  if (username === validUsername && password === validPassword) {
    const token = jwt.sign(
      { username, role: 'admin' },
      process.env.JWT_SECRET || 'default_dev_secret',
      { expiresIn: '8h' }
    );

    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Contact form submission endpoint
app.post('/api/contact/submit', (req, res) => {
  const formData = req.body;
  
  if (!formData) {
    return res.status(400).json({ message: 'Invalid form data' });
  }

  const submission = {
    ...formData,
    id: Date.now().toString(),
    status: 'new', // new, inProgress, completed
    timestamp: new Date().toISOString()
  };

  storage.contactSubmissions.push(submission);
  res.status(201).json({ message: 'Form submitted successfully', id: submission.id });
});

// Waitlist signup endpoint
app.post('/api/waitlist/signup', (req, res) => {
  const { type, data } = req.body;
  
  if (!type || !data) {
    return res.status(400).json({ message: 'Invalid signup data' });
  }

  const signup = {
    ...data,
    timestamp: new Date(),
    id: Date.now().toString()
  };

  if (type === 'worker') {
    storage.workerSignups.push(signup);
  } else if (type === 'business') {
    storage.businessSignups.push(signup);
  } else {
    return res.status(400).json({ message: 'Invalid signup type' });
  }

  res.status(201).json({ message: 'Signup successful', id: signup.id });
});

// Protected dashboard route
app.get('/api/admin/dashboard', authenticateToken, (req, res) => {
  // Return the actual stored data
  res.json({
    workerSignups: storage.workerSignups,
    businessSignups: storage.businessSignups,
    contactSubmissions: storage.contactSubmissions // Include contact submissions
  });
});

// Update contact submission status
app.post('/api/admin/contact/:id/status', authenticateToken, (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const submission = storage.contactSubmissions.find(s => s.id === id);
  if (!submission) {
    return res.status(404).json({ message: 'Submission not found' });
  }

  submission.status = status;
  res.json({ message: 'Status updated successfully', submission });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy' });
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app; 