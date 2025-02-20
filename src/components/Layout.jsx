import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight, FiGithub, FiTwitter, FiLinkedin, FiShield } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import SignupModal from './SignupModal';

const Navbar = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.2rem 2rem;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  z-index: 100;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &.scrolled {
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const Logo = styled(Link)`
  font-weight: 800;
  font-size: 1.8rem;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
    
    &.active {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.98);
      padding: 2rem;
      gap: 2rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      animation: slideDown 0.3s ease-out forwards;
    }
  }
`;

const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #000;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #000;
    
    &::after {
      width: 100%;
    }
  }
`;

const NavButton = styled.button`
  background: #000;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const MenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: #000;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }
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

const FooterLink = styled(Link)`
  color: #666;
  text-decoration: none;
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

const AdminCornerTrigger = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 150px;
  height: 150px;
  z-index: 100;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  pointer-events: auto;
  touch-action: none;
`;

const AdminIconButton = styled(motion.button)`
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
  margin: 1.5rem;
  transition: all 0.3s ease;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;

  svg {
    width: 22px;
    height: 22px;
    color: #666;
    transition: all 0.3s ease;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.3s ease;
    z-index: -1;
  }

  &:hover, &:active {
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

    &::before {
      transform: scale(1);
    }

    svg {
      color: #fff;
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const AdminTooltip = styled(motion.div)`
  position: absolute;
  bottom: 100%;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  pointer-events: none;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    right: 15px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid rgba(0, 0, 0, 0.8);
  }
`;

const Layout = ({ children, isModalOpen, onModalClose, onModalOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAdminButton, setShowAdminButton] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleTriggerInteraction = (show) => {
    setShowAdminButton(show);
    if (!show) setShowTooltip(false);
  };

  return (
    <>
      <Navbar
        className={isScrolled ? 'scrolled' : ''}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NavContent>
          <Logo to="/">HospoHub</Logo>
          <NavLinks className={isMenuOpen ? 'active' : ''}>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavButton onClick={onModalOpen}>
              Join Waitlist <FiArrowRight />
            </NavButton>
          </NavLinks>
          <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </MenuButton>
        </NavContent>
      </Navbar>

      {children}

      <Footer>
        <FooterContent>
          <FooterSection>
            <Logo to="/">HospoHub</Logo>
            <p>The upcoming on-demand staffing app revolutionizing short-term hospitality work.</p>
            <SocialLinks>
              <SocialLink href="https://github.com/hospohub" target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </SocialLink>
              <SocialLink href="https://twitter.com/hospohub" target="_blank" rel="noopener noreferrer">
                <FiTwitter />
              </SocialLink>
              <SocialLink href="https://linkedin.com/company/hospohub" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
              </SocialLink>
            </SocialLinks>
          </FooterSection>
          <FooterSection>
            <h3>Product</h3>
            <FooterLinks>
              <FooterLink to="/#features">Features</FooterLink>
              <FooterLink to="/#pricing">Pricing</FooterLink>
              <FooterLink to="/faq">FAQ</FooterLink>
            </FooterLinks>
          </FooterSection>
          <FooterSection>
            <h3>Company</h3>
            <FooterLinks>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/privacy">Privacy</FooterLink>
              <FooterLink to="/terms">Terms</FooterLink>
            </FooterLinks>
          </FooterSection>
        </FooterContent>
        <Copyright>
          © {new Date().getFullYear()} HospoHub. All rights reserved.
        </Copyright>
      </Footer>

      <SignupModal isOpen={isModalOpen} onClose={onModalClose} />
      
      <AdminCornerTrigger 
        onMouseEnter={() => handleTriggerInteraction(true)}
        onMouseLeave={() => handleTriggerInteraction(false)}
        onTouchStart={() => handleTriggerInteraction(true)}
        onClick={() => handleTriggerInteraction(true)}
      >
        <AdminIconButton
          animate={{ 
            opacity: showAdminButton ? 1 : 0,
            scale: showAdminButton ? 1 : 0.8,
          }}
          transition={{ 
            duration: 0.2,
            ease: "easeOut"
          }}
          onClick={() => {
            handleTriggerInteraction(false);
            navigate('/admin/login');
          }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          style={{ 
            pointerEvents: showAdminButton ? 'auto' : 'none'
          }}
        >
          <FiShield />
          {showTooltip && (
            <AdminTooltip
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
            >
              Admin Access
            </AdminTooltip>
          )}
        </AdminIconButton>
      </AdminCornerTrigger>
    </>
  );
};

export default Layout; 