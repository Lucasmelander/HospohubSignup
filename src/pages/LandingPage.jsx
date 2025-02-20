import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCheck, FiClock, FiDollarSign, 
  FiShield, FiTrendingUp, FiAward, FiMessageCircle,
  FiSmile, FiHeart, FiBookOpen, FiTarget, FiChevronDown,
  FiArrowRight
} from 'react-icons/fi';
import Layout from '../components/Layout';

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  color: #000;
  scroll-behavior: smooth;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 2rem;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.05) 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const AnimatedCircle = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 40vw;
  border-radius: 50%;
  background: transparent;
  border: 1px solid #000;
  opacity: 0.1;
  pointer-events: none;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding-top: 60px;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.div)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.1) 100%);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  font-size: 1rem;
  color: #000000;
  margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  margin-bottom: 2rem;
  color: #333;
  line-height: 1.6;
`;

const SignUpButton = styled(motion.button)`
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  color: #fff;
  padding: 1rem 3rem;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

const Features = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0;
  flex-wrap: wrap;
`;

const Feature = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #000000;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);

  svg {
    color: #333333;
  }
`;

const WaveDivider = styled.div`
  position: relative;
  height: 100px;
  background: ${props => props.background || '#fff'};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100px;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z' fill='${props => {
      // Convert the fill color to a URL-encoded version
      const fillColor = props.variant === 'blue' 
        ? 'rgba(0, 168, 204, 0.1)' 
        : props.variant === 'teal' 
        ? 'rgba(0, 206, 209, 0.1)'
        : props.variant === 'navy'
        ? 'rgba(0, 24, 48, 0.1)'
        : props.fill || 'rgba(0, 168, 204, 0.05)';
      return encodeURIComponent(fillColor);
    }}'/%3E%3C/svg%3E");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transform: ${props => props.flip ? 'rotate(180deg)' : 'none'};
  }
`;

const SectionWrapper = styled.div`
  position: relative;
  background: ${props => props.background || '#fff'};
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.02) 100%);
  pointer-events: none;
`;

const InfoSection = styled.section`
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
  background: ${props => props.background || '#fff'};
`;

const InfoGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const IconWrapper = styled(motion.div)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    font-size: 2rem;
    color: #000000;
  }
`;

const GlassCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(0, 0, 0, 0.85);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    color: rgba(255, 255, 255, 0.9);

    svg {
      color: #ffffff;
    }
  }
`;

const FAQSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%);
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
`;

const FAQQuestion = styled.button`
  width: 100%;
  text-align: left;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  color: #000000;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  svg {
    color: #333333;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 1);
    border-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  &[aria-expanded="true"] svg {
    transform: rotate(180deg);
  }
`;

const FAQAnswer = styled(motion.div)`
  padding: 1.5rem;
  color: #333333;
  line-height: 1.6;
  background: rgba(255, 255, 255, 0.9);
  margin-top: 2px;
  border-radius: 0 0 8px 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 4rem auto;
  text-align: center;
`;

const StatItem = styled(motion.div)`
  .number {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
  }
  
  .label {
    color: #4c4f6d;
    font-size: 1.1rem;
  }
`;

const TrustBadges = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 3rem 0;
  flex-wrap: wrap;

  .badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #4c4f6d;
    font-weight: 500;
    
    svg {
      color: #6366f1;
      font-size: 1.5rem;
    }
  }
`;

const InsightCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.06) 100%);
  border-radius: 24px;
  padding: 2.5rem;
  text-align: left;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #000000 0%, #333333 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .stat {
    font-size: 2.5rem;
    font-weight: 700;
    color: #000000;
    margin-bottom: 0.5rem;
  }

  .description {
    font-size: 1.1rem;
    color: #333333;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    color: #333333;
    font-size: 1.1rem;

    svg {
      color: #000000;
      flex-shrink: 0;
    }
  }
`;

// Add new styled components for transitions
const SectionTransition = styled(motion.div)`
  position: relative;
  height: 120px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.background || '#fff'};

  .line {
    position: absolute;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(0, 0, 0, 0.1) 50%,
      transparent 100%
    );
  }

  .icon-container {
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    z-index: 1;
    border: 1px solid rgba(0, 0, 0, 0.1);
    
    svg {
      font-size: 1.5rem;
      color: #000;
    }
  }
