function getBaseUrl() {
  if (typeof window === 'undefined') return ''; // Server-side
  
  if (process.env.NODE_ENV === 'production') {
    // Use the current hostname in production
    return `https://${window.location.hostname}/api`;
  }
  
  // Development
  return 'http://localhost:3000/api';
}

export const API_URL = getBaseUrl(); 