import { get, set } from '@vercel/edge-config';

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
    
    // Get existing signups
    const key = type === 'worker' ? 'workerSignups' : 'businessSignups';
    const existingSignups = await get(key) || [];
    
    // Add new signup
    const updatedSignups = [...existingSignups, signup];
    
    // Update Edge Config
    await set(key, updatedSignups);

    return res.status(201).json({ 
      message: 'Signup successful', 
      id: signup.id 
    });
  } catch (error) {
    console.error('Waitlist signup error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
} 