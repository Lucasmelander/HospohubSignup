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
    throw new Error('Invalid or expired token');
  }
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    authenticateToken(req);
    
    // Get all data from Edge Config
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
    return res.status(401).json({ message: error.message });
  }
} 