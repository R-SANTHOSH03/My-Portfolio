import { useEffect, useState } from 'react';
import { Container, Typography, Box, Grid, LinearProgress, Chip } from '@mui/material';
import { keyframes } from '@mui/system';

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(0, 188, 212, 0.5); }
  50% { box-shadow: 0 0 20px rgba(0, 188, 212, 0.8); }
  100% { box-shadow: 0 0 5px rgba(0, 188, 212, 0.5); }
`;

const Skills = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    observer.observe(document.getElementById('skills'));
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "Next.js", level: 90 },
        { name: "React", level: 80 },
        { name: "JavaScript", level: 80 }, 
        { name: "HTML / CSS", level: 90 },
        { name: "Material-UI", level: 80 },
        { name: "Tailwindcss", level: 80 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Nest.js", level: 80 },
        { name: "Java", level: 80 },
        { name: "supabase", level: 80 },
        { name: "spring boot", level: 60 },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "Oracle SQL", level: 85 },
        { name: "Postgre SQL", level: 85 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
         { name: "AWS Cloud", level: 75 },
        { name: "Git / Github", level: 85 },
        { name: "UI UX Design", level: 75 },
        { name: "Prisma ORM", level: 85 },
        { name: "Swagger API", level: 85 },
       
      ]
    }
  ];

  return (
    <section id="skills">
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 6, fontSize: { xs: '2.5rem', md: '3.75rem' } }}>
          My <span style={{ color: '#00bcd4' }}>Skills</span>
        </Typography>
        
        <Grid container spacing={4}>
          {skillCategories.map((category, categoryIndex) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={categoryIndex}>
              <Box 
                sx={{ 
                  p: 3, 
                  borderRadius: 4, 
                  bgcolor: 'background.paper',
                  cursor:"pointer",
                 
                    boxShadow: '0 0 2px 1px rgba(27, 131, 176, 0.6)', 
                  transition: 'all 0.4s ease',
                  animation: visible ? `${fadeIn} 0.6s ease-out ${categoryIndex * 0.1}s both` : 'none',
                  position: 'relative',
                  overflow: '',
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #00bcd4, #3a7bd5)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.4s ease'
                  },
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                    '&:before': {
                      transform: 'scaleX(1)'
                    },
                    animation: `${float} 2s ease-in-out infinite, ${glow} 2s infinite`
                  }
                }}
              >
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  align="center" 
                  sx={{ 
                    color: 'primary.main', 
                    fontWeight: 600,
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:before, &:after': {
                      content: '""',
                      flex: 1,
                      height: '1px',
                      background: 'linear-gradient(90deg, transparent, rgba(0, 188, 212, 0.5))',
                      mr: 2
                    },
                    '&:after': {
                      background: 'linear-gradient(90deg, rgba(0, 188, 212, 0.5), transparent)',
                      ml: 2,
                      mr: 0
                    }
                  }}
                >
                  {category.title}
                </Typography>
                {category.skills.map((skill, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body1">{skill.name}</Typography>
                      <Typography variant="body2" color="text.secondary">{skill.level}%</Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={skill.level} 
                      sx={{ 
                        height: 8, 
                        borderRadius: 4,
                        backgroundColor: 'rgba(86, 73, 73, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 4,
                          background: 'linear-gradient(90deg, #00bcd4, #3a7bd5)',
                          transition: 'transform 1.5s ease-in-out'
                        }
                      }} 
                    />
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography 
            variant="h5" 
            gutterBottom 
            color="primary" 
            sx={{ 
              fontWeight: 600,
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              '&:before, &:after': {
                content: '""',
                flex: 1,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(0, 188, 212, 0.5))',
                mr: 2
              },
              '&:after': {
                background: 'linear-gradient(90deg, rgba(0, 188, 212, 0.5), transparent)',
                ml: 2,
                mr: 0
              }
            }}
          >
            Additional Technologies
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
            {['Vercel',"Figma",'photoshop', 'Render', 'Netlify', 'adobe xd', 'REST APIs', 'canva', 'lightroom','Unit testing ','Ai video editing '].map((tech, index) => (
              <Chip 
                key={index} 
                label={tech} 
                variant="outlined" 
                sx={{ 
                  cursor:"pointer",
                  color: 'text.primary', 
                  borderColor: 'primary.main',
                  transition: 'all 0.3s ease',
                  animation: visible ? `${fadeIn} 0.5s ease-out ${index * 0.1}s both` : 'none',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 5px 15px rgba(0, 188, 212, 0.3)'
                  }
                }} 
              />
            ))}
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Skills;