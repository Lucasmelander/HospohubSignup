import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { ArrowRight, Users, Clock, Award, Shield, Briefcase, Coffee, ChevronRight, DollarSign, Calendar, CheckCircle, Zap, MapPin, Star, UserPlus, CreditCard, Search } from 'react-feather';

function LandingPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeProcess, setActiveProcess] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveProcess(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Content $isVisible={isVisible}>
        <Nav>
          <Logo>
            <LogoText>HospoHub</LogoText>
          </Logo>
          <NavLinks>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <LoginButton onClick={() => navigate('/login')}>
              Login <ArrowRight size={16} />
            </LoginButton>
          </NavLinks>
        </Nav>

        <MainSection>
          <HeroText>
            <LaunchBadge>
              <PulsingDot />
              Coming Soon · Early Access Available
            </LaunchBadge>
            <Title>
              The Future of Hospitality Staffing is Here
            </Title>
            <Subtitle>
              Join the revolution in hospitality staffing. Connect elite professionals with premium venues through our intelligent matching platform.
            </Subtitle>
            <QuickBenefits>
              <QuickBenefit>
                <BenefitIcon><Clock size={20} /></BenefitIcon>
                <BenefitLabel>Get Hired Instantly</BenefitLabel>
              </QuickBenefit>
              <QuickBenefit>
                <BenefitIcon><DollarSign size={20} /></BenefitIcon>
                <BenefitLabel>Same Day Pay</BenefitLabel>
              </QuickBenefit>
              <QuickBenefit>
                <BenefitIcon><Calendar size={20} /></BenefitIcon>
                <BenefitLabel>Flexible Hours</BenefitLabel>
              </QuickBenefit>
            </QuickBenefits>
            <CTAButtons>
              <PrimaryButton onClick={() => navigate('/worker/register')}>
                Join as Staff <ChevronRight size={20} />
              </PrimaryButton>
              <SecondaryButton onClick={() => navigate('/business/register')}>
                Hire Staff <Users size={20} />
              </SecondaryButton>
            </CTAButtons>
          </HeroText>
        </MainSection>

        <StatsGrid>
          <StatCard>
            <StatIcon><Users /></StatIcon>
            <StatInfo>
              <StatNumber>2,000+</StatNumber>
              <StatLabel>Pre-registered Professionals</StatLabel>
              <StatProgress>
                <ProgressBar width="75%" />
              </StatProgress>
            </StatInfo>
          </StatCard>
          <StatCard>
            <StatIcon><Briefcase /></StatIcon>
            <StatInfo>
              <StatNumber>500+</StatNumber>
              <StatLabel>Partner Venues</StatLabel>
              <StatProgress>
                <ProgressBar width="60%" />
              </StatProgress>
            </StatInfo>
          </StatCard>
          <StatCard>
            <StatIcon><Clock /></StatIcon>
            <StatInfo>
              <StatNumber>24/7</StatNumber>
              <StatLabel>Support Available</StatLabel>
              <StatProgress>
                <ProgressBar width="90%" />
              </StatProgress>
            </StatInfo>
          </StatCard>
        </StatsGrid>

        <FeaturesSection id="features">
          <SectionTitle>Why Choose HospoHub</SectionTitle>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIconWrapper>
                <FeatureIcon><Award /></FeatureIcon>
              </FeatureIconWrapper>
              <FeatureContent>
                <FeatureTitle>Elite Network</FeatureTitle>
                <FeatureText>Access a curated network of verified hospitality professionals and premium venues.</FeatureText>
                <FeatureList>
                  <FeatureItem>
                    <CheckCircle size={16} />
                    Pre-vetted professionals
                  </FeatureItem>
                  <FeatureItem>
                    <CheckCircle size={16} />
                    Quality assurance
                  </FeatureItem>
                  <FeatureItem>
                    <CheckCircle size={16} />
                    Skill verification
                  </FeatureItem>
                </FeatureList>
              </FeatureContent>
            </FeatureCard>
            <FeatureCard>
              <FeatureIconWrapper>
                <FeatureIcon><Shield /></FeatureIcon>
              </FeatureIconWrapper>
              <FeatureContent>
                <FeatureTitle>Instant Staffing</FeatureTitle>
                <FeatureText>Find and hire qualified staff within hours, not days.</FeatureText>
                <FeatureList>
                  <FeatureItem>
                    <CheckCircle size={16} />
                    Same-day hiring
                  </FeatureItem>
                  <FeatureItem>
                    <CheckCircle size={16} />
                    Instant payments
                  </FeatureItem>
                  <FeatureItem>
                    <CheckCircle size={16} />
                    No long-term contracts
                  </FeatureItem>
                </FeatureList>
              </FeatureContent>
            </FeatureCard>
            <FeatureCard>
              <FeatureIconWrapper>
                <FeatureIcon><Coffee /></FeatureIcon>
              </FeatureIconWrapper>
              <FeatureContent>
                <FeatureTitle>Smart Matching</FeatureTitle>
                <FeatureText>AI-powered matching ensures the perfect fit for every position.</FeatureText>
                <FeatureList>
                  <FeatureItem>
                    <CheckCircle size={16} />
                    Skill-based matching
                  </FeatureItem>
                  <FeatureItem>
                    <CheckCircle size={16} />
                    Real-time availability
                  </FeatureItem>
                  <FeatureItem>
                    <CheckCircle size={16} />
                    Location optimization
                  </FeatureItem>
                </FeatureList>
              </FeatureContent>
            </FeatureCard>
          </FeaturesGrid>
        </FeaturesSection>

        <HowItWorksSection id="how-it-works">
          <SectionTitle>How It Works</SectionTitle>
          <ProcessGrid>
            <ProcessCard $active={activeProcess === 0}>
              <ProcessIconWrapper>
                <ProcessIcon><UserPlus size={24} /></ProcessIcon>
              </ProcessIconWrapper>
              <ProcessNumber>01</ProcessNumber>
              <ProcessTitle>Quick Sign Up</ProcessTitle>
              <ProcessText>Create your profile in minutes and start finding opportunities.</ProcessText>
              <ProcessDetails>
                <ProcessDetail>
                  <Clock size={16} />
                  5-minute registration
                </ProcessDetail>
                <ProcessDetail>
                  <Shield size={16} />
                  Instant verification
                </ProcessDetail>
                <ProcessDetail>
                  <Award size={16} />
                  Profile live in 24h
                </ProcessDetail>
              </ProcessDetails>
            </ProcessCard>
            <ProcessCard $active={activeProcess === 1}>
              <ProcessIconWrapper>
                <ProcessIcon><Search size={24} /></ProcessIcon>
              </ProcessIconWrapper>
              <ProcessNumber>02</ProcessNumber>
              <ProcessTitle>Find Matches</ProcessTitle>
              <ProcessText>Browse opportunities or staff that match your needs.</ProcessText>
              <ProcessDetails>
                <ProcessDetail>
                  <Zap size={16} />
                  Smart matching
                </ProcessDetail>
                <ProcessDetail>
                  <MapPin size={16} />
                  Location-based
                </ProcessDetail>
                <ProcessDetail>
                  <Calendar size={16} />
                  Real-time availability
                </ProcessDetail>
              </ProcessDetails>
            </ProcessCard>
            <ProcessCard $active={activeProcess === 2}>
              <ProcessIconWrapper>
                <ProcessIcon><DollarSign size={24} /></ProcessIcon>
              </ProcessIconWrapper>
              <ProcessNumber>03</ProcessNumber>
              <ProcessTitle>Start Working</ProcessTitle>
              <ProcessText>Begin working and get paid the same day.</ProcessText>
              <ProcessDetails>
                <ProcessDetail>
                  <Clock size={16} />
                  Same-day starts
                </ProcessDetail>
                <ProcessDetail>
                  <CreditCard size={16} />
                  Instant payments
                </ProcessDetail>
                <ProcessDetail>
                  <Star size={16} />
                  Build reputation
                </ProcessDetail>
              </ProcessDetails>
            </ProcessCard>
          </ProcessGrid>
        </HowItWorksSection>

        <EarlyAccessSection>
          <EarlyAccessContent>
            <SectionTitle>Get Early Access</SectionTitle>
            <EarlyAccessText>
              Be among the first to experience the future of hospitality staffing. Sign up now for exclusive benefits and priority access.
            </EarlyAccessText>
            <BenefitsList>
              <BenefitCard>
                <BenefitIconWrapper>
                  <Award size={24} />
                </BenefitIconWrapper>
                <BenefitTitle>Priority Access</BenefitTitle>
                <BenefitText>Get first access to premium jobs and staff</BenefitText>
              </BenefitCard>
              <BenefitCard>
                <BenefitIconWrapper>
                  <DollarSign size={24} />
                </BenefitIconWrapper>
                <BenefitTitle>Special Rates</BenefitTitle>
                <BenefitText>Enjoy promotional pricing and bonuses</BenefitText>
              </BenefitCard>
              <BenefitCard>
                <BenefitIconWrapper>
                  <Star size={24} />
                </BenefitIconWrapper>
                <BenefitTitle>VIP Support</BenefitTitle>
                <BenefitText>Dedicated support team for early users</BenefitText>
              </BenefitCard>
            </BenefitsList>
            <CTAButtons>
              <PrimaryButton onClick={() => navigate('/worker/register')}>
                Register as Staff
              </PrimaryButton>
              <SecondaryButton onClick={() => navigate('/business/register')}>
                Register Your Venue
              </SecondaryButton>
            </CTAButtons>
          </EarlyAccessContent>
        </EarlyAccessSection>

        <ContactSection>
          <ContactTitle>Ready to Transform Your Staffing?</ContactTitle>
          <ContactText>
            Get in touch with us to learn more about how HospoHub can help you.
          </ContactText>
          <ContactButton onClick={() => navigate('/contact')}>Contact Us</ContactButton>
        </ContactSection>

        <Footer>
          <FooterContent>
            <FooterSection>
              <FooterTitle>HospoHub</FooterTitle>
              <FooterText>
                Connecting elite hospitality professionals with premium venues.
              </FooterText>
            </FooterSection>
            <FooterLinks>
              <FooterLinkGroup>
                <FooterLinkTitle>Platform</FooterLinkTitle>
                <FooterLink href="#features">Features</FooterLink>
                <FooterLink href="#how-it-works">How It Works</FooterLink>
                <FooterLink href="#pricing">Pricing</FooterLink>
              </FooterLinkGroup>
              <FooterLinkGroup>
                <FooterLinkTitle>Company</FooterLinkTitle>
                <FooterLink href="#about">About</FooterLink>
                <FooterLink href="#contact">Contact</FooterLink>
                <FooterLink href="#privacy">Privacy</FooterLink>
              </FooterLinkGroup>
            </FooterLinks>
          </FooterContent>
          <FooterBottom>
            <Copyright>
              © 2024 HospoHub. All rights reserved.
            </Copyright>
          </FooterBottom>
        </Footer>
      </Content>
    </Container>
  );
}

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

