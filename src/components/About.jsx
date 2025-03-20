import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';

const AboutSection = styled.section`
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const Card = styled(motion.div)`
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
  font-size: 40px;
  color: #64ffda;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  color: #ccd6f6;
  margin-bottom: 15px;
`;

const CardDescription = styled.p`
  color: #8892b0;
  line-height: 1.6;
`;

const About = () => {
  const cards = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description: "Specialized in creating responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks."
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Experienced in building scalable server-side applications using Node.js, Express, and various backend frameworks."
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      description: "Proficient in working with both SQL and NoSQL databases, ensuring optimal data management and performance."
    }
  ];

  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </SectionTitle>
        <Grid>
          {cards.map((card, index) => (
            <Card
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Icon>{card.icon}</Icon>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </Card>
          ))}
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About; 