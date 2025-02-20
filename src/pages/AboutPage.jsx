import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiTarget, FiHeart, FiTrendingUp } from 'react-icons/fi';
import Layout from '../components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <Container>
        <Header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>About HospoHub</h1>
          <p>Transforming the Future of Hospitality Staffing</p>
        </Header>

        <Content>
          <Section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>Our Vision</h2>
            <p>
              HospoHub is revolutionizing the hospitality industry by creating a seamless connection between talented professionals and outstanding venues. We believe in building a more efficient, transparent, and dynamic hospitality sector where opportunities are accessible to all.
            </p>
          </Section>

          <ValueGrid>
            <ValueCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <IconWrapper>
                <FiTarget />
              </IconWrapper>
              <h3>Innovation</h3>
              <p>Leveraging cutting-edge technology to transform traditional staffing processes into efficient, modern solutions.</p>
            </ValueCard>

            <ValueCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <IconWrapper>
                <FiHeart />
              </IconWrapper>
              <h3>Community</h3>
              <p>Building a thriving ecosystem where hospitality professionals and businesses can grow together.</p>
            </ValueCard>

            <ValueCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <IconWrapper>
                <FiTrendingUp />
              </IconWrapper>
              <h3>Growth</h3>
              <p>Empowering businesses and professionals to reach their full potential through meaningful connections.</p>
            </ValueCard>
          </ValueGrid>

          <Section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2>Our Commitment</h2>
            <p>
              We are dedicated to maintaining the highest standards of service, security, and support. Our platform is built on the principles of transparency, efficiency, and mutual growth, ensuring that both businesses and professionals can thrive in the dynamic hospitality industry.
            </p>
          </Section>

          <Section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2>Platform Features</h2>
            <FeatureList>
              <li>Smart matching algorithm for perfect staff-venue fit</li>
              <li>Real-time availability management</li>
              <li>Secure communication channels</li>
              <li>Verified profiles and reviews</li>
              <li>Automated scheduling and time tracking</li>
              <li>Comprehensive reporting and analytics</li>
            </FeatureList>
          </Section>
        </Content>
      </Container>
    </Layout>
  );
};

export default AboutPage;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 2rem 4rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 100px 1.5rem 3rem;
  }
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
  padding-top: 2rem;

  h1 {
    font-size: clamp(2.5rem, 5vw, 3rem);
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #000000 0%, #333333 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: clamp(1.1rem, 2vw, 1.2rem);
    color: #666;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  flex: 1;
  margin-bottom: 4rem;
`;

const Section = styled(motion.div)`
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #000;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #444;
  }
`;

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.5rem;
    margin: 1rem 0;
    color: #000;
  }

  p {
    color: #666;
    line-height: 1.5;
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background: #000;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
    color: white;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;

  li {
    position: relative;
    padding-left: 2rem;
    font-size: 1.1rem;
    color: #444;
    line-height: 1.4;

    &:before {
      content: "→";
      position: absolute;
      left: 0;
      color: #000;
      font-weight: bold;
    }
  }
`; 