// Styled components
const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
  overflow: hidden;
  position: relative;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 1s ease;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0;
  margin-bottom: 2rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.div`
  color: #000000;
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: #333333;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  letter-spacing: -0.01em;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #000000;
  }
`;

const LoginButton = styled.button`
  background: transparent;
  border: 2px solid #000000;
  color: #000000;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #000000;
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

const MainSection = styled.div`
  padding: 8rem 0 6rem;
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 1s ease;
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent);
  }
`;

const HeroText = styled.div`
  max-width: 800px;
  text-align: center;
`;

const LaunchBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #f4f4f4;
  border-radius: 50px;
  font-size: 0.9rem;
  color: #000000;
  margin-bottom: 2rem;
`;

const PulsingDot = styled.div`
  width: 8px;
  height: 8px;
  background: #000000;
  border-radius: 50%;
  animation: ${pulse} 2s infinite;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #000000;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.03em;
`;

const Subtitle = styled.p`
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  color: #555555;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: -0.01em;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const PrimaryButton = styled.button`
  background: #000000;
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  letter-spacing: -0.01em;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    background: #111111;
  }

  svg {
    stroke-width: 2;
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  border: 2px solid #000000;
  color: #000000;
  padding: 1rem 2rem;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: -0.01em;

  &:hover {
    background: #000000;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  svg {
    stroke-width: 2;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 4rem 0;
`;

const StatCard = styled.div`
  background: #ffffff;
  padding: 2.5rem;
  text-align: center;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    border-color: rgba(0, 0, 0, 0.1);
  }
`;

const StatIcon = styled.div`
  color: #000000;
  margin-bottom: 1.5rem;
  opacity: 0.9;

  svg {
    width: 40px;
    height: 40px;
    stroke-width: 1.5;
  }
`;

const StatInfo = styled.div``;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  line-height: 1;
`;

const StatLabel = styled.div`
  color: #555555;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.01em;
`;

const StatProgress = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  margin-top: 1rem;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${props => props.width};
  background: linear-gradient(90deg, #000000, #333333);
  border-radius: 2px;
  transition: width 1.5s ease;
`;

const FeaturesSection = styled.section`
  padding: 6rem 0;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: #000000;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const FeatureCard = styled.div`
  padding: 2.5rem;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #000000, #333333);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    border-color: rgba(0, 0, 0, 0.1);

    &::before {
      opacity: 1;
    }
  }
`;

const FeatureIconWrapper = styled.div`
  width: 56px;
  height: 56px;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);

  svg {
    stroke-width: 1.5;
    width: 28px;
    height: 28px;
    color: #000000;
    transition: all 0.3s ease;
  }

  ${FeatureCard}:hover & {
    transform: scale(1.1);
    background: #000000;
    border-color: #000000;

    svg {
      color: #ffffff;
    }
  }
