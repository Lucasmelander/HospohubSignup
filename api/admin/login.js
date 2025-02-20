import jwt from 'jsonwebtoken';
import { get } from '@vercel/edge-config';

export default async function handler(req, res) {
  // Log request method and headers
  console.log('Login request:', {
    method: req.method,
    headers: req.headers,
  });

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { username, password } = req.body;
    
    // Get admin credentials from Edge Config
    const adminCredentials = await get('adminCredentials');
    
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
} 