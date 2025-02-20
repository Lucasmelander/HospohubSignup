import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { 
  FiX, FiUser, FiMail, FiPhone, FiBriefcase, 
  FiMessageSquare, FiClock, FiTag, FiCheckCircle 
} from 'react-icons/fi';
import { API_URL } from '../config/api';

const ContactDetailsModal = ({ isOpen, onClose, submission, onUpdateStatus }) => {
  if (!isOpen || !submission) return null;

  const statusColors = {
    new: '#ff9800',
    inProgress: '#2196f3',
    completed: '#4caf50'
  };

  const statusLabels = {
    new: 'New',
    inProgress: 'In Progress',
    completed: 'Completed'
  };

  const updateStatus = async (status) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_URL}/admin/contact/${submission.id}/status`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });

      if (!response.ok) {
        throw new Error('Failed to update status');
      }

      onUpdateStatus(submission.id, status);
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status');
    }
  };

  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <ModalContainer
          onClick={e => e.stopPropagation()}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
        >
          <CloseButton onClick={onClose}>
            <FiX />
          </CloseButton>

          <ModalHeader>
            <Title>Contact Form Submission</Title>
            <Timestamp>
              <FiClock />
              Submitted: {new Date(submission.timestamp).toLocaleString()}
            </Timestamp>
          </ModalHeader>

          <StatusSection>
            <StatusLabel>Status:</StatusLabel>
            <StatusButtons>
              {Object.entries(statusLabels).map(([status, label]) => (
                <StatusButton
                  key={status}
                  $isActive={submission.status === status}
                  $color={statusColors[status]}
                  onClick={() => updateStatus(status)}
                >
                  <FiCheckCircle />
                  {label}
                </StatusButton>
              ))}
            </StatusButtons>
          </StatusSection>

          <DetailsGrid>
            <DetailItem>
              <DetailIcon><FiTag /></DetailIcon>
              <DetailContent>
                <DetailLabel>Inquiry Type</DetailLabel>
                <DetailValue>{submission.type}</DetailValue>
              </DetailContent>
            </DetailItem>

            <DetailItem>
              <DetailIcon><FiUser /></DetailIcon>
              <DetailContent>
                <DetailLabel>Name</DetailLabel>
                <DetailValue>{submission.name}</DetailValue>
              </DetailContent>
            </DetailItem>

            <DetailItem>
              <DetailIcon><FiMail /></DetailIcon>
              <DetailContent>
                <DetailLabel>Email</DetailLabel>
                <DetailValue>{submission.email}</DetailValue>
              </DetailContent>
            </DetailItem>

            <DetailItem>
              <DetailIcon><FiPhone /></DetailIcon>
              <DetailContent>
                <DetailLabel>Phone</DetailLabel>
                <DetailValue>{submission.phone}</DetailValue>
              </DetailContent>
            </DetailItem>

            {submission.company && (
              <DetailItem>
                <DetailIcon><FiBriefcase /></DetailIcon>
                <DetailContent>
                  <DetailLabel>Company</DetailLabel>
                  <DetailValue>{submission.company}</DetailValue>
                </DetailContent>
              </DetailItem>
            )}

            <DetailItem>
              <DetailIcon><FiMessageSquare /></DetailIcon>
              <DetailContent>
                <DetailLabel>Subject</DetailLabel>
                <DetailValue>{submission.subject}</DetailValue>
              </DetailContent>
            </DetailItem>

            <MessageItem>
              <DetailLabel>Message</DetailLabel>
              <MessageText>{submission.message}</MessageText>
            </MessageItem>
          </DetailsGrid>
        </ModalContainer>
      </Overlay>
    </AnimatePresence>
  );
};

ContactDetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onUpdateStatus: PropTypes.func.isRequired,
  submission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    company: PropTypes.string,
    subject: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['new', 'inProgress', 'completed']).isRequired
  })
};

export default ContactDetailsModal;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const ModalContainer = styled(motion.div)`
  background: white;
  border-radius: 24px;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  max-height: 85vh;
  position: relative;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 95%;
    max-height: 80vh;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
    color: #000;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    transform: rotate(90deg);
  }
`;

const ModalHeader = styled.div`
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Timestamp = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.9rem;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const StatusSection = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 12px;
`;

const StatusLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 0.5rem;
`;

const StatusButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const StatusButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.$isActive ? props.$color : 'transparent'};
  color: ${props => props.$isActive ? 'white' : props.$color};
  border: 1px solid ${props => props.$color};

  svg {
    width: 16px;
    height: 16px;
    opacity: ${props => props.$isActive ? 1 : 0.5};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const DetailsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;

const DetailIcon = styled.div`
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 16px;
    height: 16px;
    color: #000;
  }
`;

const DetailContent = styled.div`
  flex: 1;
`;

const DetailLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.25rem;
`;

const DetailValue = styled.div`
  font-size: 1rem;
  color: #000;
`;

const MessageItem = styled.div`
  padding: 1rem;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 12px;
`;

const MessageText = styled.div`
  font-size: 1rem;
  color: #000;
  white-space: pre-wrap;
  line-height: 1.5;
`; 