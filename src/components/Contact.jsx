import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

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

const StatusMessageWrapper = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

const StatusMessage = styled(motion.div)`
  padding: 15px 25px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 300px;
  
  ${props => props.type === 'error' && `
    background: rgba(255, 0, 0, 0.95);
    color: white;
  `}
  
  ${props => props.type === 'success' && `
    background: rgba(100, 255, 218, 0.95);
    color: #0a192f;
  `}
  
  ${props => props.type === 'loading' && `
    background: rgba(204, 214, 246, 0.95);
    color: #0a192f;
  `}
`;

const ProgressBar = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: ${props => props.type === 'success' ? '#0a192f' : 'white'};
  opacity: 0.5;
`;

const StatusIcon = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (status.message) {
      setIsVisible(true);
      timeoutId = setTimeout(() => {
        setIsVisible(false);
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
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const response = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
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
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message
      });
    }
  };

  return (
    <ContactSection id="contact">
      <AnimatePresence>
        {isVisible && status.message && (
          <StatusMessageWrapper
            initial={{ opacity: 0, y: -50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -50, x: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <StatusMessage type={status.type}>
              <StatusIcon>
                {status.type === 'success' && <FaCheckCircle />}
                {status.type === 'error' && <FaExclamationCircle />}
              </StatusIcon>
              {status.message}
              <ProgressBar
                type={status.type}
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </StatusMessage>
          </StatusMessageWrapper>
        )}
      </AnimatePresence>

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
            <FaEnvelope /> Email: your.email@example.com
          </ContactText>
          <SocialLinks>
            <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
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
            />
          </FormGroup>
          <SubmitButton type="submit" disabled={status.type === 'loading'}>
            {status.type === 'loading' ? 'Sending...' : 'Send Message'}
          </SubmitButton>
        </ContactForm>
      </Container>
    </ContactSection>
  );
};

export default Contact; 