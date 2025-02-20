import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheck } from 'react-icons/fi';

const SignupModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ email, name, role });
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setEmail('');
      setName('');
      setRole('');
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <ModalContainer
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <CloseButton onClick={onClose}>
              <FiX />
            </CloseButton>
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <SuccessMessage
                  as={motion.div}
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
              ) : (
                <Form
                  as={motion.form}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                >
                  <h2>Join the waitlist</h2>
                  <p>Be the first to know when we launch.</p>
                  
                  <InputGroup>
                    <Label>Name</Label>
                    <Input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      required
                    />
                  </InputGroup>

                  <InputGroup>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </InputGroup>

                  <InputGroup>
                    <Label>Role</Label>
                    <Select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required
                    >
                      <option value="">Select your role</option>
                      <option value="business">Business Owner</option>
                      <option value="manager">Manager</option>
                      <option value="staff">Staff Member</option>
                    </Select>
                  </InputGroup>

                  <SubmitButton type="submit">
                    Join Waitlist
                  </SubmitButton>
                </Form>
              )}
            </AnimatePresence>
          </ModalContainer>
        </>
      )}
    </AnimatePresence>
  );
};

export default SignupModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #111;
  border-radius: 20px;
  padding: 2.5rem;
  width: 90%;
  max-width: 500px;
  z-index: 1001;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    color: #fff;
  }
`;

const Form = styled.form`
  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #fff;
  }

  p {
    color: #999;
    margin-bottom: 2rem;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #fff;
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  background: #000;
  border: 1px solid #333;
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #666;
  }

  &::placeholder {
    color: #666;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem 1rem;
  background: #000;
  border: 1px solid #333;
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  cursor: pointer;

  &:focus {
    border-color: #666;
  }

  option {
    background: #000;
    color: #fff;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
  padding: 2rem 0;

  h3 {
    font-size: 1.5rem;
    margin: 1rem 0 0.5rem;
    color: #fff;
  }

  p {
    color: #999;
  }
`;

const SuccessIcon = styled.div`
  width: 64px;
  height: 64px;
  background: #22c55e;
  border-radius: 50%;
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