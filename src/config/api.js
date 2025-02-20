// Get the base URL for API calls
export const getBaseUrl = () => {
  // In production, use the current origin
  if (import.meta.env.PROD) {
    return `${window.location.origin}/api`;
  }
  // In development, use localhost
  return 'http://localhost:3000/api';
};

export const API_URL = getBaseUrl();