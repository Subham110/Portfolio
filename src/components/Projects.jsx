import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 100px 0;
  background: #0a192f;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: #ccd6f6;
  margin-bottom: 50px;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(17, 34, 64, 0.7);
  border-radius: 12px;
  padding: 25px;
  transition: transform 0.3s ease;
  border: 1px solid rgba(100, 255, 218, 0.1);

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(100, 255, 218, 0.3);
  }
`;

const ProjectTitle = styled.h3`
  color: #e6f1ff;
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const TechTag = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.85rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const ProjectLink = styled.a`
  color: #64ffda;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ccd6f6;
  }
`;

// Static project data
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern portfolio website built with React, styled-components, and Framer Motion. Features smooth animations and responsive design.",
    techStack: ["React", "Styled Components", "Framer Motion", "Node.js", "Express"],
    githubLink: "https://github.com/yourusername/portfolio",
    liveLink: "https://your-portfolio.com"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, and payment integration using Stripe.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    githubLink: "https://github.com/yourusername/ecommerce",
    liveLink: "https://your-ecommerce.com"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates using Socket.io and drag-and-drop functionality.",
    techStack: ["React", "Socket.io", "Node.js", "PostgreSQL", "Redux"],
    githubLink: "https://github.com/yourusername/task-manager",
    liveLink: "https://your-taskmanager.com"
  }
];

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </SectionTitle>

        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.techStack.map((tech, index) => (
                  <TechTag key={index}>{tech}</TechTag>
                ))}
              </TechStack>
              <ProjectLinks>
                <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </ProjectLink>
                <ProjectLink href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </ProjectLink>
              </ProjectLinks>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 