import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiChevronDown, FiCheck, FiArrowRight, FiGithub, FiTwitter, FiLinkedin, 
  FiMenu, FiX, FiClock, FiCalendar, FiDollarSign, FiStar, FiUsers, 
  FiShield, FiTrendingUp, FiAward, FiMessageCircle, FiPieChart,
  FiSettings, FiSmile, FiHeart, FiBookOpen, FiTarget, FiZap
} from 'react-icons/fi';
import SignupModal from '../components/SignupModal';

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  color: #000;
`;

const Navbar = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  z-index: 100;
  border-bottom: 1px solid #eee;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
    
    &.active {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.95);
      padding: 1rem;
      gap: 1rem;
      border-bottom: 1px solid #eee;
    }
  }
`;

const NavLink = styled.a`
  color: #000;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #666;
  }
`;

const MenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: #000;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 2rem;
  background: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const AnimatedCircle = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 40vw;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  pointer-events: none;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: #000;
`;

const Subtitle = styled(motion.div)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  margin-bottom: 2rem;
  color: #333;
  line-height: 1.6;
`;

const SignUpButton = styled(motion.button)`
  background: #000;
  color: #fff;
  padding: 1rem 3rem;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover {
    transform: scale(1.05);
    
    svg {
      transform: translateX(5px);
    }
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
  color: #333;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.03);

  svg {
    color: #000;
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
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z' fill='${props => encodeURIComponent(props.fill || '#ffffff')}'/%3E%3C/svg%3E");
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
  color: #000;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    font-size: 2rem;
  }
`;

const GlassCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    background: rgba(255, 255, 255, 0.8);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #000;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    color: #333;
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
    color: #333;

    svg {
      color: #000;
    }
  }
`;

const FAQSection = styled.section`
  padding: 4rem 2rem;
  background: #f8f8f8;
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #000;
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
`;

const FAQQuestion = styled.button`
  width: 100%;
  text-align: left;
  padding: 1.5rem;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  color: #000;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    background: #f0f0f0;
  }

  &[aria-expanded="true"] svg {
    transform: rotate(180deg);
  }
`;

const FAQAnswer = styled(motion.div)`
  padding: 1.5rem;
  color: #333;
  line-height: 1.6;
  background: #fff;
  margin-top: 2px;
  border-radius: 0 0 8px 8px;
  border: 1px solid #eee;
  border-top: none;
`;

const Footer = styled.footer`
  padding: 4rem 2rem 2rem;
  background: #fff;
  border-top: 1px solid #eee;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 4rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #000;
  font-size: 1.5rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterLink = styled.a`
  color: #666;
  transition: color 0.2s ease;

  &:hover {
    color: #000;
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: #666;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
`;

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <PageContainer>
      <Navbar
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NavContent>
          <Logo>HospoHub</Logo>
          <NavLinks className={isMenuOpen ? 'active' : ''}>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#" onClick={() => setIsModalOpen(true)}>Join Waitlist</NavLink>
          </NavLinks>
          <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </MenuButton>
        </NavContent>
      </Navbar>

      <HeroSection>
        <AnimatedCircle
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ top: '10%', left: '10%' }}
        />
        <AnimatedCircle
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
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
            Connecting Hospitality Staff & Businesses
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Whether you&apos;re looking for short-term staff or flexible hospitality work, HospoHub connects you instantly.
          </Description>
          <SignUpButton
            onClick={() => setIsModalOpen(true)}
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
        </HeroContent>
      </HeroSection>

      <SectionWrapper background="#fff">
        <InfoSection>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FiUsers /> For Businesses
          </SectionTitle>
          <InfoGrid>
            <GlassCard
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
                <FiZap />
              </IconWrapper>
              <h3><FiClock /> Quick Staffing</h3>
              <p>Find qualified staff instantly for:</p>
              <ul>
                <li><FiCheck /> Events and functions</li>
                <li><FiCheck /> Peak season coverage</li>
                <li><FiCheck /> Last-minute replacements</li>
                <li><FiCheck /> Temporary staff needs</li>
              </ul>
            </GlassCard>

            <GlassCard
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
                <FiShield />
              </IconWrapper>
              <h3><FiStar /> Quality Assurance</h3>
              <p>Hire with confidence:</p>
              <ul>
                <li><FiCheck /> Verified profiles</li>
                <li><FiCheck /> Background checks</li>
                <li><FiCheck /> Experience validation</li>
                <li><FiCheck /> Rating system</li>
              </ul>
            </GlassCard>

            <GlassCard
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
                <FiSettings />
              </IconWrapper>
              <h3><FiPieChart /> Easy Management</h3>
              <p>Streamlined hiring process:</p>
              <ul>
                <li><FiCheck /> Quick posting</li>
                <li><FiCheck /> Instant matching</li>
                <li><FiCheck /> Secure payments</li>
                <li><FiCheck /> Performance tracking</li>
              </ul>
            </GlassCard>
          </InfoGrid>
        </InfoSection>
        <WaveDivider 
          background="#fff" 
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FiTrendingUp /> Business Benefits
          </SectionTitle>
          <InfoGrid>
            <GlassCard
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
          fill="#fff"
          as={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
      </SectionWrapper>

      <SectionWrapper background="#fff">
        <GradientOverlay />
        <InfoSection>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FiBookOpen /> How HospoHub Works
          </SectionTitle>
          <InfoGrid>
            <GlassCard
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FiSmile /> For Workers
          </SectionTitle>
          <InfoGrid>
            <GlassCard
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FiHeart /> Worker Benefits
          </SectionTitle>
          <InfoGrid>
            <GlassCard
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

      <Footer>
        <FooterContent>
          <FooterSection>
            <Logo>HospoHub</Logo>
            <p>The upcoming on-demand staffing app revolutionizing short-term hospitality work. Find staff or gigs instantly, whenever you need them.</p>
            <SocialLinks>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <FiTwitter />
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
              </SocialLink>
            </SocialLinks>
          </FooterSection>
          <FooterSection>
            <h3>Product</h3>
            <FooterLinks>
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">FAQ</FooterLink>
            </FooterLinks>
          </FooterSection>
          <FooterSection>
            <h3>Company</h3>
            <FooterLinks>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
              <FooterLink href="#">Privacy</FooterLink>
              <FooterLink href="#">Terms</FooterLink>
            </FooterLinks>
          </FooterSection>
        </FooterContent>
        <Copyright>
          © {new Date().getFullYear()} HospoHub. All rights reserved.
        </Copyright>
      </Footer>

      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </PageContainer>
  );
};

export default LandingPage;
