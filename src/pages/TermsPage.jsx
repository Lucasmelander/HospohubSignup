import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiFileText } from 'react-icons/fi';
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

const TermsPage = () => {
  return (
    <Layout>
      <PageContainer>
        <HeroSection>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FiFileText /> Terms of Service
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Please read these terms and conditions carefully before using the HospoHub platform.
          </Description>
        </HeroSection>

        <ContentSection>
          <Section>
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using HospoHub, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing HospoHub.
            </p>
          </Section>

          <Section>
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily access and use HospoHub for personal or business purposes, subject to the following conditions:
            </p>
            <ul>
              <li>You must not modify or copy the materials</li>
              <li>You must not use the materials for any commercial purpose without our consent</li>
              <li>You must not attempt to decompile or reverse engineer any software</li>
              <li>You must not remove any copyright or proprietary notations</li>
            </ul>
          </Section>

          <Section>
            <h2>3. User Accounts</h2>
            <h3>Account Creation</h3>
            <ul>
              <li>You must provide accurate and complete information</li>
              <li>You are responsible for maintaining account security</li>
              <li>You must not share account credentials</li>
              <li>You must notify us of any security breaches</li>
            </ul>

            <h3>Account Termination</h3>
            <p>
              We reserve the right to terminate or suspend accounts for violations of these terms or any other reason at our sole discretion.
            </p>
          </Section>

          <Section>
            <h2>4. Platform Rules</h2>
            <h3>For Businesses</h3>
            <ul>
              <li>Must provide accurate job descriptions</li>
              <li>Must pay workers as agreed</li>
              <li>Must maintain a safe work environment</li>
              <li>Must comply with labor laws</li>
            </ul>

            <h3>For Workers</h3>
            <ul>
              <li>Must provide accurate qualifications</li>
              <li>Must complete accepted assignments</li>
              <li>Must maintain professional conduct</li>
              <li>Must report accurately worked hours</li>
            </ul>
          </Section>

          <Section>
            <h2>5. Payments and Fees</h2>
            <p>
              HospoHub pricing is available upon request. Contact us for a customized quote based on your business needs. Additional terms:
            </p>
            <ul>
              <li>All payments are processed securely through our platform</li>
              <li>Billing occurs on a monthly basis</li>
              <li>Refunds are handled on a case-by-case basis</li>
              <li>Late payments may result in service suspension</li>
            </ul>
          </Section>

          <Section>
            <h2>6. Liability</h2>
            <p>
              HospoHub is not liable for:
            </p>
            <ul>
              <li>Disputes between users</li>
              <li>Quality of work performed</li>
              <li>User-generated content</li>
              <li>Loss of data or profits</li>
              <li>System downtime or errors</li>
            </ul>
          </Section>

          <Section>
            <h2>7. Intellectual Property</h2>
            <p>
              All content and materials available on HospoHub are protected by intellectual property rights. Users may not:
            </p>
            <ul>
              <li>Copy or reproduce platform content</li>
              <li>Modify or create derivative works</li>
              <li>Distribute or transmit content</li>
              <li>Use content for commercial purposes</li>
            </ul>
          </Section>

          <Section>
            <h2>8. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of Sweden. Any disputes shall be subject to the exclusive jurisdiction of the courts of Sweden.
            </p>
          </Section>

          <Section>
            <h2>9. Contact Information</h2>
            <p>
              For any questions regarding these Terms of Service, please contact us through our website's contact form.
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

export default TermsPage; 