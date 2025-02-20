import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiCheck, FiArrowRight, FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';
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

const FAQItem = styled(motion.div)`
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
      question: "How does the staff verification process work?",
      answer: "We conduct thorough background checks, verify work history, and validate qualifications for all staff members. Each professional goes through a multi-step verification process."
    },
    {
      question: "What happens if a staff member doesn't show up?",
      answer: "We have a robust reliability system in place. In the rare event of a no-show, we provide immediate replacement options and offer booking credits as compensation."
    },
    {
      question: "How are payments handled?",
      answer: "Payments are processed automatically through our secure platform. Funds are held in escrow and released to staff after shift completion and your approval."
    },
    {
      question: "Can I set specific requirements for staff?",
      answer: "Yes, you can set detailed requirements including experience level, certifications, language skills, and specific role requirements."
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
            <NavLink href="#" onClick={() => setIsModalOpen(true)}>Sign Up</NavLink>
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
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            The Future of Hospitality Staffing
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connect directly with verified hospitality professionals. 
            No agencies, no hassle, just reliable staff when you need them.
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
            {['Verified Staff', 'Instant Booking', 'Direct Payments'].map((feature, index) => (
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

      <FAQSection id="faq">
        <FAQContainer>
          <FAQTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </FAQTitle>
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
            <p>Revolutionizing hospitality staffing with instant connections and verified professionals.</p>
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
