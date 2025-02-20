const getBaseUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    // In development, use the Vite dev server port
    return 'http://localhost:5173/api';
  }
  // In production, use relative path
  return '/api';
};

export const API_URL = getBaseUrl(); 