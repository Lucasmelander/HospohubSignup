import app from './index.js';

export default async function handler(req, res) {
  // Log incoming request
  console.log('API Request:', {
    method: req.method,
    url: req.url,
    headers: req.headers,
    origin: req.headers.origin
  });

  // Prevent Vercel SSO redirection
  res.removeHeader('www-authenticate');
  
  // Set CORS headers - Allow all origins during development
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  return app(req, res);
} 