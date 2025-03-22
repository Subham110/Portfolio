import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin,FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { api } from '../utils/api';

const ContactSection = styled.section`
  padding: 100px 20px;
  background: #112240;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 32px;
  color: #ccd6f6;
  text-align: center;
  margin-bottom: 50px;
  grid-column: 1 / -1;
`;

const ContactInfo = styled.div`
  color: #ccd6f6;
`;

const ContactTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: #64ffda;
`;

const ContactText = styled.p`
  color: #8892b0;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

const SocialLink = styled.a`
  color: #ccd6f6;
  font-size: 24px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #64ffda;
  }
`;

const ContactForm = styled.form`
  background: #1d3461;
  padding: 30px;
  border-radius: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  color: #ccd6f6;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  background: #112240;
  border: 1px solid #64ffda;
  border-radius: 5px;
  color: #ccd6f6;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #64ffda;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  background: #112240;
  border: 1px solid #64ffda;
  border-radius: 5px;
  color: #ccd6f6;
  font-size: 16px;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #64ffda;
  }
`;

const SubmitButton = styled.button`
  background: transparent;
  color: #64ffda;
  border: 2px solid #64ffda;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }
`;

const MessageContainer = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 15px 25px;
  border-radius: 8px;
  background: ${props => props.type === 'success' ? 'rgba(100, 255, 218, 0.1)' : 'rgba(255, 107, 107, 0.1)'};
  border: 1px solid ${props => props.type === 'success' ? '#64ffda' : '#ff6b6b'};
  color: ${props => props.type === 'success' ? '#64ffda' : '#ff6b6b'};
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Clear status message after 5 seconds
  useEffect(() => {
    let timeoutId;
    if (status.message) {
      timeoutId = setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [status.message]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await api.sendMessage(formData);
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </SectionTitle>
        
        <ContactInfo>
          <ContactTitle>Let's Connect</ContactTitle>
          <ContactText>
            I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </ContactText>
          <ContactText>
            <FaEnvelope /> Email: subhampramanik326@gmail.com
          </ContactText>
          <SocialLinks>
            <SocialLink href="https://github.com/Subham110" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/subham-pramanik-9b7601323" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://x.com/Subham6631" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/lucifer__0.5" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialLink>
          </SocialLinks>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </FormGroup>
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
        </ContactForm>

        <AnimatePresence>
          {status.message && (
            <MessageContainer
              type={status.type}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {status.message}
            </MessageContainer>
          )}
        </AnimatePresence>
      </Container>
    </ContactSection>
  );
};

export default Contact; 