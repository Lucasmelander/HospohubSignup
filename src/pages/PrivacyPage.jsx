import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiShield } from 'react-icons/fi';
import Layout from '../components/Layout';

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: #fff;
`;

const HeroSection = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.05) 100%);
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  max-width: 800px;
  margin: 0 auto 3rem;
  color: #333;
  line-height: 1.6;
`;

const ContentSection = styled.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.div`
  margin-bottom: 3rem;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #000;
  }

  h3 {
    font-size: 1.4rem;
    margin: 1.5rem 0 1rem;
    color: #000;
  }

  p {
    color: #333;
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  ul {
    list-style: disc;
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
    
    li {
      color: #333;
      line-height: 1.8;
      margin-bottom: 0.5rem;
    }
  }
`;

const LastUpdated = styled.p`
  text-align: center;
  color: #666;
  font-size: 0.9rem;
  margin-top: 4rem;
`;

const PrivacyPage = () => {
  return (
    <Layout>
      <PageContainer>
        <HeroSection>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FiShield /> Privacy Policy
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We are committed to protecting your privacy and ensuring the security of your personal information.
          </Description>
        </HeroSection>

        <ContentSection>
          <Section>
            <h2>Introduction</h2>
            <p>
              This Privacy Policy explains how HospoHub ("we", "our", or "us") collects, uses, and protects your personal information when you use our platform. By using HospoHub, you agree to the collection and use of information in accordance with this policy.
            </p>
          </Section>

          <Section>
            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <ul>
              <li>Name and contact information</li>
              <li>Professional experience and qualifications</li>
              <li>Payment and banking details</li>
              <li>Profile information and preferences</li>
              <li>Communication history</li>
            </ul>

            <h3>Usage Information</h3>
            <ul>
              <li>Device and browser information</li>
              <li>IP address and location data</li>
              <li>Log data and activity patterns</li>
              <li>Cookies and similar technologies</li>
            </ul>
          </Section>

          <Section>
            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Match workers with businesses</li>
              <li>Process payments and transactions</li>
              <li>Communicate with you about our services</li>
              <li>Ensure platform security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Section>

          <Section>
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul>
              <li>Encryption of sensitive data</li>
              <li>Regular security assessments</li>
              <li>Secure data storage systems</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
            </ul>
          </Section>

          <Section>
            <h2>Data Sharing</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Platform users (workers/businesses) as necessary for service delivery</li>
              <li>Payment processors and financial institutions</li>
              <li>Service providers and partners</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </Section>

          <Section>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Withdraw consent</li>
              <li>Data portability</li>
            </ul>
          </Section>

          <Section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us through our website's contact form. Our data protection team will review your inquiry and respond accordingly.
            </p>
            <p>
              For urgent matters related to data protection or to exercise your rights under GDPR, please use the dedicated form on our contact page and mark it as "Data Protection Request".
            </p>
          </Section>

          <LastUpdated>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </LastUpdated>
        </ContentSection>
      </PageContainer>
    </Layout>
  );
};

export default PrivacyPage; 