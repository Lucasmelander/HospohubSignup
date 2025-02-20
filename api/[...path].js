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
    res.status(200).end();
    return;
  }

  // Remove /api prefix for Express routing
  req.url = req.url.replace(/^\/api/, '');
  
  return app(req, res);
} 