`;

const FloatingObject = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '100px'};
  height: ${props => props.size || '100px'};
  background: ${props => {
    if (props.variant === 'blue') return 'linear-gradient(135deg, rgba(0, 168, 204, 0.15), rgba(0, 24, 48, 0.25))';
    if (props.variant === 'teal') return 'linear-gradient(135deg, rgba(0, 206, 209, 0.15), rgba(0, 128, 128, 0.25))';
    if (props.variant === 'navy') return 'linear-gradient(135deg, rgba(0, 24, 48, 0.15), rgba(0, 48, 72, 0.25))';
    return 'linear-gradient(135deg, rgba(0, 168, 204, 0.1), rgba(0, 24, 48, 0.2))';
  }};
  border: 1px solid ${props => {
    if (props.variant === 'blue') return 'rgba(0, 168, 204, 0.2)';
    if (props.variant === 'teal') return 'rgba(0, 206, 209, 0.2)';
    if (props.variant === 'navy') return 'rgba(0, 24, 48, 0.2)';
    return 'rgba(0, 168, 204, 0.15)';
  }};
  border-radius: ${props => props.shape === 'circle' ? '50%' : props.shape === 'blob' ? '30% 70% 70% 30% / 30% 30% 70% 70%' : '10px'};
  pointer-events: none;
  z-index: 1;
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px rgba(0, 24, 48, 0.1);
`;

const PricingSection = styled.section`
  padding: 6rem 2rem;
  background: #fff;
`;

const PricingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PricingCard = styled.div`
  background: ${props => props.$featured ? '#000' : '#fff'};
  color: ${props => props.$featured ? '#fff' : '#000'};
  border: 2px solid #000;
  border-radius: 24px;
  padding: 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  ${props => props.$featured && `
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  `}

  &:hover {
    transform: ${props => props.$featured ? 'scale(1.08)' : 'scale(1.03)'};
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  .price {
    font-size: 3rem;
    font-weight: 700;
    margin: 1.5rem 0;
    
    .currency {
      font-size: 1.5rem;
      vertical-align: super;
    }
    
    .period {
      font-size: 1.2rem;
      color: ${props => props.$featured ? 'rgba(255, 255, 255, 0.8)' : '#666'};
    }
  }

  .description {
    font-size: 1.1rem;
    color: ${props => props.$featured ? '#fff' : '#666'};
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 2rem 0;
    text-align: left;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    color: ${props => props.$featured ? '#fff' : '#333'};
    font-size: 1.1rem;

    svg {
      color: ${props => props.$featured ? '#fff' : '#000'};
      flex-shrink: 0;
    }
  }
`;

