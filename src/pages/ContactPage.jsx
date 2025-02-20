import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiSend, FiClock, FiMapPin, FiMail, FiMessageSquare } from 'react-icons/fi';
import Layout from '../components/Layout';
import { API_URL } from '../config/api';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    type: 'general' // general, pricing, support
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/contact/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        type: 'general'
      });
    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error('Contact form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Container>
        <ContentWrapper>
          <InfoSection
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <InfoHeader>
              <FiMessageSquare />
              <h2>Get in Touch</h2>
            </InfoHeader>
            <InfoText>
              Have questions about HospoHub? We're here to help! Fill out the form and our team will get back to you promptly.
            </InfoText>
            
            <ContactInfo>
              <InfoItem>
                <FiClock />
                <div>
                  <h3>Response Time</h3>
                  <p>We typically respond within 24 hours during business days.</p>
                </div>
              </InfoItem>
              
              <InfoItem>
                <FiMapPin />
                <div>
                  <h3>Location</h3>
                  <p>Stockholm, Sweden</p>
                </div>
              </InfoItem>
              
              <InfoItem>
                <FiMail />
                <div>
                  <h3>Support Hours</h3>
                  <p>Monday - Friday: 9:00 - 17:00 CET</p>
                </div>
              </InfoItem>
            </ContactInfo>

            <FAQSection>
              <h3>Common Questions</h3>
              <FAQList>
                <FAQItem>
                  <h4>How do I join the platform?</h4>
                  <p>Join our waitlist to be notified when we launch in your area.</p>
                </FAQItem>
                <FAQItem>
                  <h4>What are the fees?</h4>
                  <p>Contact us for a customized quote based on your business needs.</p>
                </FAQItem>
              </FAQList>
            </FAQSection>
          </InfoSection>

          <FormContainer
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {isSubmitted ? (
              <SuccessMessage
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <SuccessIcon>
                  <FiSend />
                </SuccessIcon>
                <h3>Message Sent!</h3>
                <p>We'll get back to you as soon as possible.</p>
              </SuccessMessage>
            ) : (
              <Form onSubmit={handleSubmit}>
                <Title>Contact Form</Title>
                <Description>
                  Fill out the form below and we'll be in touch shortly.
                </Description>

                <InputGroup>
                  <Label>Inquiry Type</Label>
                  <Select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="general">General Inquiry</option>
                    <option value="pricing">Pricing Request</option>
                    <option value="support">Support</option>
                  </Select>
                </InputGroup>

                <InputGroup>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </InputGroup>

                <InputGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email address"
                    required
                  />
                </InputGroup>

                <InputGroup>
                  <Label>Phone</Label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                    required
                  />
                </InputGroup>

                <InputGroup>
                  <Label>Company (Optional)</Label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                  />
                </InputGroup>

                <InputGroup>
                  <Label>Subject</Label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject of your message"
                    required
                  />
                </InputGroup>

                <InputGroup>
                  <Label>Message</Label>
                  <TextArea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                    required
                  />
                </InputGroup>

                <SubmitButton type="submit">
                  Send Message
                  <FiSend />
                </SubmitButton>
              </Form>
            )}
          </FormContainer>
        </ContentWrapper>
      </Container>
    </Layout>
  );
};

export default ContactPage;

const Container = styled.div`
  min-height: 100vh;
  padding: 120px 2rem 4rem;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.05) 100%);

  @media (max-width: 768px) {
    padding: 100px 1.5rem 3rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const InfoSection = styled(motion.div)`
  padding: 2rem;
  background: white;
  border-radius: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  svg {
    width: 32px;
    height: 32px;
    color: #000;
  }

  h2 {
    font-size: 2rem;
    background: linear-gradient(135deg, #000000 0%, #333333 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const InfoText = styled.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ContactInfo = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
    transform: translateX(5px);
  }

  svg {
    width: 24px;
    height: 24px;
    color: #000;
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
    color: #000;
  }

  p {
    color: #666;
    font-size: 0.9rem;
  }
`;

const FAQSection = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #000;
  }
`;

const FAQList = styled.div`
  display: grid;
  gap: 1rem;
`;

const FAQItem = styled.div`
  padding: 1rem;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
    transform: translateX(5px);
  }

  h4 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #000;
  }

  p {
    color: #666;
    font-size: 0.9rem;
  }
`;

const FormContainer = styled(motion.div)`
  background: white;
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 2.5rem);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 2rem;
  font-size: clamp(1rem, 2vw, 1.1rem);
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const InputGroup = styled.div``;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #000;
  font-size: 0.9rem;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    background: rgba(0, 0, 0, 0.08);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border: none;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
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
  border: none;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    background: rgba(0, 0, 0, 0.08);
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #000;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    width: 18px;
    height: 18px;
  }

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
    color: white;
  }
`; 