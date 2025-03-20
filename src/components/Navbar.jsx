import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaSun, FaMoon } from 'react-icons/fa';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background: ${props => props.isDarkMode ? 'rgba(10, 25, 47, 0.85)' : 'rgba(230, 241, 255, 0.85)'};
  backdrop-filter: blur(10px);
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.isDarkMode ? '#64ffda' : '#0a192f'};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const NavLink = styled(ScrollLink)`
  cursor: pointer;
  color: ${props => props.isDarkMode ? '#e6f1ff' : '#0a192f'};
  transition: color 0.3s ease;
  
  &:hover {
    color: #64ffda;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.isDarkMode ? '#e6f1ff' : '#0a192f'};
  font-size: 20px;
  padding: 5px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #64ffda;
  }
`;

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav
      isDarkMode={isDarkMode}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo isDarkMode={isDarkMode}>SP</Logo>
      <NavLinks>
        <NavLink to="about" smooth={true} duration={500} isDarkMode={isDarkMode}>
          About
        </NavLink>
        <NavLink to="projects" smooth={true} duration={500} isDarkMode={isDarkMode}>
          Projects
        </NavLink>
        <NavLink to="skills" smooth={true} duration={500} isDarkMode={isDarkMode}>
          Skills
        </NavLink>
        <NavLink to="experience" smooth={true} duration={500} isDarkMode={isDarkMode}>
          Experience
        </NavLink>
        <NavLink to="blog" smooth={true} duration={500} isDarkMode={isDarkMode}>
          Blog
        </NavLink>
        <NavLink to="contact" smooth={true} duration={500} isDarkMode={isDarkMode}>
          Contact
        </NavLink>
        <ThemeToggle onClick={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </ThemeToggle>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 