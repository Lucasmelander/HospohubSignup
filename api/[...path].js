import app from './index.js';

export default async function handler(req, res) {
  // Log incoming request
  console.log('API Request:', {
    method: req.method,
    url: req.url,
    headers: req.headers,
    env: process.env.NODE_ENV
  });

  // Set CORS headers for development
  if (process.env.NODE_ENV === 'development') {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  }

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Remove /api prefix for Express routing
  req.url = req.url.replace(/^\/api/, '');
  
  return app(req, res);
} 