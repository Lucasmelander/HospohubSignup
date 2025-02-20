import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FiClock, FiDollarSign, FiShield, FiMenu, FiX, FiChevronDown, FiCheck, FiTwitter, FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi';
import { RiRestaurant2Line } from 'react-icons/ri';
import { Parallax } from 'react-parallax';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import SignupModal from '../components/SignupModal';
import Lottie from 'lottie-react';
import restaurantAnimation from '../animations/restaurant-animation.json';

// Define styled components first, before the LandingPage component
const PageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background: #121212;
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #805AD5 0%, #6B46C1 100%);
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(128, 90, 213, 0.3);
  }
`;

const SecondaryButton = styled.a`
  background: transparent;
  color: #fff;
  padding: 1rem 2rem;
  border: 2px solid #fff;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const NavButton = styled(PrimaryButton)`
  margin: 0;
`;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: transparent;
  transition: all 0.3s ease;
  z-index: 1000;

  &.nav-scrolled {
    background: rgba(26, 26, 26, 0.9);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
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
      background: rgba(0, 0, 0, 0.9);
      padding: 1rem;
      gap: 1rem;
    }
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #ccc;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const GradientText = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #fff, #805AD5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(128, 90, 213, 0.2);
`;

const HeroDescription = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  color: #ccc;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 2rem;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 2rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top right, rgba(128, 90, 213, 0.1), transparent 60%),
                radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.1), transparent 60%);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  text-align: center;
  
  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: 1.5rem;
    background: linear-gradient(to right, #fff, #805AD5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: clamp(1.1rem, 2vw, 1.5rem);
    color: #ccc;
    margin-bottom: 2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

const TrustBadges = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Badge = styled.span`
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #ccc;
`;

const StatsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  background: #1a1a1a;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const StatCard = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #ccc;
  margin-top: 0.5rem;
`;

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  background: #121212;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 3rem;
  color: #fff;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(128, 90, 213, 0.3);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #ccc;
  line-height: 1.6;
`;

const HowItWorksSection = styled.section`
  padding: 6rem 2rem;
  background: #121212;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const StepCard = styled.div`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(128, 90, 213, 0.3);
  }
`;

const StepNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
`;

const StepDescription = styled.p`
  color: #ccc;
  line-height: 1.6;
`;

const PricingSection = styled.section`
  padding: 6rem 2rem;
  background: #1a1a1a;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PricingCard = styled.div`
  background: ${props => props.popular ? '#2a2a2a' : '#1a1a1a'};
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: ${props => props.popular ? '2px solid rgba(128, 90, 213, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)'};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(128, 90, 213, 0.3);
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
`;

const PricingTierName = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
`;

const PricingTierPrice = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
`;

const PricingTierDescription = styled.p`
  color: #ccc;
  margin-bottom: 2rem;
`;

const PricingFeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
`;

const PricingFeature = styled.li`
  color: #ccc;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #fff;
  }
`;

const PricingButton = styled(PrimaryButton)`
  width: 100%;
`;

const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
  background: #121212;

  .swiper {
    padding: 2rem;
  }
`;

const TestimonialCard = styled.div`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(128, 90, 213, 0.3);
  }
`;

const TestimonialImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  object-fit: cover;
`;

const TestimonialQuote = styled.p`
  color: #ccc;
  font-style: italic;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const TestimonialAuthor = styled.h4`
  color: #fff;
  margin-bottom: 0.5rem;
`;

const TestimonialRole = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const FAQSection = styled.section`
  padding: 6rem 2rem;
  background: #121212;
`;

const FAQGrid = styled.div`
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
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background: #2a2a2a;
    border-color: rgba(128, 90, 213, 0.3);
  }
`;

const FAQIcon = styled.span`
  svg {
    transition: transform 0.3s ease;
  }
`;

const FAQAnswer = styled(motion.div)`
  padding: 1.5rem;
  color: #ccc;
  line-height: 1.6;
  background: #1a1a1a;
  margin-top: 2px;
  border-radius: 0 0 8px 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-top: none;
`;

const CTASection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top right, rgba(128, 90, 213, 0.1), transparent 60%),
                radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.1), transparent 60%);
    pointer-events: none;
  }
`;

const CTAContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 1rem;
    color: #fff;
  }

  p {
    color: #ccc;
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }
`;

const Footer = styled.footer`
  background: #1a1a1a;
  padding: 4rem 2rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div``;

const FooterLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
`;

const FooterDescription = styled.p`
  color: #ccc;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #ccc;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

const FooterLinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
`;

const FooterLinkSection = styled.div``;

const FooterLinkTitle = styled.h4`
  color: #fff;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const FooterLink = styled.a`
  display: block;
  color: #ccc;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 4rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Copyright = styled.p`
  color: #666;
  text-align: center;
