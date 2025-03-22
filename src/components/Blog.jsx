import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaCalendar, FaTag } from 'react-icons/fa';

const BlogSection = styled.section`
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

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const BlogCard = styled(motion.article)`
  background: rgba(17, 34, 64, 0.7);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
  border: 1px solid rgba(100, 255, 218, 0.1);

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(100, 255, 218, 0.3);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 25px;
`;

const BlogTitle = styled.h3`
  color: #e6f1ff;
  font-size: 1.5rem;
  margin-bottom: 15px;
  
  &:hover {
    color: #64ffda;
  }
`;

const BlogMeta = styled.div`
  display: flex;
  gap: 20px;
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 15px;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const BlogExcerpt = styled.p`
  color: #8892b0;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ReadMore = styled.a`
  color: #64ffda;
  text-decoration: none;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

// Static blog data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt: "Learn how to use React Hooks to manage state and side effects in your functional components.",
    date: "2024-03-15",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    link: "/blog/react-hooks"
  },
  {
    id: 2,
    title: "Building Scalable Node.js Applications",
    excerpt: "Best practices and patterns for building scalable and maintainable Node.js applications.",
    date: "2024-03-10",
    category: "Node.js",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800",
    link: "/blog/nodejs-scalability"
  },
  {
    id: 3,
    title: "Modern CSS Techniques",
    excerpt: "Explore modern CSS techniques like Grid, Flexbox, and CSS Variables for better web layouts.",
    date: "2024-03-05",
    category: "CSS",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800",
    link: "/blog/modern-css"
  }
];

const Blog = () => {
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

        <BlogGrid>
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <BlogImage src={post.image} alt={post.title} />
              <BlogContent>
                <BlogTitle>{post.title}</BlogTitle>
                <BlogMeta>
                  <MetaItem>
                    <FaCalendar />
                    {new Date(post.date).toLocaleDateString()}
                  </MetaItem>
                  <MetaItem>
                    <FaTag />
                    {post.category}
                  </MetaItem>
                </BlogMeta>
                <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                <ReadMore href={post.link}>
                  Read More →
                </ReadMore>
              </BlogContent>
            </BlogCard>
          ))}
        </BlogGrid>
      </Container>
    </BlogSection>
  );
};

export default Blog; 