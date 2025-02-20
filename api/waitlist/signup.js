import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { type, data } = req.body;
    
    if (!type || !data) {
      return res.status(400).json({ message: 'Invalid signup data' });
    }

    const signup = {
      ...data,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    };

    // Store in Vercel KV based on type
    if (type === 'worker') {
      await kv.rpush('workerSignups', JSON.stringify(signup));
    } else if (type === 'business') {
      await kv.rpush('businessSignups', JSON.stringify(signup));
    } else {
      return res.status(400).json({ message: 'Invalid signup type' });
    }

    return res.status(201).json({ 
      message: 'Signup successful', 
      id: signup.id 
    });
  } catch (error) {
    console.error('Waitlist signup error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
} 