import { get } from '@vercel/edge-config';
import { verifyToken } from '../middleware/auth';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Verify token
    verifyToken(req);

    // Get data from Edge Config
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
    if (error.message === 'No token provided' || error.message === 'Invalid token') {
      return res.status(401).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Internal server error' });
  }
} 