`;

const ParallaxSection = styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  background: rgba(0, 0, 0, 0.7);

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 1rem;
    color: #fff;
  }

  p {
    color: #ccc;
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }
`;

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [statsRef, statsInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.nav');
      if (nav) {
        if (window.scrollY > 100) {
          nav.classList.add('nav-scrolled');
        } else {
          nav.classList.remove('nav-scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <RiRestaurant2Line />,
      title: "Instant Staff Matching",
      description: "Find qualified hospitality staff within minutes, not days."
    },
    {
      icon: <FiClock />,
      title: "Flexible Scheduling",
      description: "Post shifts and get them filled 24/7, perfect for last-minute needs."
    },
    {
      icon: <FiDollarSign />,
      title: "Direct Payment System",
      description: "Automated payments after shift completion, no delays."
    },
    {
      icon: <FiShield />,
      title: "Verified Professionals",
      description: "All staff are pre-vetted with background checks."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Set up your business profile with your specific requirements and preferences."
    },
    {
      number: "02",
      title: "Post Your Shifts",
      description: "Easily post available shifts with detailed requirements and instant notifications."
    },
    {
      number: "03",
      title: "Match with Staff",
      description: "Our AI matches you with the most qualified professionals in your area."
    },
    {
      number: "04",
      title: "Complete Work & Pay",
      description: "Approve completed shifts and process payments automatically."
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 shift posts per month",
        "Basic staff matching",
        "Standard support",
        "Basic analytics"
      ]
    },
    {
      name: "Professional",
      price: "$49",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited shift posts",
        "Priority staff matching",
        "24/7 premium support",
        "Advanced analytics",
        "Custom notifications"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "All Professional features",
        "API access",
        "Dedicated account manager",
        "Custom integration",
        "Multi-location support"
      ]
    }
  ];

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

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Restaurant Owner",
      image: "/testimonial1.jpg",
      quote: "HospoHub has transformed how we handle staffing. We've reduced our temp staff costs by 30%."
    },
    {
      name: "Michael Rodriguez",
      role: "Hotel Manager",
      image: "/testimonial2.jpg",
      quote: "The quality of staff and the speed of hiring has been incredible. A game-changer for our business."
    },
    {
      name: "Emma Thompson",
      role: "Cafe Owner",
      image: "/testimonial3.jpg",
      quote: "Finally, a modern solution to hospitality staffing. The app is intuitive and the staff are reliable."
    }
  ];

  return (
    <PageContainer>
      <Navbar className="nav">
        <NavContent>
          <Logo>HospoHub</Logo>
          <NavLinks className={isMenuOpen ? 'active' : ''}>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavButton onClick={() => setIsModalOpen(true)}>
              Join Waitlist
            </NavButton>
          </NavLinks>
          <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </MenuButton>
        </NavContent>
      </Navbar>

      <HeroSection as={motion.div} style={{ opacity }}>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-text"
          >
            <GradientText>
              Revolutionize Your Hospitality Staffing
            </GradientText>
            <HeroDescription>
              Connect directly with verified hospitality professionals. No agencies, no hassle.
            </HeroDescription>
            <ButtonGroup>
              <PrimaryButton onClick={() => setIsModalOpen(true)}>
                Join Waitlist
              </PrimaryButton>
              <SecondaryButton href="#how-it-works">
                Learn More
              </SecondaryButton>
            </ButtonGroup>
            <TrustBadges>
              <Badge>
                <FiCheck /> Verified Staff
              </Badge>
              <Badge>
                <FiClock /> Instant Booking
              </Badge>
              <Badge>
                <FiShield /> 24/7 Support
              </Badge>
            </TrustBadges>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-animation"
          >
            <Lottie animationData={restaurantAnimation} />
          </motion.div>
        </HeroContent>
        <ScrollIndicator>
          <FiChevronDown />
        </ScrollIndicator>
      </HeroSection>

      <StatsSection ref={statsRef}>
        <StatCard>
          {statsInView && (
            <CountUp end={5000} prefix="+" duration={2.5} />
          )}
          <StatLabel>Verified Professionals</StatLabel>
        </StatCard>
        <StatCard>
          {statsInView && (
            <CountUp end={95} suffix="%" duration={2.5} />
          )}
          <StatLabel>Shift Fill Rate</StatLabel>
        </StatCard>
        <StatCard>
          {statsInView && (
            <CountUp end={30} prefix="-" suffix="%" duration={2.5} />
          )}
          <StatLabel>Staffing Costs</StatLabel>
        </StatCard>
      </StatsSection>

      <FeaturesSection id="features">
        <SectionTitle>Why Choose HospoHub?</SectionTitle>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesSection>

      <HowItWorksSection id="how-it-works">
        <SectionTitle>How It Works</SectionTitle>
        <StepsGrid>
          {steps.map((step, index) => (
            <StepCard
              key={index}
              as={motion.div}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StepNumber>{step.number}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepCard>
          ))}
        </StepsGrid>
      </HowItWorksSection>

      <Parallax
        blur={0}
        bgImage="/restaurant-bg.jpg"
        bgImageAlt="Restaurant background"
        strength={200}
      >
        <ParallaxSection>
          <h2>Transform Your Staffing Process</h2>
          <p>Join thousands of businesses that have modernized their staffing approach</p>
          <PrimaryButton onClick={() => setIsModalOpen(true)}>
            Get Started
          </PrimaryButton>
        </ParallaxSection>
      </Parallax>

      <PricingSection id="pricing">
        <SectionTitle>Simple, Transparent Pricing</SectionTitle>
        <PricingGrid>
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={index}
              popular={tier.popular}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {tier.popular && <PopularBadge>Most Popular</PopularBadge>}
              <PricingTierName>{tier.name}</PricingTierName>
              <PricingTierPrice>{tier.price}</PricingTierPrice>
              <PricingTierDescription>{tier.description}</PricingTierDescription>
              <PricingFeaturesList>
                {tier.features.map((feature, featureIndex) => (
                  <PricingFeature key={featureIndex}>
                    <FiCheck /> {feature}
                  </PricingFeature>
                ))}
              </PricingFeaturesList>
              <PricingButton onClick={() => setIsModalOpen(true)}>
                Get Started
              </PricingButton>
            </PricingCard>
          ))}
        </PricingGrid>
      </PricingSection>

      <TestimonialsSection id="testimonials">
        <SectionTitle>Success Stories</SectionTitle>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard>
                <TestimonialImage src={testimonial.image} alt={testimonial.name} />
                <TestimonialQuote>&ldquo;{testimonial.quote}&rdquo;</TestimonialQuote>
                <TestimonialAuthor>{testimonial.name}</TestimonialAuthor>
                <TestimonialRole>{testimonial.role}</TestimonialRole>
              </TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </TestimonialsSection>

      <FAQSection>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <FAQGrid>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FAQQuestion
                onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
              >
                {faq.question}
                <FAQIcon>{activeAccordion === index ? <FiChevronDown /> : <FiChevronDown />}</FAQIcon>
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
        </FAQGrid>
      </FAQSection>

      <CTASection>
        <CTAContent>
          <h2>Ready to Transform Your Staffing?</h2>
          <p>Join the waitlist and be the first to experience the future of hospitality staffing</p>
          <PrimaryButton onClick={() => setIsModalOpen(true)}>
            Join Waitlist Now
          </PrimaryButton>
        </CTAContent>
      </CTASection>

      <Footer>
        <FooterContent>
          <FooterSection>
            <FooterLogo>HospoHub</FooterLogo>
            <FooterDescription>
              Revolutionizing hospitality staffing with instant connections and verified professionals.
            </FooterDescription>
            <SocialLinks>
              <SocialLink href="#"><FiTwitter /></SocialLink>
              <SocialLink href="#"><FiLinkedin /></SocialLink>
              <SocialLink href="#"><FiFacebook /></SocialLink>
              <SocialLink href="#"><FiInstagram /></SocialLink>
            </SocialLinks>
          </FooterSection>
          <FooterLinksContainer>
            <FooterLinkSection>
              <FooterLinkTitle>Product</FooterLinkTitle>
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Integration</FooterLink>
              <FooterLink href="#">Updates</FooterLink>
            </FooterLinkSection>
            <FooterLinkSection>
              <FooterLinkTitle>Company</FooterLinkTitle>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </FooterLinkSection>
            <FooterLinkSection>
              <FooterLinkTitle>Resources</FooterLinkTitle>
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">Guidelines</FooterLink>
              <FooterLink href="#">API Status</FooterLink>
            </FooterLinkSection>
            <FooterLinkSection>
              <FooterLinkTitle>Legal</FooterLinkTitle>
              <FooterLink href="#">Privacy</FooterLink>
              <FooterLink href="#">Terms</FooterLink>
              <FooterLink href="#">Security</FooterLink>
              <FooterLink href="#">Compliance</FooterLink>
            </FooterLinkSection>
          </FooterLinksContainer>
        </FooterContent>
        <FooterBottom>
          <Copyright>&copy; 2024 HospoHub. All rights reserved.</Copyright>
        </FooterBottom>
      </Footer>

      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </PageContainer>
  );
};

export default LandingPage;
