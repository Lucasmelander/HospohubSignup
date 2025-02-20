import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheck, FiUser, FiMail, FiPhone, FiBriefcase, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/api';

const SignupModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    location: '',
    businessType: '',
    employeeCount: '',
    preferredContact: [],
    foundUs: '',
    description: '',
    experience: '',
    availability: [],
    positions: [],
    certifications: [],
    languages: [],
    workPreferences: {
      fullTime: false,
      partTime: false,
      casual: false,
      temporary: false
    },
    transportMethod: '',
    acceptTerms: false,
    acceptMarketing: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Add effect to prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/waitlist/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: role,
          data: formData
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to join waitlist');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setStep(1);
        setRole('');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          location: '',
          businessType: '',
          employeeCount: '',
          preferredContact: [],
          foundUs: '',
          description: '',
          experience: '',
          availability: [],
          positions: [],
          certifications: [],
          languages: [],
          workPreferences: {
            fullTime: false,
            partTime: false,
            casual: false,
            temporary: false
          },
          transportMethod: '',
          acceptTerms: false,
          acceptMarketing: false
        });
      }, 2000);
    } catch (error) {
      console.error('Signup error:', error);
      alert('Failed to join waitlist. Please try again.');
    }
  };

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setStep(2);
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    
    // Handle array fields
    if (['preferredContact', 'positions', 'availability', 'certifications', 'languages'].includes(name)) {
      setFormData(prev => ({
        ...prev,
        [name]: checked 
          ? [...prev[name], value]
          : prev[name].filter(item => item !== value)
      }));
    } 
    // Handle workPreferences object
    else if (name.startsWith('workPreferences.')) {
      const preference = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        workPreferences: {
          ...prev.workPreferences,
          [preference]: checked
        }
      }));
    }
    // Handle regular boolean fields
    else {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <ModalContainer
              as={motion.div}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={onClose}>
                <FiX />
              </CloseButton>
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <SuccessMessage
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <SuccessIcon>
                      <FiCheck />
                    </SuccessIcon>
                    <h3>Thank you for signing up!</h3>
                    <p>We'll notify you when we launch.</p>
                  </SuccessMessage>
                ) : step === 1 ? (
                  <RoleSelection
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <h2>Join HospoHub</h2>
                    <p>Select your role to get started</p>
                    
                    <RoleOptions>
                      <RoleCard
                        onClick={() => handleRoleSelect('business')}
                        selected={role === 'business'}
                      >
                        <FiBriefcase />
                        <h3>Business</h3>
                        <p>I need staff for my venue</p>
                      </RoleCard>
                      
                      <RoleCard
                        onClick={() => handleRoleSelect('worker')}
                        selected={role === 'worker'}
                      >
                        <FiUser />
                        <h3>Worker</h3>
                        <p>I'm looking for hospitality work</p>
                      </RoleCard>
                    </RoleOptions>
                  </RoleSelection>
                ) : (
                  <Form
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleSubmit}
                  >
                    <h2>Complete Your Profile</h2>
                    <p>Tell us a bit about yourself</p>
                    
                    <InputGroup>
                      <Label>Full Name</Label>
                      <InputWrapper>
                        <FiUser />
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </InputWrapper>
                    </InputGroup>

                    <InputGroup>
                      <Label>Email</Label>
                      <InputWrapper>
                        <FiMail />
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                        />
                      </InputWrapper>
                    </InputGroup>

                    <InputGroup>
                      <Label>Phone</Label>
                      <InputWrapper>
                        <FiPhone />
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          required
                        />
                      </InputWrapper>
                    </InputGroup>

                    {role === 'business' && (
                      <>
                        <InputGroup>
                          <Label>Company Name</Label>
                          <InputWrapper>
                            <FiBriefcase />
                            <Input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              placeholder="Enter your company name"
                              required
                            />
                          </InputWrapper>
                        </InputGroup>

                        <InputGroup>
                          <Label>Business Type</Label>
                          <Select
                            name="businessType"
                            value={formData.businessType}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select business type</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="bar">Bar</option>
                            <option value="cafe">Café</option>
                            <option value="hotel">Hotel</option>
                            <option value="nightclub">Nightclub</option>
                            <option value="other">Other</option>
                          </Select>
                        </InputGroup>

                        <InputGroup>
                          <Label>Number of Employees</Label>
                          <Select
                            name="employeeCount"
                            value={formData.employeeCount}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select employee count</option>
                            <option value="1-10">1-10</option>
                            <option value="11-50">11-50</option>
                            <option value="51-200">51-200</option>
                            <option value="201+">201+</option>
                          </Select>
                        </InputGroup>

                        <InputGroup>
                          <Label>Business Description</Label>
                          <TextArea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Tell us about your business..."
                            required
                          />
                        </InputGroup>

                        <InputGroup>
                          <Label>How did you find us?</Label>
                          <Select
                            name="foundUs"
                            value={formData.foundUs}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select an option</option>
                            <option value="search">Search Engine</option>
                            <option value="social">Social Media</option>
                            <option value="referral">Referral</option>
                            <option value="advertisement">Advertisement</option>
                            <option value="other">Other</option>
                          </Select>
                        </InputGroup>

                        <InputGroup>
                          <Label>Preferred Contact Methods</Label>
                          <CheckboxGroup>
                            <CheckboxLabel>
                              <input
                                type="checkbox"
                                name="preferredContact"
                                value="email"
                                checked={formData.preferredContact.includes('email')}
                                onChange={handleCheckboxChange}
                              />
                              Email
                            </CheckboxLabel>
                            <CheckboxLabel>
                              <input
                                type="checkbox"
                                name="preferredContact"
                                value="phone"
                                checked={formData.preferredContact.includes('phone')}
                                onChange={handleCheckboxChange}
                              />
                              Phone
                            </CheckboxLabel>
                            <CheckboxLabel>
                              <input
                                type="checkbox"
                                name="preferredContact"
                                value="sms"
                                checked={formData.preferredContact.includes('sms')}
                                onChange={handleCheckboxChange}
                              />
                              SMS
                            </CheckboxLabel>
                          </CheckboxGroup>
                        </InputGroup>

                        <ConsentGroup>
                          <CheckboxLabel>
                            <input
                              type="checkbox"
                              name="acceptTerms"
                              checked={formData.acceptTerms}
                              onChange={handleCheckboxChange}
                              required
                            />
                            I agree to the <StyledLink to="/terms">Terms and Conditions</StyledLink>
                          </CheckboxLabel>

                          <CheckboxLabel>
                            <input
                              type="checkbox"
                              name="acceptMarketing"
                              checked={formData.acceptMarketing}
                              onChange={handleCheckboxChange}
                            />
                            I agree to receive marketing communications
                          </CheckboxLabel>
                        </ConsentGroup>
                      </>
                    )}

                    {role === 'worker' && (
                      <>
                        <InputGroup>
                          <Label>Years of Experience</Label>
                          <Select
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select experience</option>
                            <option value="0-1">Less than 1 year</option>
                            <option value="1-3">1-3 years</option>
                            <option value="3-5">3-5 years</option>
                            <option value="5-10">5-10 years</option>
                            <option value="10+">10+ years</option>
                          </Select>
                        </InputGroup>

                        <InputGroup>
                          <Label>Preferred Positions</Label>
                          <CheckboxGroup>
                            <CheckboxLabel>
                              <input
                                type="checkbox"
                                name="positions"
                                value="waiter"
                                checked={formData.positions.includes('waiter')}
                                onChange={handleCheckboxChange}
                              />
                              Waiter/Waitress
                            </CheckboxLabel>
                            <CheckboxLabel>
                              <input
                                type="checkbox"
                                name="positions"
                                value="bartender"
                                checked={formData.positions.includes('bartender')}
                                onChange={handleCheckboxChange}
                              />
                              Bartender
                            </CheckboxLabel>
                            <CheckboxLabel>
                              <input
                                type="checkbox"
                                name="positions"
                                value="barista"
                                checked={formData.positions.includes('barista')}
                                onChange={handleCheckboxChange}
                              />
                              Barista
                            </CheckboxLabel>
                            <CheckboxLabel>
                              <input
                                type="checkbox"
                                name="positions"
                                value="chef"
                                checked={formData.positions.includes('chef')}
                                onChange={handleCheckboxChange}
                              />
                              Chef
                            </CheckboxLabel>
                            <CheckboxLabel>
                              <input
                                type="checkbox"
                                name="positions"
                                value="kitchen-hand"
                                checked={formData.positions.includes('kitchen-hand')}
                                onChange={handleCheckboxChange}
                              />
                              Kitchen Hand
                            </CheckboxLabel>
                          </CheckboxGroup>
                        </InputGroup>

                        <InputGroup>
                          <Label>Availability</Label>
                          <CheckboxGroup>
                            <CheckboxLabel>
                              <input
                                type="checkbox"
                                name="availability"
                                value="weekdays"
                                checked={formData.availability.includes('weekdays')}
                                onChange={handleCheckboxChange}
                              />
                              Weekdays
                            </CheckboxLabel>
                            <CheckboxLabel>
                              <input
                                type="checkbox"
                                name="availability"
                                value="weekends"
                                checked={formData.availability.includes('weekends')}
                                onChange={handleCheckboxChange}
                              />
                              Weekends
                            </CheckboxLabel>
                            <CheckboxLabel>
                              <input
                                type="checkbox"
                                name="availability"
                                value="evenings"
                                checked={formData.availability.includes('evenings')}
                                onChange={handleCheckboxChange}
                              />
                              Evenings
                            </CheckboxLabel>
                            <CheckboxLabel>
                              <input
                                type="checkbox"
                                name="availability"
                                value="early-mornings"
                                checked={formData.availability.includes('early-mornings')}
                                onChange={handleCheckboxChange}
                              />
                              Early Mornings
                            </CheckboxLabel>
                          </CheckboxGroup>
                        </InputGroup>

                        <InputGroup>
                          <Label>Work Preferences</Label>
                          <CheckboxGroup>
                            <CheckboxLabel>
                              <input
                                type="checkbox"
                                name="workPreferences.fullTime"
                                checked={formData.workPreferences.fullTime}
                                onChange={handleCheckboxChange}
                              />
                              Full Time
                            </CheckboxLabel>
                            <CheckboxLabel>
                              <input
                                type="checkbox"
                                name="workPreferences.partTime"
                                checked={formData.workPreferences.partTime}
                                onChange={handleCheckboxChange}
                              />
                              Part Time
                            </CheckboxLabel>
                            <CheckboxLabel>
                              <input
                                type="checkbox"
                                name="workPreferences.casual"
                                checked={formData.workPreferences.casual}
                                onChange={handleCheckboxChange}
                              />
                              Casual
                            </CheckboxLabel>
                            <CheckboxLabel>
                              <input
                                type="checkbox"
                                name="workPreferences.temporary"
                                checked={formData.workPreferences.temporary}
                                onChange={handleCheckboxChange}
                              />
                              Temporary
                            </CheckboxLabel>
                          </CheckboxGroup>
                        </InputGroup>

                        <InputGroup>
                          <Label>Certifications</Label>
                          <CheckboxGroup>
                            <CheckboxLabel>
                              <input
                                type="checkbox"
                                name="certifications"
                                value="rsa"
                                checked={formData.certifications.includes('rsa')}
                                onChange={handleCheckboxChange}
                              />
                              RSA (Responsible Service of Alcohol)
                            </CheckboxLabel>
                            <CheckboxLabel>
                              <input
                                type="checkbox"
                                name="certifications"
                                value="food-safety"
                                checked={formData.certifications.includes('food-safety')}
                                onChange={handleCheckboxChange}
                              />
                              Food Safety Certificate
                            </CheckboxLabel>
                            <CheckboxLabel>
                              <input
                                type="checkbox"
                                name="certifications"
                                value="first-aid"
                                checked={formData.certifications.includes('first-aid')}
                                onChange={handleCheckboxChange}
                              />
                              First Aid Certificate
                            </CheckboxLabel>
                          </CheckboxGroup>
                        </InputGroup>

                        <InputGroup>
                          <Label>Languages Spoken</Label>
                          <CheckboxGroup>
                            <CheckboxLabel>
                              <input
                                type="checkbox"
                                name="languages"
                                value="english"
                                checked={formData.languages.includes('english')}
                                onChange={handleCheckboxChange}
                              />
                              English
                            </CheckboxLabel>
                            <CheckboxLabel>
                              <input
                                type="checkbox"
                                name="languages"
                                value="swedish"
                                checked={formData.languages.includes('swedish')}
                                onChange={handleCheckboxChange}
                              />
                              Swedish
                            </CheckboxLabel>
                            <CheckboxLabel>
                              <input
                                type="checkbox"
                                name="languages"
                                value="other"
                                checked={formData.languages.includes('other')}
                                onChange={handleCheckboxChange}
                              />
                              Other
                            </CheckboxLabel>
                          </CheckboxGroup>
                        </InputGroup>

                        <InputGroup>
                          <Label>Transport Method</Label>
                          <Select
                            name="transportMethod"
                            value={formData.transportMethod}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select transport method</option>
                            <option value="own-car">Own Car</option>
                            <option value="public-transport">Public Transport</option>
                            <option value="bicycle">Bicycle</option>
                            <option value="walking">Walking</option>
                            <option value="other">Other</option>
                          </Select>
                        </InputGroup>

                        <ConsentGroup>
                          <CheckboxLabel>
                            <input
                              type="checkbox"
                              name="acceptTerms"
                              checked={formData.acceptTerms}
                              onChange={handleCheckboxChange}
                              required
                            />
                            I agree to the <StyledLink to="/terms">Terms and Conditions</StyledLink>
                          </CheckboxLabel>

                          <CheckboxLabel>
                            <input
                              type="checkbox"
                              name="acceptMarketing"
                              checked={formData.acceptMarketing}
                              onChange={handleCheckboxChange}
                            />
                            I agree to receive marketing communications
                          </CheckboxLabel>
                        </ConsentGroup>
                      </>
                    )}

                    <InputGroup>
                      <Label>Location</Label>
                      <InputWrapper>
                        <FiMapPin />
                        <Input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="Enter your city"
                          required
                        />
                      </InputWrapper>
                    </InputGroup>

                    <ButtonGroup>
                      <BackButton type="button" onClick={() => setStep(1)}>
                        Back
                      </BackButton>
                      <SubmitButton type="submit">
                        Join Waitlist
                      </SubmitButton>
                    </ButtonGroup>
                  </Form>
                )}
              </AnimatePresence>
            </ModalContainer>
          </Overlay>
        </>
      )}
    </AnimatePresence>
  );
};

