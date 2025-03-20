import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDocker } from 'react-icons/fa';

const SkillsSection = styled.section`
  padding: 100px 20px;
  background: #112240;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const SkillCard = styled(motion.div)`
  background: #1d3461;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const Icon = styled.div`
  font-size: 50px;
  color: #64ffda;
  margin-bottom: 20px;
`;

const SkillTitle = styled.h3`
  font-size: 20px;
  color: #ccd6f6;
  margin-bottom: 15px;
`;

const SkillDescription = styled.p`
  color: #8892b0;
  line-height: 1.6;
`;

const Skills = () => {
  const skills = [
    {
      icon: <FaReact />,
      title: "React",
      description: "Building modern, responsive user interfaces with React and its ecosystem."
    },
    {
      icon: <FaNodeJs />,
      title: "Node.js",
      description: "Developing scalable server-side applications with Node.js and Express."
    },
    {
      icon: <FaDatabase />,
      title: "Databases",
      description: "Working with MongoDB, PostgreSQL, and other database systems."
    },
    {
      icon: <FaHtml5 />,
      title: "HTML5",
      description: "Creating semantic and accessible web structures."
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS3",
      description: "Styling with modern CSS, including Flexbox and Grid layouts."
    },
    {
      icon: <FaJs />,
      title: "JavaScript",
      description: "Writing clean, efficient JavaScript code with modern ES6+ features."
    },
    {
      icon: <FaGitAlt />,
      title: "Git",
      description: "Version control and collaborative development with Git."
    },
    {
      icon: <FaDocker />,
      title: "Docker",
      description: "Containerization and deployment with Docker."
    }
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </SectionTitle>
        <Grid>
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Icon>{skill.icon}</Icon>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillDescription>{skill.description}</SkillDescription>
            </SkillCard>
          ))}
        </Grid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 