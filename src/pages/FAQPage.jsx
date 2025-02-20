import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiChevronDown, FiSearch } from 'react-icons/fi';
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

const SearchContainer = styled.div`
  max-width: 600px;
  margin: 0 auto 2rem;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  padding-left: 3rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #000;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 1.2rem;
`;

const ContentSection = styled.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const CategorySection = styled.div`
  margin-bottom: 4rem;
`;

const CategoryTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #000;
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

const FAQPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = {
    general: {
      title: "General Questions",
      items: [
        {
          question: "What is HospoHub?",
          answer: "HospoHub is an innovative platform connecting hospitality businesses with qualified staff for short-term work opportunities. We provide a seamless solution for both venues needing temporary staff and professionals looking for flexible work arrangements."
        },
        {
          question: "When is the app launching?",
          answer: "We're currently in the final stages of development and plan to launch soon. Join our waitlist to be among the first to access the app and receive exclusive early-bird benefits."
        },
        {
          question: "Is HospoHub available in my area?",
          answer: "We're initially launching in major Swedish cities and plan to expand to other locations based on demand. Sign up for our waitlist to be notified when we launch in your area."
        }
      ]
    },
    businesses: {
      title: "For Businesses",
      items: [
        {
          question: "How much does it cost to use HospoHub?",
          answer: "Businesses pay a monthly subscription fee of 2,000 SEK, which includes unlimited job postings, access to verified workers, smart matching, and all platform features."
        },
        {
          question: "How does the staff verification process work?",
          answer: "We conduct thorough background checks, verify work history, and validate qualifications for all staff members. Each professional goes through a multi-step verification process before being able to accept gigs."
        },
        {
          question: "What happens if a worker doesn't show up?",
          answer: "We have a reliable backup system in place. If a worker doesn't show up, you'll receive instant notifications, and we'll immediately connect you with available backup staff in your area. We also have measures to prevent no-shows and maintain high reliability."
        },
        {
          question: "Can I set specific requirements for staff?",
          answer: "Yes, you can specify requirements such as experience level, certifications, language skills, and specific qualifications needed for each role."
        }
      ]
    },
    workers: {
      title: "For Workers",
      items: [
        {
          question: "Is it free to use HospoHub as a worker?",
          answer: "Yes, workers can use HospoHub completely free of charge. There are no fees or commissions taken from your earnings."
        },
        {
          question: "How do I get paid?",
          answer: "Payments are processed securely through our platform. After completing a shift and receiving approval, funds are automatically transferred to your linked bank account within 1-3 business days."
        },
        {
          question: "Can I choose my own schedule?",
          answer: "Absolutely! You have complete flexibility to set your availability and choose which gigs to accept. Work as much or as little as you want."
        },
        {
          question: "What types of jobs are available?",
          answer: "We offer various hospitality roles including servers, bartenders, kitchen staff, event staff, and more. Jobs can range from a few hours to several days."
        }
      ]
    },
    technical: {
      title: "Technical Questions",
      items: [
        {
          question: "How do I reset my password?",
          answer: "You can reset your password through the 'Forgot Password' link on the login page. We'll send you a secure link to reset your password via email."
        },
        {
          question: "What devices can I use HospoHub on?",
          answer: "HospoHub is available as both a web application and mobile app (iOS and Android). You can access your account from any device with an internet connection."
        },
        {
          question: "Is my data secure?",
          answer: "Yes, we use industry-standard encryption and security measures to protect your data. All personal and payment information is encrypted and stored securely."
        }
      ]
    },
    payments: {
      title: "Payments & Billing",
      items: [
        {
          question: "What payment methods are accepted?",
          answer: "We accept all major credit cards, direct bank transfers, and popular digital payment methods. Businesses can also set up automatic monthly billing."
        },
        {
          question: "How are cancellations handled?",
          answer: "Cancellation policies vary depending on the timing and circumstances. Generally, businesses must cancel at least 24 hours in advance to avoid charges, and workers must maintain a reliable attendance record."
        },
        {
          question: "Is there a minimum commitment period?",
          answer: "No, businesses can cancel their subscription at any time. There are no long-term contracts or minimum commitment periods."
        }
      ]
    }
  };

  const filteredFAQs = searchQuery
    ? Object.entries(faqCategories).reduce((acc, [key, category]) => {
        const filteredItems = category.items.filter(
          item =>
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (filteredItems.length > 0) {
          acc[key] = { ...category, items: filteredItems };
        }
        return acc;
      }, {})
    : faqCategories;

  return (
    <Layout>
      <PageContainer>
        <HeroSection>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FiMessageCircle /> Frequently Asked Questions
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Find answers to common questions about HospoHub. Can't find what you're looking for? Contact our support team.
          </Description>
          <SearchContainer>
            <SearchIcon />
            <SearchInput
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchContainer>
        </HeroSection>

        <ContentSection>
          {Object.entries(filteredFAQs).map(([key, category]) => (
            <CategorySection key={key}>
              <CategoryTitle>{category.title}</CategoryTitle>
              {category.items.map((faq, index) => (
                <FAQItem
                  key={index}
                  as={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FAQQuestion
                    onClick={() => setActiveAccordion(activeAccordion === `${key}-${index}` ? null : `${key}-${index}`)}
                    aria-expanded={activeAccordion === `${key}-${index}`}
                  >
                    {faq.question}
                    <FiChevronDown />
                  </FAQQuestion>
                  <AnimatePresence>
                    {activeAccordion === `${key}-${index}` && (
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
            </CategorySection>
          ))}
        </ContentSection>
      </PageContainer>
    </Layout>
  );
};

export default FAQPage; 