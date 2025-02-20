import jwt from 'jsonwebtoken';
import { get } from '@vercel/edge-config';

const authenticateToken = (req) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    throw new Error('Authentication required');
  }

  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.error('Token verification error:', error);
    throw new Error('Invalid or expired token');
  }
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Log the incoming request
    console.log('Dashboard request:', {
      method: req.method,
      headers: req.headers,
      auth: req.headers.authorization ? 'Present' : 'Missing'
    });

    // Verify authentication
    const decoded = authenticateToken(req);
    console.log('Authenticated user:', decoded);
    
    // Get all data from Edge Config
    const [workerSignups, businessSignups, contactSubmissions] = await Promise.all([
      get('workerSignups') || [],
      get('businessSignups') || [],
      get('contactSubmissions') || []
    ]);

    // Log the response size
    console.log('Dashboard response size:', {
      workers: workerSignups.length,
      businesses: businessSignups.length,
      contacts: contactSubmissions.length
    });

    return res.status(200).json({
      workerSignups,
      businessSignups,
      contactSubmissions
    });
  } catch (error) {
    console.error('Dashboard error:', error);
    
    if (error.message === 'Authentication required' || error.message === 'Invalid or expired token') {
      return res.status(401).json({ message: error.message });
    }
    
    return res.status(500).json({ message: 'Internal server error' });
  }
} 