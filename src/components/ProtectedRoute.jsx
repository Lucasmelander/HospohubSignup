import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/api';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('adminToken');
      
      if (!token) {
        navigate('/admin/login');
        return;
      }

      try {
        const response = await fetch(`${API_URL}/admin/dashboard`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Token invalid');
        }

        setIsVerifying(false);
      } catch (error) {
        console.error('Auth error:', error);
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
      }
    };

    verifyToken();
  }, [navigate]);

  if (isVerifying) {
    return <div>Verifying authentication...</div>;
  }

  return children;
};

export default ProtectedRoute; 