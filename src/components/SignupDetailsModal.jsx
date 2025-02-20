import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { 
  FiX, FiUser, FiMail, FiPhone, FiBriefcase, FiMapPin, FiClock,
  FiUsers, FiInfo, FiSearch, FiBell, FiCheck
} from 'react-icons/fi';

const SignupDetailsModal = ({ isOpen, onClose, signup, type }) => {
  if (!isOpen || !signup) return null;

  const getContactMethodsLabel = (methods) => {
    if (!methods || !Array.isArray(methods)) return 'Not specified';
    return methods.map(method => 
      method.charAt(0).toUpperCase() + method.slice(1)
    ).join(', ');
  };

  const getBusinessTypeLabel = (type) => {
    const types = {
      restaurant: 'Restaurant',
      bar: 'Bar',
      cafe: 'Café',
      hotel: 'Hotel',
      nightclub: 'Nightclub',
      other: 'Other'
    };
    return types[type] || type;
  };

  const getFoundUsLabel = (source) => {
    const sources = {
      search: 'Search Engine',
      social: 'Social Media',
      referral: 'Referral',
      advertisement: 'Advertisement',
      other: 'Other'
    };
    return sources[source] || source;
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
            <Title>{type === 'worker' ? 'Worker Details' : 'Business Details'}</Title>
            <Timestamp>
              <FiClock />
              Signed up: {new Date(signup.timestamp).toLocaleString()}
            </Timestamp>
          </ModalHeader>

          <DetailsGrid>
            <DetailItem>
              <DetailIcon><FiUser /></DetailIcon>
              <DetailContent>
                <DetailLabel>Name</DetailLabel>
                <DetailValue>{signup.name}</DetailValue>
              </DetailContent>
            </DetailItem>

            <DetailItem>
              <DetailIcon><FiMail /></DetailIcon>
              <DetailContent>
                <DetailLabel>Email</DetailLabel>
                <DetailValue>{signup.email}</DetailValue>
              </DetailContent>
            </DetailItem>

            <DetailItem>
              <DetailIcon><FiPhone /></DetailIcon>
              <DetailContent>
                <DetailLabel>Phone</DetailLabel>
                <DetailValue>{signup.phone}</DetailValue>
              </DetailContent>
            </DetailItem>

            {type === 'business' && (
              <>
                <DetailItem>
                  <DetailIcon><FiBriefcase /></DetailIcon>
                  <DetailContent>
                    <DetailLabel>Company</DetailLabel>
                    <DetailValue>{signup.company}</DetailValue>
                  </DetailContent>
                </DetailItem>

                <DetailItem>
                  <DetailIcon><FiInfo /></DetailIcon>
                  <DetailContent>
                    <DetailLabel>Business Type</DetailLabel>
                    <DetailValue>{getBusinessTypeLabel(signup.businessType)}</DetailValue>
                  </DetailContent>
                </DetailItem>

                <DetailItem>
                  <DetailIcon><FiUsers /></DetailIcon>
                  <DetailContent>
                    <DetailLabel>Number of Employees</DetailLabel>
                    <DetailValue>{signup.employeeCount}</DetailValue>
                  </DetailContent>
                </DetailItem>

                <DetailItem>
                  <DetailIcon><FiInfo /></DetailIcon>
                  <DetailContent>
                    <DetailLabel>Business Description</DetailLabel>
                    <DetailValue>{signup.description}</DetailValue>
                  </DetailContent>
                </DetailItem>

                <DetailItem>
                  <DetailIcon><FiSearch /></DetailIcon>
                  <DetailContent>
                    <DetailLabel>How they found us</DetailLabel>
                    <DetailValue>{getFoundUsLabel(signup.foundUs)}</DetailValue>
                  </DetailContent>
                </DetailItem>

                <DetailItem>
                  <DetailIcon><FiBell /></DetailIcon>
                  <DetailContent>
                    <DetailLabel>Preferred Contact Methods</DetailLabel>
                    <DetailValue>{getContactMethodsLabel(signup.preferredContact)}</DetailValue>
                  </DetailContent>
                </DetailItem>

                <DetailItem>
                  <DetailIcon><FiCheck /></DetailIcon>
                  <DetailContent>
                    <DetailLabel>Consent</DetailLabel>
                    <ConsentList>
                      <ConsentItem accepted={signup.acceptTerms}>
                        Terms and Conditions
                      </ConsentItem>
                      <ConsentItem accepted={signup.acceptMarketing}>
                        Marketing Communications
                      </ConsentItem>
                    </ConsentList>
                  </DetailContent>
                </DetailItem>
              </>
            )}

            <DetailItem>
              <DetailIcon><FiMapPin /></DetailIcon>
              <DetailContent>
                <DetailLabel>Location</DetailLabel>
                <DetailValue>{signup.location}</DetailValue>
              </DetailContent>
            </DetailItem>
          </DetailsGrid>
        </ModalContainer>
      </Overlay>
    </AnimatePresence>
  );
};

SignupDetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['worker', 'business']).isRequired,
  signup: PropTypes.shape({
    timestamp: PropTypes.string,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    company: PropTypes.string,
    businessType: PropTypes.string,
    employeeCount: PropTypes.string,
    description: PropTypes.string,
    foundUs: PropTypes.string,
    preferredContact: PropTypes.arrayOf(PropTypes.string),
    acceptTerms: PropTypes.bool,
    acceptMarketing: PropTypes.bool,
    location: PropTypes.string.isRequired
  })
};

export default SignupDetailsModal;

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
  max-width: 500px;
  max-height: 85vh;
  position: relative;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  overflow-y: auto;

  /* Custom scrollbar styling */
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
  position: fixed;
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
  z-index: 2;

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
  position: sticky;
  top: 0;
  background: white;
  padding: 0.5rem 0;
  z-index: 1;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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

const DetailsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  padding-top: 0.5rem;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.8);
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 1);
    border-color: rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`;

const DetailIcon = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
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
  font-size: 1.1rem;
  color: #000;
  font-weight: 500;
`;

const ConsentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ConsentItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.accepted ? '#000' : '#666'};
  font-size: 1rem;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props => props.accepted ? '#00c853' : '#ff3d00'};
  }
`; 