const PricingButton = styled.button`
  background: ${props => props.$featured ? '#fff' : '#000'};
  color: ${props => props.$featured ? '#000' : '#fff'};
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const LandingPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleJoinWaitlist = () => {
    setIsModalOpen(true);
  };

  const faqs = [
    {
      question: "When is the app launching?",
      answer: "We're launching soon! Join our waitlist to be among the first to access the app and receive exclusive early-bird benefits."
    },
    {
      question: "How does the gig booking process work?",
      answer: "As a hospitality business, you can post short-term gigs through the app, specifying your requirements and timing. Available staff can instantly accept these gigs, and you can review their profiles and ratings before confirmation."
    },
    {
      question: "What types of gigs can I post?",
      answer: "You can post various hospitality roles including servers, bartenders, kitchen staff, and event staff. Gigs can range from a few hours to several days, perfect for events, peak seasons, or last-minute coverage."
    },
    {
      question: "How does the staff verification process work?",
      answer: "We conduct thorough background checks, verify work history, and validate qualifications for all staff members. Each professional goes through a multi-step verification process before being able to accept gigs."
    },
    {
      question: "What happens if a staff member doesn't show up?",
      answer: "Our app includes a reliable backup system. In the rare event of a no-show, you'll receive instant notifications and we'll immediately connect you with available backup staff in your area."
    },
    {
      question: "How are payments handled?",
      answer: "All payments are processed securely through the app. Funds are held in escrow and automatically released to staff after gig completion and your approval. You can set your payment rates and view all transactions in real-time."
    }
  ];

  return (
    <Layout 
      isModalOpen={isModalOpen} 
      onModalClose={() => setIsModalOpen(false)}
      onModalOpen={() => setIsModalOpen(true)}
    >
      <PageContainer>
        <HeroSection>
          <AnimatedCircle
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1 }}
            style={{ top: '10%', left: '10%' }}
          />
          <AnimatedCircle
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ bottom: '10%', right: '10%' }}
          />
          
          <HeroContent>
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              🚀 App Launching Soon
            </Subtitle>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Streamline Your Hospitality Staffing
            </Title>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Whether you&apos;re looking for short-term staff or flexible hospitality work, HospoHub connects you instantly.
            </Description>
            <SignUpButton
              onClick={handleJoinWaitlist}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Waitlist <FiArrowRight />
            </SignUpButton>
            <Features
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {[
                'Instant Gig Booking',
                'Verified Staff',
                'Flexible Hours'
              ].map((feature, index) => (
                <Feature
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <FiCheck /> {feature}
                </Feature>
              ))}
            </Features>
            <StatsSection>
              <StatItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="number">2,500+</div>
                <div className="label">Pre-registered Workers</div>
              </StatItem>
              <StatItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="number">500+</div>
                <div className="label">Partner Venues</div>
              </StatItem>
              <StatItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="number">15+</div>
                <div className="label">Major Cities</div>
              </StatItem>
            </StatsSection>
            <TrustBadges>
              <motion.div 
                className="badge"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <FiShield /> Verified Staff
              </motion.div>
              <motion.div 
                className="badge"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <FiCheck /> Background Checked
              </motion.div>
              <motion.div 
                className="badge"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <FiDollarSign /> Secure Payments
              </motion.div>
            </TrustBadges>
            <InfoGrid style={{ marginTop: '4rem' }}>
              <InsightCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3>Industry Challenges</h3>
                <div className="stat">47%</div>
                <div className="description">of hospitality businesses report staffing as their biggest challenge</div>
                <ul>
                  <li><FiCheck /> High staff turnover rates increasing costs</li>
                  <li><FiCheck /> Difficulty finding qualified last-minute staff</li>
                  <li><FiCheck /> Time-consuming recruitment processes</li>
                  <li><FiCheck /> Seasonal staffing fluctuations</li>
                </ul>
              </InsightCard>

              <InsightCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3>The HospoHub Solution</h3>
                <div className="stat">24/7</div>
                <div className="description">instant access to verified hospitality professionals</div>
                <ul>
                  <li><FiCheck /> Smart matching algorithm for perfect fit</li>
                  <li><FiCheck /> Automated background checks and verification</li>
                  <li><FiCheck /> Real-time availability updates</li>
                  <li><FiCheck /> Integrated payment and rating system</li>
                </ul>
              </InsightCard>
            </InfoGrid>
          </HeroContent>
        </HeroSection>

        <SectionTransition
          as={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="line" />
          <motion.div 
            className="icon-container"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FiArrowRight />
          </motion.div>
        </SectionTransition>

        <FloatingObject
          as={motion.div}
          size="80px"
          shape="circle"
          variant="teal"
          initial={{ x: -100, y: 50, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          style={{ left: '20%' }}
        />

        <FloatingObject
          as={motion.div}
          size="120px"
          shape="blob"
          variant="blue"
          initial={{ x: 100, y: -50, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          style={{ right: '20%' }}
        />

        <SectionWrapper id="platform-features" background="#fff">
          <InfoSection>
            <SectionTitle
              as={motion.h2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FiTarget /> Platform Features
            </SectionTitle>
            <InfoGrid>
              <GlassCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <IconWrapper>
                  <FiShield />
                </IconWrapper>
                <h3>Advanced Security</h3>
                <ul>
                  <li><FiCheck /> Identity verification</li>
                  <li><FiCheck /> Secure payment processing</li>
                  <li><FiCheck /> Data encryption</li>
                  <li><FiCheck /> Privacy protection</li>
                </ul>
              </GlassCard>

              <GlassCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <IconWrapper>
                  <FiClock />
                </IconWrapper>
                <h3>Real-Time Matching</h3>
                <ul>
                  <li><FiCheck /> Instant notifications</li>
                  <li><FiCheck /> Live availability updates</li>
                  <li><FiCheck /> Smart scheduling</li>
                  <li><FiCheck /> Quick response system</li>
                </ul>
              </GlassCard>

              <GlassCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <IconWrapper>
                  <FiMessageCircle />
                </IconWrapper>
                <h3>Communication Tools</h3>
                <ul>
                  <li><FiCheck /> In-app messaging</li>
                  <li><FiCheck /> Document sharing</li>
                  <li><FiCheck /> Team collaboration</li>
                  <li><FiCheck /> Feedback system</li>
                </ul>
              </GlassCard>
            </InfoGrid>
          </InfoSection>
        </SectionWrapper>

        <SectionWrapper id="business-benefits" background="rgba(0,0,0,0.02)">
          <InfoSection background="rgba(0,0,0,0.02)">
            <SectionTitle
              as={motion.h2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FiTrendingUp /> Business Benefits
            </SectionTitle>
            <InfoGrid>
              <GlassCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconWrapper
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <FiDollarSign />
                </IconWrapper>
                <h3><FiDollarSign /> Cost Savings</h3>
                <p>Reduce staffing costs significantly:</p>
                <ul>
                  <li><FiCheck /> Save up to 30% on recruitment fees</li>
                  <li><FiCheck /> No long-term commitments</li>
                  <li><FiCheck /> Pay only for hours worked</li>
                  <li><FiCheck /> Eliminate overtime costs</li>
                </ul>
              </GlassCard>

              <GlassCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconWrapper
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                >
                  <FiClock />
                </IconWrapper>
                <h3><FiClock /> Time & Efficiency</h3>
                <p>Streamline your operations:</p>
                <ul>
                  <li><FiCheck /> 80% faster staff sourcing</li>
                  <li><FiCheck /> Instant staff replacement</li>
                  <li><FiCheck /> Automated timesheet tracking</li>
                  <li><FiCheck /> Reduced administrative work</li>
                </ul>
              </GlassCard>

              <GlassCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconWrapper
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                >
                  <FiAward />
                </IconWrapper>
                <h3><FiAward /> ROI Benefits</h3>
                <p>Maximize your investment:</p>
                <ul>
                  <li><FiCheck /> Higher staff retention rates</li>
                  <li><FiCheck /> Reduced training costs</li>
                  <li><FiCheck /> Better staff performance</li>
                  <li><FiCheck /> Increased customer satisfaction</li>
                </ul>
              </GlassCard>
            </InfoGrid>
          </InfoSection>
          <WaveDivider 
            background="rgba(0,0,0,0.02)" 
            variant="blue"
            fill="#fff"
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />
        </SectionWrapper>

        <SectionWrapper id="how-it-works" background="#fff">
          <GradientOverlay />
          <InfoSection>
            <SectionTitle
              as={motion.h2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FiBookOpen /> How HospoHub Works
            </SectionTitle>
            <InfoGrid>
              <GlassCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconWrapper
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <FiTarget />
                </IconWrapper>
                <h3><FiTarget /> For Businesses</h3>
                <p>Simple 3-step process:</p>
                <ul>
                  <li><FiCheck /> Post your gig requirements</li>
                  <li><FiCheck /> Review matched candidates</li>
                  <li><FiCheck /> Confirm and pay securely</li>
                  <li><FiCheck /> Rate after completion</li>
                </ul>
              </GlassCard>

              <GlassCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconWrapper
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                >
                  <FiMessageCircle />
                </IconWrapper>
                <h3><FiMessageCircle /> Platform Features</h3>
                <p>Built for hospitality:</p>
                <ul>
                  <li><FiCheck /> Real-time availability</li>
                  <li><FiCheck /> Smart matching system</li>
                  <li><FiCheck /> Secure messaging</li>
                  <li><FiCheck /> Digital contracts</li>
                </ul>
              </GlassCard>

              <GlassCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconWrapper
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                >
                  <FiSmile />
                </IconWrapper>
                <h3><FiSmile /> For Workers</h3>
                <p>Easy to get started:</p>
                <ul>
                  <li><FiCheck /> Create your profile</li>
                  <li><FiCheck /> Set your availability</li>
                  <li><FiCheck /> Accept gigs instantly</li>
                  <li><FiCheck /> Get paid quickly</li>
                </ul>
              </GlassCard>
            </InfoGrid>
          </InfoSection>
          <WaveDivider 
            background="#fff" 
            variant="blue"
            fill="rgba(0,0,0,0.02)"
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />
        </SectionWrapper>

        <SectionWrapper background="rgba(0,0,0,0.02)">
          <InfoSection background="rgba(0,0,0,0.02)">
            <SectionTitle
              as={motion.h2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FiSmile /> For Workers
            </SectionTitle>
            <InfoGrid>
              <GlassCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconWrapper
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <FiSmile />
                </IconWrapper>
                <h3><FiSmile /> Flexible Work</h3>
                <p>Work on your terms:</p>
                <ul>
                  <li><FiCheck /> Choose your schedule</li>
                  <li><FiCheck /> Pick your venues</li>
                  <li><FiCheck /> Set availability</li>
                  <li><FiCheck /> Work when you want</li>
                </ul>
              </GlassCard>

              <GlassCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconWrapper
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                >
                  <FiDollarSign />
                </IconWrapper>
                <h3><FiDollarSign /> Quick Payments</h3>
                <p>Get paid reliably:</p>
                <ul>
                  <li><FiCheck /> Secure transactions</li>
                  <li><FiCheck /> Fast payouts</li>
                  <li><FiCheck /> Clear rates</li>
                  <li><FiCheck /> Payment protection</li>
                </ul>
              </GlassCard>

              <GlassCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconWrapper
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                >
                  <FiAward />
                </IconWrapper>
                <h3><FiAward /> Career Growth</h3>
                <p>Build your profile:</p>
                <ul>
                  <li><FiCheck /> Performance ratings</li>
                  <li><FiCheck /> Work history</li>
                  <li><FiCheck /> Skill validation</li>
                  <li><FiCheck /> References</li>
                </ul>
              </GlassCard>
            </InfoGrid>
          </InfoSection>
          <WaveDivider 
            background="rgba(0,0,0,0.02)" 
            variant="blue"
            fill="#fff"
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />
        </SectionWrapper>

        <SectionWrapper background="#fff">
          <InfoSection>
            <SectionTitle
              as={motion.h2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FiHeart /> Worker Benefits
            </SectionTitle>
            <InfoGrid>
              <GlassCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconWrapper
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <FiDollarSign />
                </IconWrapper>
                <h3><FiDollarSign /> Earning Potential</h3>
                <p>Maximize your income:</p>
                <ul>
                  <li><FiCheck /> Competitive hourly rates</li>
                  <li><FiCheck /> Choose high-paying gigs</li>
                  <li><FiCheck /> Bonus opportunities</li>
                  <li><FiCheck /> Multiple venue options</li>
                </ul>
              </GlassCard>

              <GlassCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconWrapper
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                >
                  <FiSmile />
                </IconWrapper>
                <h3><FiSmile /> Work-Life Balance</h3>
                <p>Control your schedule:</p>
                <ul>
                  <li><FiCheck /> Work when you want</li>
                  <li><FiCheck /> No minimum hours</li>
                  <li><FiCheck /> Choose your locations</li>
                  <li><FiCheck /> Flexible availability</li>
                </ul>
              </GlassCard>

              <GlassCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconWrapper
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                >
                  <FiAward />
                </IconWrapper>
                <h3><FiAward /> Career Development</h3>
                <p>Grow professionally:</p>
                <ul>
                  <li><FiCheck /> Diverse experience</li>
                  <li><FiCheck /> Skill development</li>
                  <li><FiCheck /> Network building</li>
                  <li><FiCheck /> Performance rewards</li>
                </ul>
              </GlassCard>
            </InfoGrid>
          </InfoSection>
          <WaveDivider 
            background="#fff" 
            variant="blue"
            fill="#f8f8f8"
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />
        </SectionWrapper>

        <SectionWrapper background="#fff">
          <InfoSection>
            <SectionTitle
              as={motion.h2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FiTrendingUp /> Market Insights
            </SectionTitle>
            <InfoGrid>
              <InsightCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3>Industry Growth</h3>
                <div className="stat">$84B</div>
                <div className="description">projected market size for hospitality staffing by 2025</div>
                <ul>
                  <li><FiCheck /> Rising demand for flexible staffing solutions</li>
                  <li><FiCheck /> Increasing adoption of digital platforms</li>
                  <li><FiCheck /> Growing gig economy in hospitality sector</li>
                  <li><FiCheck /> Shift towards on-demand workforce</li>
                </ul>
              </InsightCard>

              <InsightCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3>Cost Analysis</h3>
                <div className="stat">30%</div>
                <div className="description">average reduction in staffing costs with on-demand solutions</div>
                <ul>
                  <li><FiCheck /> Lower recruitment and advertising costs</li>
                  <li><FiCheck /> Reduced overtime expenses</li>
                  <li><FiCheck /> Minimized training investments</li>
                  <li><FiCheck /> Optimized labor cost management</li>
                </ul>
              </InsightCard>

              <InsightCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3>Future of Work</h3>
                <div className="stat">68%</div>
                <div className="description">of workers prefer flexible scheduling options</div>
                <ul>
                  <li><FiCheck /> Increased work-life balance</li>
                  <li><FiCheck /> Greater earning potential</li>
                  <li><FiCheck /> Diverse experience opportunities</li>
                  <li><FiCheck /> Career growth flexibility</li>
                </ul>
              </InsightCard>
            </InfoGrid>
          </InfoSection>
          <WaveDivider 
            background="#fff" 
            variant="blue"
            fill="rgba(0,0,0,0.02)"
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />
        </SectionWrapper>

        <SectionWrapper background="#fff">
          <PricingSection>
            <SectionTitle
              as={motion.h2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FiDollarSign /> Simple Pricing
            </SectionTitle>
            <PricingContainer>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <PricingCard>
                  <h3>For Workers</h3>
                  <div className="price">
                    Free
                    <span className="period"> forever</span>
                  </div>
                  <div className="description">
                    Find flexible hospitality work that fits your schedule
                  </div>
                  <ul>
                    <li><FiCheck /> Create professional profile</li>
                    <li><FiCheck /> Access to all job listings</li>
                    <li><FiCheck /> Real-time notifications</li>
                    <li><FiCheck /> Secure payments</li>
                    <li><FiCheck /> Build work history</li>
                    <li><FiCheck /> Rate and review venues</li>
                  </ul>
                  <PricingButton onClick={handleJoinWaitlist}>
                    Join Now
                  </PricingButton>
                </PricingCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <PricingCard $featured>
                  <h3>For Businesses</h3>
                  <div className="price">
                    <span className="currency">SEK</span> 2,000
                    <span className="period">/month</span>
                  </div>
                  <div className="description">
                    Access qualified staff when you need them most
                  </div>
                  <ul>
                    <li><FiCheck /> Unlimited job postings</li>
                    <li><FiCheck /> Verified worker profiles</li>
                    <li><FiCheck /> Smart matching algorithm</li>
                    <li><FiCheck /> Real-time availability</li>
                    <li><FiCheck /> Secure payment handling</li>
                    <li><FiCheck /> Analytics and reporting</li>
                  </ul>
                  <PricingButton $featured onClick={handleJoinWaitlist}>
                    Get Started
                  </PricingButton>
                </PricingCard>
              </motion.div>
            </PricingContainer>
          </PricingSection>
          <WaveDivider 
            background="#fff" 
            variant="blue"
            fill="#f8f8f8"
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />
        </SectionWrapper>

        <FAQSection id="faq">
          <FAQContainer>
            <SectionTitle
              as={motion.h2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FiMessageCircle /> Frequently Asked Questions
            </SectionTitle>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FAQQuestion
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  aria-expanded={activeAccordion === index}
                >
                  {faq.question}
                  <FiChevronDown />
                </FAQQuestion>
                <AnimatePresence>
                  {activeAccordion === index && (
                    <FAQAnswer
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </FAQAnswer>
                  )}
                </AnimatePresence>
              </FAQItem>
            ))}
          </FAQContainer>
        </FAQSection>
      </PageContainer>
    </Layout>
  );
};

export default LandingPage;
