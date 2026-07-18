import { useEffect, useState } from 'react'
import { Container, Typography, Box, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material'
import { Verified, ArrowForward } from '@mui/icons-material'

const Certificates = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    
    observer.observe(document.getElementById('certificates'))
    return () => observer.disconnect()
  }, [])

  const certificates = [
     {
      title: "AWS re/Start Graduate",
      issuer: "Amazon Web Services (AWS)",
      date: "November 2024",
      description: "Certified AWS Restart Graduate with hands-on experience in cloud services, committed to building secure and cost-effective cloud solutions.",
      credentialUrl: "https://www.credly.com/badges/94297d4e-464e-41e4-976d-8b137a24a7a8/linked_in_profile?trk=public_profile_see-credential",
      color: "#339933"
    },
    {
      title: "Certified AWS Cloud Practitioner",
      issuer: "EduBridge Learning Pvt. Ltd.",
      date: "October 2024",
      description: "AWS Cloud Practitioner with foundational expertise in cloud architecture, security, and cost-optimized solutions.",
      credentialUrl: "https://www.edubridgeindia.com/certificate-detail?enrollment_number=EBEON0624923059&trk=public_profile_see-credential",
      color: "#FF9900"
    },
    {
      title: "Java full stack developer",
      issuer: "Greens Technologys",
      date: "June 2025",
      description: "Java Full Stack Developer skilled in building scalable web applications with expertise in Java, Spring Boot, React, and modern databases.",
      credentialUrl: "#",
      color: "#5aa8c0ff"
    },
    {
      title: "Artificial Intelligence Internship",
      issuer: "Neznova",
      date: "May 2025",
      description: "AI Intern with basic knowledge of machine learning concepts, data handling, and model development.",
      credentialUrl: "#",
      color: "#3d575bff"
    },
   
    {
      title: "AWS Cloud Quest: Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "Sep 2024",
      description: "AWS Cloud Quest certified learner with hands-on experience in building real-world cloud solutions through gamified challenges.",
      credentialUrl: "https://www.credly.com/badges/34117a41-96d5-409a-ac07-86354726b57e/linked_in_profile?trk=public_profile_see-credential",
      color: "#47A248"
    },
    {
      title: "SQL certificate",
      issuer: "HackerRank",
      date: "Dec 2024",
      description: "SQL Certified professional with strong knowledge of database design, querying, and optimization.",
      credentialUrl: "https://www.hackerrank.com/certificates/30388edc0fc4",
      color: "#4285F4"
    },
     {
      title: "Python certificate",
      issuer: "HackerRank",
      date: "Oct 2024",
      description: "Familiar with Python fundamentals including data types, control structures, and file handling",
      credentialUrl: "https://www.hackerrank.com/certificates/2f186799c41e",
      color: "#dd5b5bff"
    },
    {
      title: "CSS certificate",
      issuer: "HackerRank",
      date: "Jun 2025",
      description: "Proficient in CSS for creating responsive, user-friendly, and visually appealing web designs.",
      credentialUrl: "https://www.hackerrank.com/certificates/85a72acbeb25",
      color: "#82c826ff"
    },
    {
      title: "UI/UX design certificate",
      issuer: "udemy",
      date: "Aug 2024",
      description: "Hands-on experience in UI/UX principles, focusing on usability, accessibility, and clean design",
      credentialUrl: "#",
      color: "#e86baaff"
    },
  ]

  return (
    <section id="certificates" className={`section ${visible ? 'visible' : ''}`}>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 6, fontSize: { xs: '2.5rem', md: '3.75rem' } }}>
          Certifications & <span style={{ color: '#00bcd4' }}>Credentials</span>
        </Typography>
        
        <Grid container spacing={4}>
          {certificates.map((cert, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <Card 
                className={`certificate-card ${visible ? 'animate-in' : ''}`}
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  bgcolor: 'background.paper',
                  transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor:"pointer",
                  opacity: 0,
                  transform: 'translateY(50px) rotate(3deg)',
                  animation: 'fadeIn 0.6s forwards',
                  animationDelay: `${index * 0.1}s`,
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '5px',
                    background: `linear-gradient(90deg, ${cert.color}, #00bcd4)`,
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.5s ease'
                  },
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    '&:before': {
                      transform: 'scaleX(1)'
                    },
                    '& .card-icon': {
                      transform: 'scale(1.2) rotate(10deg)',
                      color: cert.color
                    },
                    '& .view-button': {
                      backgroundColor: cert.color,
                      color: 'white',
                      transform: 'translateX(5px)'
                    }
                  }
                }}
              >
                <CardContent sx={{ 
                  flexGrow: 1, 
                  position: 'relative',
                  padding: '24px',
                  '&:last-child': {
                    paddingBottom: '24px'
                  }
                }}>
                  <Box
                    className="card-icon"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      color: 'primary.main',
                      transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
                      fontSize: '2.5rem',
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                    }}
                  >
                    <Verified fontSize="inherit" />
                  </Box>
                  <Box sx={{ mb: 2, pr: 4 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
                      {cert.title}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                      {cert.issuer}
                    </Typography>
                  </Box>
                  <Chip 
                    label={cert.date} 
                    size="small" 
                    variant="outlined" 
                    sx={{ 
                      mb: 2, 
                      borderColor: 'primary.main',
                      backgroundColor: 'rgba(0, 188, 212, 0.1)',
                      fontWeight: 500,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 188, 212, 0.2)'
                      }
                    }} 
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {cert.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ 
                  padding: '16px 24px 24px',
                  justifyContent: 'flex-end'
                }}>
                  <Button 
                    className="view-button"
                    size="small" 
                    endIcon={<ArrowForward />}
                    onClick={() => window.open(cert.credentialUrl, '_blank')}
                    sx={{
                      fontWeight: 600,
                      color: 'primary.main',
                      transition: 'all 0.3s ease',
                      borderRadius: '20px',
                      padding: '6px 16px',
                      '& .MuiButton-endIcon': {
                        transition: 'transform 0.3s ease'
                      },
                      '&:hover': {
                        '& .MuiButton-endIcon': {
                          transform: 'translateX(4px)'
                        }
                      }
                    }}
                  >
                    View Credential
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <style jsx global>{`
          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: translateY(0) rotate(0);
            }
          }
          
          .certificate-card {
            transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          }
          
          .certificate-card:hover {
            transform: translateY(-12px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          }
          
          .certificate-card:hover:before {
            transform: scaleX(1);
          }
          
          .certificate-card.animate-in {
            animation: fadeIn 0.6s forwards;
          }
          
          .certificate-card:nth-child(1) { animation-delay: 0.1s; }
          .certificate-card:nth-child(2) { animation-delay: 0.2s; }
          .certificate-card:nth-child(3) { animation-delay: 0.3s; }
          .certificate-card:nth-child(4) { animation-delay: 0.4s; }
          .certificate-card:nth-child(5) { animation-delay: 0.5s; }
          .certificate-card:nth-child(6) { animation-delay: 0.6s; }
        `}</style>
      </Container>
    </section>
  )
}

export default Certificates