export default SignupModal;

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
  background: #fff;
  border-radius: 24px;
  padding: 3rem;
  width: 90%;
  max-width: 600px;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);

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
    padding: 2rem;
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
  color: #000;
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
  }

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    transform: rotate(90deg);
  }
`;

const RoleSelection = styled(motion.div)`
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, #000000 0%, #333333 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: #666;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`;

const RoleOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const RoleCard = styled.div`
  background: ${props => props.selected ? '#000' : '#fff'};
  border: 2px solid ${props => props.selected ? '#000' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 16px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  svg {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${props => props.selected ? '#fff' : '#000'};
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: ${props => props.selected ? '#fff' : '#000'};
  }

  p {
    font-size: 0.9rem;
    color: ${props => props.selected ? 'rgba(255, 255, 255, 0.8)' : '#666'};
    margin: 0;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border-color: #000;
  }
`;

const Form = styled(motion.form)`
  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, #000000 0%, #333333 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: #666;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #000;
  font-size: 0.9rem;
  font-weight: 600;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.3s ease;

  svg {
    color: #666;
    width: 20px;
    height: 20px;
  }

  &:focus-within {
    background: rgba(0, 0, 0, 0.08);
    
    svg {
      color: #000;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: none;
  border: none;
  color: #000;
  font-size: 1rem;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const BackButton = styled.button`
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 8px;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: #000;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 2;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: 2rem 0;

  h3 {
    font-size: 1.5rem;
    margin: 1rem 0 0.5rem;
    color: #000;
  }

  p {
    color: #666;
    font-size: 1.1rem;
  }
`;

const SuccessIcon = styled.div`
  width: 64px;
  height: 64px;
  background: #000;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  svg {
    width: 32px;
    height: 32px;
    color: #fff;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 8px;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;

  &:focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 8px;
  color: #000;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: #333;

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`;

const ConsentGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 8px;
`;

const StyledLink = styled.a`
  color: #000;
  text-decoration: underline;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`; 