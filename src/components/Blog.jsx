import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaTags } from 'react-icons/fa';

const BlogSection = styled.section`
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

const BlogCard = styled(motion.article)`
  background: #112240;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const BlogImage = styled.div`
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
  
  ${BlogCard}:hover &::before {
    opacity: 1;
  }
`;

const BlogContent = styled.div`
  padding: 20px;
`;

const BlogTitle = styled.h3`
  font-size: 24px;
  color: #ccd6f6;
  margin-bottom: 15px;
`;

const BlogExcerpt = styled.p`
  color: #8892b0;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const BlogMeta = styled.div`
  display: flex;
  gap: 20px;
  color: #8892b0;
  font-size: 14px;
  margin-bottom: 15px;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ReadMore = styled.a`
  color: #64ffda;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ccd6f6;
  }
`;

const Blog = () => {
  const blogPosts = [
    {
      title: "Getting Started with React and Next.js",
      excerpt: "Learn the basics of React and Next.js, and how to create your first application with these powerful frameworks.",
      date: "March 15, 2024",
      author: "Subham Pramanik",
      tags: ["React", "Next.js", "Web Development"],
      link: "/blog/getting-started-with-react"
    },
    {
      title: "Building Scalable Backend Applications",
      excerpt: "Explore best practices for building scalable backend applications using Node.js and Express.",
      date: "March 10, 2024",
      author: "Subham Pramanik",
      tags: ["Node.js", "Express", "Backend"],
      link: "/blog/building-scalable-backend"
    },
    {
      title: "Modern CSS Techniques and Best Practices",
      excerpt: "Discover modern CSS techniques, including Flexbox, Grid, and CSS-in-JS solutions for better styling.",
      date: "March 5, 2024",
      author: "Subham Pramanik",
      tags: ["CSS", "Frontend", "Styling"],
      link: "/blog/modern-css-techniques"
    }
  ];

  return (
    <BlogSection id="blog">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Latest Blog Posts
        </SectionTitle>
        <Grid>
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogImage />
              <BlogContent>
                <BlogTitle>{post.title}</BlogTitle>
                <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                <BlogMeta>
                  <MetaItem>
                    <FaCalendar /> {post.date}
                  </MetaItem>
                  <MetaItem>
                    <FaUser /> {post.author}
                  </MetaItem>
                  <MetaItem>
                    <FaTags /> {post.tags.join(', ')}
                  </MetaItem>
                </BlogMeta>
                <ReadMore href={post.link}>Read More →</ReadMore>
              </BlogContent>
            </BlogCard>
          ))}
        </Grid>
      </Container>
    </BlogSection>
  );
};

export default Blog; 