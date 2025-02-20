function getBaseUrl() {
  if (typeof window === 'undefined') return ''; // Server-side
  
  if (process.env.NODE_ENV === 'production') {
    // Use relative path in production
    return '/api';
  }
  
  // Development
  return 'http://localhost:3000/api';
}

export const API_URL = getBaseUrl(); 