`;

const FeatureIcon = styled.div`
  color: #000000;
`;

const FeatureContent = styled.div``;

const FeatureTitle = styled.h3`
  font-size: 1.375rem;
  color: #000000;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

const FeatureText = styled.p`
  color: #555555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1.0625rem;
  letter-spacing: -0.01em;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #555555;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  font-weight: 500;

  svg {
    color: #000000;
    stroke-width: 2;
  }

  animation: ${slideIn} 0.3s ease forwards;
  opacity: 0;
  animation-delay: ${props => props.index * 0.1}s;
`;

const HowItWorksSection = styled.section`
  padding: 6rem 0;
  background: #f8f8f8;
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const ProcessCard = styled.div`
  padding: 2.5rem;
  background: #ffffff;
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  opacity: ${props => props.$active ? 1 : 0.7};
  transform: scale(${props => props.$active ? 1.05 : 1});

  &:hover {
    transform: scale(1.05);
    opacity: 1;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    border-color: rgba(0, 0, 0, 0.1);
  }
`;

const ProcessIconWrapper = styled.div`
  width: 72px;
  height: 72px;
  background: #ffffff;
  border-radius: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);

  svg {
    stroke-width: 1.5;
    width: 32px;
    height: 32px;
    color: #000000;
    transition: all 0.3s ease;
  }

  ${ProcessCard}:hover & {
    transform: scale(1.1);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    background: #000000;
    border-color: #000000;

    svg {
      color: #ffffff;
    }
  }
