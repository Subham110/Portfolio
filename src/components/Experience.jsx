import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const ExperienceSection = styled.section`
  padding: 100px 20px;
  background: #0a192f;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 32px;
  color: #ccd6f6;
  text-align: center;
  margin-bottom: 50px;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: #64ffda;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 50px;
  width: 50%;
  padding-right: 30px;
  
  &:nth-child(even) {
    margin-left: 50%;
    padding-right: 0;
    padding-left: 30px;
  }
  
  &::before {
    content: '';
    position: absolute;
    right: -6px;
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #64ffda;
    border: 2px solid #0a192f;
  }
  
  &:nth-child(even)::before {
    right: auto;
    left: -6px;
  }
`;

const Content = styled.div`
  background: #112240;
  padding: 20px;
  border-radius: 10px;
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  top: -15px;
  left: 20px;
  width: 30px;
  height: 30px;
  background: #1d3461;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64ffda;
`;

const Date = styled.div`
  color: #64ffda;
  font-size: 14px;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  color: #ccd6f6;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Subtitle = styled.h4`
  color: #8892b0;
  font-size: 16px;
  margin-bottom: 15px;
`;

const Description = styled.p`
  color: #8892b0;
  line-height: 1.6;
`;

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      date: '2025 - Present',
      title: 'Senior Full Stack Developer',
      subtitle: 'Tech Company',
      description: 'Leading the development of enterprise-level applications using React, Node.js, and cloud technologies.',
      icon: <FaBriefcase />
    },
    {
      type: 'work',
      date: '2024 - 2025',
      title: 'Full Stack Developer',
      subtitle: 'Startup Company',
      description: 'Developed and maintained multiple web applications using modern technologies and best practices.',
      icon: <FaBriefcase />
    },
    {
      type: 'education',
      date: '2021 - 2024',
      title: 'Bachelor of Technology',
      subtitle: 'Computer Science',
      description: 'Graduated with honors, focusing on software development and computer science fundamentals.',
      icon: <FaGraduationCap />
    }
  ];

  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience & Education
        </SectionTitle>
        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Content>
                <Icon>{exp.icon}</Icon>
                <Date>{exp.date}</Date>
                <Title>{exp.title}</Title>
                <Subtitle>{exp.subtitle}</Subtitle>
                <Description>{exp.description}</Description>
              </Content>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience; 