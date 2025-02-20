const getBaseUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return ''; // Empty string for relative paths in production
  }
  return 'http://localhost:3000'; // Development URL
};

export const API_URL = getBaseUrl(); 