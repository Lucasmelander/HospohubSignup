import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const formData = req.body;
    
    if (!formData) {
      return res.status(400).json({ message: 'Invalid form data' });
    }

    const submission = {
      ...formData,
      id: Date.now().toString(),
      status: 'new',
      timestamp: new Date().toISOString()
    };

    // Store in Vercel KV
    await kv.rpush('contactSubmissions', JSON.stringify(submission));
    
    return res.status(201).json({ 
      message: 'Form submitted successfully', 
      id: submission.id 
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
} 