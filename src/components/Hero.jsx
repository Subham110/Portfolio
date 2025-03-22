import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter,FaInstagram } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  position: relative;
  overflow: hidden;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #0a192f, #112240);
  z-index: -1;
`;

const Content = styled.div`
  max-width: 1000px;
  text-align: center;
`;

const Greeting = styled(motion.h1)`
  font-size: 16px;
  color: #64ffda;
  margin-bottom: 20px;
`;

const Name = styled(motion.h2)`
  font-size: 80px;
  color: #ccd6f6;
  margin-bottom: 20px;
`;

const Title = styled(motion.h3)`
  font-size: 40px;
  color: #8892b0;
  margin-bottom: 20px;
`;

const Description = styled(motion.p)`
  font-size: 20px;
  color: #8892b0;
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.6;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialLink = styled.a`
  color: #ccd6f6;
  font-size: 24px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #64ffda;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <Background />
      <Content>
        <Greeting
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, my name is
        </Greeting>
        <Name
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Subham Pramanik
        </Name>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full Stack Developer
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I build exceptional digital experiences that combine beautiful design with powerful functionality.
          Passionate about creating innovative solutions that make a difference.
        </Description>
        <SocialLinks
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
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
      </Content>
    </HeroSection>
  );
};

export default Hero; 