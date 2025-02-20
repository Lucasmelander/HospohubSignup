import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiUsers, FiBriefcase, FiLogOut, FiChevronRight, FiMessageSquare } from 'react-icons/fi';
import SignupDetailsModal from '../components/SignupDetailsModal';
import ContactDetailsModal from '../components/ContactDetailsModal';
import { API_URL } from '../config/api';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.05) 100%);
`;

const AdminHeader = styled.header`
  background: white;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-weight: 800;
  font-size: 1.8rem;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const WelcomeSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  h2 {
    font-size: 1.2rem;
    color: #333;
    margin: 0;
  }
`;

const LogoutButton = styled.button`
  background: #000;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const DashboardContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const StatCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 2.5rem;
    margin: 0;
  }

  p {
    color: #666;
    margin: 0;
  }

  .icon {
    font-size: 2rem;
    color: #000;
  }
`;

const SignupsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SignupSection = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #000000 0%, #333333 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const SignupCard = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  }

  .content {
    flex: 1;
  }

  h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    color: #666;
    font-size: 0.9rem;
  }

  .arrow {
    color: #666;
    transition: transform 0.3s ease;
  }

  &:hover .arrow {
    transform: translateX(5px);
  }
`;

const ContactCard = styled(SignupCard)`
  border-left: 4px solid ${props => {
    switch (props.$status) {
      case 'new': return '#ff9800';
      case 'inProgress': return '#2196f3';
      case 'completed': return '#4caf50';
      default: return '#666';
    }
  }};
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: 0.5rem;
  background: ${props => {
    switch (props.$status) {
      case 'new': return '#fff3e0';
      case 'inProgress': return '#e3f2fd';
      case 'completed': return '#e8f5e9';
      default: return '#f5f5f5';
    }
  }};
  color: ${props => {
    switch (props.$status) {
      case 'new': return '#ff9800';
      case 'inProgress': return '#2196f3';
      case 'completed': return '#4caf50';
      default: return '#666';
    }
  }};
`;

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    workerSignups: [],
    businessSignups: [],
    contactSubmissions: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedSignup, setSelectedSignup] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [modalType, setModalType] = useState(null);
  const navigate = useNavigate();

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_URL}/admin/dashboard`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch dashboard data');
      }

      const data = await response.json();
      setStats(data);
      setError('');
    } catch (err) {
      console.error('Dashboard data fetch error:', err);
      setError('Failed to load dashboard data');
      if (err.message === 'Invalid or expired token') {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
    const interval = setInterval(fetchDashboardData, 30000);
    return () => clearInterval(interval);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const handleSignupClick = (signup, type) => {
    setSelectedSignup(signup);
    setModalType(type);
  };

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleUpdateContactStatus = (id, newStatus) => {
    setStats(prev => ({
      ...prev,
      contactSubmissions: prev.contactSubmissions.map(submission =>
        submission.id === id ? { ...submission, status: newStatus } : submission
      )
    }));
  };

  if (isLoading) {
    return (
      <PageContainer>
        <AdminHeader>
          <HeaderContent>
            <Logo to="/">HospoHub</Logo>
          </HeaderContent>
        </AdminHeader>
        <DashboardContent>
          <div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>
        </DashboardContent>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <AdminHeader>
          <HeaderContent>
            <Logo to="/">HospoHub</Logo>
          </HeaderContent>
        </AdminHeader>
        <DashboardContent>
          <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>{error}</div>
        </DashboardContent>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <AdminHeader>
        <HeaderContent>
          <Logo to="/">HospoHub</Logo>
          <WelcomeSection>
            <h2>Welcome back, Admin</h2>
            <LogoutButton onClick={handleLogout}>
              <FiLogOut /> Logout
            </LogoutButton>
          </WelcomeSection>
        </HeaderContent>
      </AdminHeader>

      <DashboardContent>
        <StatsGrid>
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FiUsers className="icon" />
            <h2>{stats.workerSignups.length}</h2>
            <p>Worker Signups</p>
          </StatCard>

          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FiBriefcase className="icon" />
            <h2>{stats.businessSignups.length}</h2>
            <p>Business Signups</p>
          </StatCard>

          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FiMessageSquare className="icon" />
            <h2>{stats.contactSubmissions.length}</h2>
            <p>Contact Submissions</p>
          </StatCard>
        </StatsGrid>

        <SignupsContainer>
          <SignupSection>
            <h3>Recent Worker Signups</h3>
            {stats.workerSignups.slice(-5).reverse().map((signup, index) => (
              <SignupCard
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleSignupClick(signup, 'worker')}
              >
                <div className="content">
                  <h4>{signup.name}</h4>
                  <p>{signup.email}</p>
                  <p>Signed up: {new Date(signup.timestamp).toLocaleDateString()}</p>
                </div>
                <FiChevronRight className="arrow" />
              </SignupCard>
            ))}
          </SignupSection>

          <SignupSection>
            <h3>Recent Business Signups</h3>
            {stats.businessSignups.slice(-5).reverse().map((signup, index) => (
              <SignupCard
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleSignupClick(signup, 'business')}
              >
                <div className="content">
                  <h4>{signup.businessName || signup.company}</h4>
                  <p>{signup.email}</p>
                  <p>Signed up: {new Date(signup.timestamp).toLocaleDateString()}</p>
                </div>
                <FiChevronRight className="arrow" />
              </SignupCard>
            ))}
          </SignupSection>

          <SignupSection>
            <h3>Recent Contact Submissions</h3>
            {stats.contactSubmissions.slice(-5).reverse().map((submission, index) => (
              <ContactCard
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleContactClick(submission)}
                $status={submission.status}
              >
                <div className="content">
                  <h4>{submission.subject}</h4>
                  <p>{submission.name} - {submission.email}</p>
                  <p>Submitted: {new Date(submission.timestamp).toLocaleDateString()}</p>
                  <StatusBadge $status={submission.status}>
                    {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                  </StatusBadge>
                </div>
                <FiChevronRight className="arrow" />
              </ContactCard>
            ))}
          </SignupSection>
        </SignupsContainer>

        <SignupDetailsModal
          isOpen={!!selectedSignup}
          onClose={() => setSelectedSignup(null)}
          signup={selectedSignup}
          type={modalType}
        />

        <ContactDetailsModal
          isOpen={!!selectedContact}
          onClose={() => setSelectedContact(null)}
          submission={selectedContact}
          onUpdateStatus={handleUpdateContactStatus}
        />
      </DashboardContent>
    </PageContainer>
  );
};

export default AdminDashboard;