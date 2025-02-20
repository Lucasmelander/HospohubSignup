function getBaseUrl() {
  if (typeof window === 'undefined') return ''; // Server-side
  
  // Always use relative paths for API calls
  return '/api';
}

export const API_URL = getBaseUrl(); 