import app from './index.js';

export default async function handler(req, res) {
  // Log incoming request
  console.log('API Request:', {
    method: req.method,
    url: req.url,
    headers: req.headers
  });

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.status(200).end();
    return;
  }

  return app(req, res);
} 