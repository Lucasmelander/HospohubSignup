import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { get, set } from '@vercel/edge-config';

const app = express();

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'development' 
    ? 'http://localhost:5173'
    : '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Options pre-flight
app.options('*', cors(corsOptions));

// Auth middleware
const authenticateToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

// Login route
app.post('/admin/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log('Login attempt:', { username }); // Log without password
    
    const adminCredentials = await get('adminCredentials');
    console.log('Admin credentials found:', !!adminCredentials);
    
    if (!adminCredentials) {
      console.error('Admin credentials not found in Edge Config');
      return res.status(500).json({ message: 'Server configuration error' });
    }

    const { username: validUsername, password: validPassword } = adminCredentials;

    if (username === validUsername && password === validPassword) {
      const token = jwt.sign(
        { username, role: 'admin' },
        process.env.JWT_SECRET,
        { expiresIn: '8h' }
      );

      console.log('Login successful:', { username });
      return res.status(200).json({ token });
    }

    console.log('Login failed: Invalid credentials');
    return res.status(401).json({ message: 'Invalid credentials' });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Dashboard route
app.get('/admin/dashboard', authenticateToken, async (req, res) => {
  try {
    const [workerSignups, businessSignups, contactSubmissions] = await Promise.all([
      get('workerSignups') || [],
      get('businessSignups') || [],
      get('contactSubmissions') || []
    ]);

    return res.status(200).json({
      workerSignups,
      businessSignups,
      contactSubmissions
    });
  } catch (error) {
    console.error('Dashboard error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Waitlist signup route
app.post('/waitlist/signup', async (req, res) => {
  try {
    const { type, data } = req.body;
    
    if (!type || !data) {
      return res.status(400).json({ message: 'Invalid signup data' });
    }

    const signup = {
      ...data,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    };
    
    const key = type === 'worker' ? 'workerSignups' : 'businessSignups';
    const existingSignups = await get(key) || [];
    const updatedSignups = [...existingSignups, signup];
    
    await set(key, updatedSignups);

    return res.status(201).json({ 
      message: 'Signup successful', 
      id: signup.id 
    });
  } catch (error) {
    console.error('Waitlist signup error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Contact form route
app.post('/contact/submit', async (req, res) => {
  try {
    const formData = req.body;
    
    if (!formData) {
      return res.status(400).json({ message: 'Invalid form data' });
    }

    const submission = {
      ...formData,
      id: Date.now().toString(),
      status: 'new',
      timestamp: new Date().toISOString()
    };
    
    const existingSubmissions = await get('contactSubmissions') || [];
    const updatedSubmissions = [...existingSubmissions, submission];
    
    await set('contactSubmissions', updatedSubmissions);
    
    return res.status(201).json({ 
      message: 'Form submitted successfully', 
      id: submission.id 
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Update contact status route
app.post('/admin/contact/:id/status', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const submissions = await get('contactSubmissions') || [];
    const updatedSubmissions = submissions.map(submission => 
      submission.id === id ? { ...submission, status } : submission
    );
    
    await set('contactSubmissions', updatedSubmissions);
    
    return res.status(200).json({ message: 'Status updated successfully' });
  } catch (error) {
    console.error('Status update error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

export default app; 