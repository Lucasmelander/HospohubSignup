import { get } from '@vercel/edge-config';

export default async function handler(req, res) {
  try {
    // Log the request
    console.log('Test endpoint called:', {
      method: req.method,
      headers: req.headers,
      url: req.url
    });

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }

    // Try to access Edge Config
    const adminCredentials = await get('adminCredentials');
    const workerSignups = await get('workerSignups');
    const businessSignups = await get('businessSignups');
    const contactSubmissions = await get('contactSubmissions');

    // Return the status of Edge Config (without sensitive data)
    return res.status(200).json({
      status: 'success',
      edgeConfig: {
        adminCredentialsExists: !!adminCredentials,
        workerSignupsExists: !!workerSignups,
        businessSignupsExists: !!businessSignups,
        contactSubmissionsExists: !!contactSubmissions
      }
    });
  } catch (error) {
    console.error('Test endpoint error:', error);
    return res.status(500).json({
      status: 'error',
      message: error.message,
      type: error.constructor.name
    });
  }
} 