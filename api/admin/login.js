import jwt from 'jsonwebtoken';

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
    
    // Log credentials being used (without the actual password)
    console.log('Login attempt:', {
      providedUsername: username,
      expectedUsername: process.env.ADMIN_USERNAME,
      hasPassword: !!password,
      hasValidPassword: !!process.env.ADMIN_PASSWORD,
      hasJwtSecret: !!process.env.JWT_SECRET
    });

    // Using environment variables
    const validUsername = process.env.ADMIN_USERNAME;
    const validPassword = process.env.ADMIN_PASSWORD;

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