`;

const ProcessIcon = styled.div`
  color: #000000;
`;

const ProcessNumber = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: #000000;
  opacity: 0.1;
  margin-bottom: 1rem;
`;

const ProcessTitle = styled.h3`
  font-size: 1.375rem;
  color: #000000;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

const ProcessText = styled.p`
  color: #555555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1.0625rem;
  letter-spacing: -0.01em;
`;

const ProcessDetails = styled.div`
  text-align: left;
`;

const ProcessDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #555555;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.75rem 1rem;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  transition: all 0.3s ease;

  svg {
    color: #000000;
    stroke-width: 1.5;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    transform: translateX(5px);
  }
`;

const EarlyAccessSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(180deg, #000000, #1a1a1a);
  color: #ffffff;
  border-radius: 40px;
  margin: 4rem 0;
  position: relative;
  overflow: hidden;

  ${PrimaryButton} {
    background: #ffffff;
    color: #000000;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);

    &:hover {
      background: #ffffff;
      box-shadow: 0 6px 24px rgba(255, 255, 255, 0.3);
    }
  }

  ${SecondaryButton} {
    border-color: #ffffff;
    color: #ffffff;

    &:hover {
      background: #ffffff;
      color: #000000;
      border-color: #ffffff;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.1), transparent);
    pointer-events: none;
  }
`;

const EarlyAccessContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  ${SectionTitle} {
    color: #ffffff;
  }
`;

const EarlyAccessText = styled.p`
  font-size: 1.25rem;
  color: #ffffff;
  opacity: 0.8;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
`;

const BenefitCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 24px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }
`;

const BenefitIconWrapper = styled.div`
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);

  svg {
    stroke-width: 1.5;
    width: 32px;
    height: 32px;
    color: #ffffff;
  }

  ${BenefitCard}:hover & {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const BenefitTitle = styled.h4`
  color: #ffffff;
  font-size: 1.375rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

const BenefitText = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.6;
  letter-spacing: -0.01em;
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

const FooterLinkGroup = styled.div``;

const FooterLinkTitle = styled.h4`
  font-size: 1.125rem;
  color: #000000;
  margin-bottom: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

const FooterLink = styled.a`
  display: block;
  color: #555555;
  text-decoration: none;
  margin-bottom: 0.75rem;
  transition: all 0.2s ease;
  padding: 0.75rem;
  border-radius: 12px;
  font-size: 1rem;
  letter-spacing: -0.01em;

  &:hover {
    color: #000000;
    background: rgba(0, 0, 0, 0.03);
    transform: translateX(5px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #eaeaea;
  padding-top: 2rem;
  text-align: center;
`;

const Copyright = styled.div`
  color: #666666;
  font-size: 0.9rem;
`;

const QuickBenefits = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const QuickBenefit = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(0, 0, 0, 0.07);
  padding: 1rem 2rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    background: rgba(0, 0, 0, 0.09);
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

const BenefitLabel = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: #000000;
`;

const BenefitIcon = styled.div`
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    stroke-width: 2;
  }
`;

const ContactSection = styled.section`
  padding: 8rem 0;
  text-align: center;
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 40px;
  margin: 4rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at bottom left, rgba(0, 0, 0, 0.02), transparent);
    pointer-events: none;
  }
`;

const ContactTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: #000000;
  margin-bottom: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

const ContactText = styled.p`
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  color: #555555;
  margin-bottom: 2rem;
  letter-spacing: -0.01em;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactButton = styled(PrimaryButton)`
  margin: 0 auto;
`;

const Footer = styled.footer`
  padding: 6rem 0 4rem;
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 40px 40px 0 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top right, rgba(0, 0, 0, 0.02), transparent);
    pointer-events: none;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 4rem;
  margin-bottom: 4rem;
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h3`
  font-size: 1.75rem;
  color: #000000;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

const FooterText = styled.p`
  color: #555555;
  line-height: 1.6;
  font-size: 1.0625rem;
  letter-spacing: -0.01em;
`;

export default LandingPage;