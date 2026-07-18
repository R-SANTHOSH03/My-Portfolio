import { useEffect, useState } from 'react'
import { Container, Typography, Box, Button, Grid, IconButton } from '@mui/material'
import { KeyboardArrowDown, LinkedIn, GitHub, Twitter, Mail } from '@mui/icons-material' 
import logo from '../assets/me.jpg' 

const Home = () => {
  const [visible, setVisible] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const [showText, setShowText] = useState(false); 
  const texts = ['Full Stack Developer...', 'Web Developer...','Cloud Enthusiast...', 'Problem Solver....']

  useEffect(() => {
    setVisible(true) 

    // Handle typing animation sequence
    setShowText(false); 
    const typingTimeout = setTimeout(() => {
      setShowText(true); 
    }, 100); 

    const interval = setInterval(() => {
      setShowText(false); 
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setShowText(true); 
      }, 50); 
    }, 3500); 

    return () => {
      clearInterval(interval);
      clearTimeout(typingTimeout);
    };
  }, [textIndex]); 

  const socialLinks = [
    { icon: <LinkedIn />, url: 'https://www.linkedin.com/in/santhosh-r-santhosh/', label: 'LinkedIn' },
    { icon: <GitHub />, url: 'https://github.com/R-SANTHOSH03', label: 'GitHub' },
    { icon: <Mail />, url: 'mailto:santhoshrpsanthosh@gmail.com', label: 'Email' },
   
  ];


  return (
    <section id="home" className={`section ${visible ? 'visible' : ''}`}>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center" style={{ minHeight: '90vh' }}>
          {/* LEFT SIDE */}
          <Grid size={{ xs: 12, md: 6 }}> 
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
              Hi, I'm <span style={{ color: '#00bcd4' }}>SANTHOSH </span>
            </Typography>

            <Box sx={{
                height: '48px', 
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden', 
                mb:2 
            }}>
                <Typography
                    key={textIndex} 
                    variant="h4"
                    gutterBottom
                    sx={{
                        fontWeight: '500',
                        color: '#c8bcdaff',
                        fontFamily: 'Poppins, sans-serif',
                        borderRight: showText ? '.15em solid #00bcd4' : 'transparent', 
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        width: showText ? '100%' : '0', 
                        animation: showText ? 'typing 2s steps(30, end) forwards, blink .75s step-end infinite' : 'none',
                    }}
                >
                    {texts[textIndex]}
                </Typography>
            </Box>


            <Typography variant="h6" paragraph sx={{ my: 3, mb: 5 }}>
              I create amazing web experiences with modern technologies.
              Passionate about clean code and intuitive design.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}> 
              <Button
                variant="contained"
                size="large"
                sx={{ borderRadius: '8px', fontWeight: 600, py: 1.5, px: 3, transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'translateY(-3px)' } }}
                onClick={() =>
                  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
                }
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{ borderRadius: '8px', fontWeight: 600, py: 1.5, px: 3, borderColor: '#00bcd4', color: '#00bcd4', transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'translateY(-3px)', backgroundColor: 'rgba(0,188,212,0.1)' } }}
                onClick={() =>
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
                }
              >
                Contact Me
              </Button>
            </Box>

            {/* Social Icons */}
            <Box sx={{ mt: 4, display: 'flex', gap: 1 }}>
                {socialLinks.map((link) => (
                    <IconButton
                        key={link.label}
                        aria-label={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: '#00bcd4',
                            fontSize: '2rem',
                            transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out',
                            '&:hover': {
                                color: '#673ab7',
                                transform: 'scale(1.2) translateY(-2px)', 
                            },
                        }}
                    >
                        {link.icon}
                    </IconButton>
                ))}
            </Box>
          </Grid>

          {/* RIGHT SIDE (IMAGE) */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', order: { xs: -1, md: 1 } }}> 
            <Box
              sx={{
                background: 'linear-gradient(145deg, #00bcd4, #673ab7)',
                borderRadius: '50%',
                width: { xs: '220px', sm: '280px', md: '320px' }, 
                height: { xs: '220px', sm: '280px', md: '320px' }, 
                position: 'relative',
                animation: 'pulseGlow 3s infinite ease-in-out',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 0 25px rgba(0,188,212,0.5)',
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Profile"
                sx={{
                  width: '90%',
                  height: '90%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid #121212',
                 
                  transition: 'transform 0.4s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>


        {/* DOWN ARROW */}
        <Box textAlign="center" mt={1}>
          <Button
            onClick={() =>
              document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
            }
            sx={{
                animation: 'bounceArrow 2s infinite', 
                '&:hover': {
                    backgroundColor: 'transparent', 
                }
            }}
          >
            <KeyboardArrowDown sx={{ fontSize: 45, color: '#00bcd4' }} /> 
          </Button>
        </Box>
      </Container>

      {/* Global Styles for Keyframes */}
      <style>
        {`
          @keyframes pulseGlow {
            0% { transform: scale(1); box-shadow: 0 0 20px rgba(0,188,212,0.6); }
            50% { transform: scale(1.05); box-shadow: 0 0 35px rgba(103,58,183,0.7); }
            100% { transform: scale(1); box-shadow: 0 0 20px rgba(0,188,212,0.6); }
          }

          @keyframes rotateLogo {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }

          @keyframes blink {
            50% { border-color: transparent }
          }

          @keyframes bounceArrow {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }

          /* General section visible animation */
          .section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }
          .section.visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
    </section>
  )
}

export default Home