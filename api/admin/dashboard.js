import jwt from 'jsonwebtoken';
import { kv } from '@vercel/kv';

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
    
    // Get all data from KV storage
    const [workerSignups, businessSignups, contactSubmissions] = await Promise.all([
      kv.lrange('workerSignups', 0, -1) || [],
      kv.lrange('businessSignups', 0, -1) || [],
      kv.lrange('contactSubmissions', 0, -1) || []
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