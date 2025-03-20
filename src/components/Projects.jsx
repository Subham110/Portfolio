import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
`;

const ProjectCard = styled(motion.div)`
  background: #112240;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: #1d3461;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${ProjectCard}:hover &::before {
    opacity: 1;
  }
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  color: #ccd6f6;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const TechTag = styled.span`
  background: #1d3461;
  color: #64ffda;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const ProjectLink = styled.a`
  color: #ccd6f6;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #64ffda;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://ecommerce-demo.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      tech: ["Next.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://task-manager-demo.com"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and styled-components, featuring smooth animations.",
      tech: ["React", "Styled Components", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio",
      demo: "https://portfolio-demo.com"
    }
  ];

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
        <Grid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </ProjectLink>
                  <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </Grid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 