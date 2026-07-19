import { useEffect, useState } from 'react'
import { Container, Typography, Grid, Card, CardContent, Box, Avatar, Button, IconButton, useTheme } from '@mui/material'
import { Code, DesignServices, Psychology, Download, LinkedIn, GitHub, Email, Engineering } from '@mui/icons-material'
import { motion } from 'framer-motion'
import profile from '../assets/santhoshtech.png'

const About = () => {
  const [visible, setVisible] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    const aboutSection = document.getElementById('about')
    if (aboutSection) observer.observe(aboutSection)
    return () => observer.disconnect()
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const floatingAnimation = {
    y: [0, -10, 0], 
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  // Handle social icon clicks
  const handleSocialClick = (platform) => {
    switch(platform) {
      case 'linkedin':
      
        window.open('https://www.linkedin.com/in/santhosh-r-santhosh/', '_blank') 
        break
      case 'github':
       
        window.open('https://github.com/R-SANTHOSH03', '_blank')
        break
      case 'email':
       
        window.location.href = 'mailto:santhoshrpsanthosh@gmail.com'
        break
      default:
        break
    }
  }

  // Handle resume download
  const handleDownloadResume = () => {
    const link = document.createElement('a')
  
    link.href = 'https://drive.google.com/file/d/1xmo2pQ04Zak8sMMqxPcLxf8UjVcUIABc/view?usp=sharing' 
    link.download = 'Santhosh_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Particle generation for the "small ball dropdown" effect
  const renderParticles = () => {
    const particles = []
    for (let i = 0; i < 20; i++) { 
      particles.push(
        <motion.span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`, 
            backgroundColor: `rgba(0, 188, 212, ${0.3 + Math.random() * 0.7})`, 
            width: `${5 + Math.random() * 10}px`, 
            height: `${5 + Math.random() * 10}px`, 
          }}
          initial={{ opacity: 0, y: -20, scale: 0.5 }}
          animate={{ opacity: [0, 1, 0], y: [0, 200 + Math.random() * 300, 400 + Math.random() * 500], scale: [0.5, 1, 0.7] }}
          transition={{
            duration: 8 + Math.random() * 5, 
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: Math.random() * 5 
          }}
        />
      )
    }
    return particles
  }

  return (
    <section id="about" className={`section ${visible ? 'visible' : ''}`}>
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        {/* Title with animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            gutterBottom
            align="center"
            sx={{ 
              fontWeight: 'bold', 
              mb: { xs: 4, md: 8 },
              fontSize: { xs: '2.5rem', md: '3.75rem' },
              background: 'linear-gradient(45deg, #00bcd4, #00e5ff)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About <span style={{ color: '#00bcd4' }}>Me</span>
          </Typography>
        </motion.div>

        {/* Split container - Left side logo, Right side content */}
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" sx={{ mb: { xs: 5, md: 8 } }}>
          {/* Left side - Square/Rectangle Logo with enhanced animation */}
          <Grid size={{ xs: 12, md: 5 }}> 
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Box
                sx={{
                  position: 'relative',
                
                  width: '100%', 
                  maxWidth: 400, 
                  margin: '0 auto', 
                  p: { xs: 1.5, md: 2 }, 
                  borderRadius: '20px', 
                  background: 'rgba(0, 188, 212, 0.05)', 
                  boxShadow: '0 0 30px rgba(0, 188, 212, 0.2)', 
                  border: '1px solid rgba(0, 188, 212, 0.1)',
                  transition: 'all 0.5s ease-in-out',
                  '&:hover': {
                    boxShadow: '0 0 50px rgba(0, 188, 212, 0.4)',
                    transform: 'scale(1.01)',
                  },
                  '&::before': { 
                    content: '""',
                    position: 'absolute',
                    top: '-20px',
                    left: '-20px',
                    right: '-20px',
                    bottom: '-20px',
                    borderRadius: '25px',
                    zIndex: 0,
                    background: 'radial-gradient(circle, rgba(0,188,212,0.3) 0%, transparent 70%)',
                    animation: 'pulse 4s infinite cubic-bezier(0.4, 0, 0.6, 1)',
                  },
                  '&::after': { 
                    content: '""',
                    position: 'absolute',
                    top: '-8px',
                    left: '-8px',
                    right: '-8px',
                    bottom: '-8px',
                    background: 'linear-gradient(45deg, transparent, rgba(0, 188, 212, 0.15), transparent)',
                    borderRadius: '18px',
                    zIndex: 1,
                  }
                }}
              >
                {/* Floating Image */}
                <motion.div
                  animate={floatingAnimation}
                  style={{
                    position: 'relative',
                    zIndex: 2, 
                  }}
                >
                  <Box
                    component="img"
                    src={profile}
                    sx={{
                      width: '100%', 
                      height: 'auto', 
                      borderRadius: '15px',
                      border: '6px solid rgba(255, 255, 255, 0.15)', 
                      boxShadow: '0 20px 40px rgba(0, 188, 212, 0.35)', 
                      objectFit: 'cover', 
                      display: 'block', 
                    
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        borderColor: '#00e5ff',
                        boxShadow: '0 25px 50px rgba(0, 188, 212, 0.5)',
                      }
                    }}
                    alt="Santhosh Tech Logo"
                  />
                </motion.div>
                
                {/* "Small ball dropdown" particles effect */}
                <Box sx={{
                  position: 'absolute',
                  top: '-10%', 
                  left: '-10%',
                  width: '120%',
                  height: '120%',
                  zIndex: 0, 
                  overflow: 'hidden',
                  pointerEvents: 'none', 
                }}>
                  {renderParticles()}
                </Box>

                {/* Name and Title */}
                <Box sx={{ textAlign: 'center', mt: 4, position: 'relative', zIndex: 3 }}> 
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#00bcd4', mb: 1, textShadow: '0 0 8px rgba(0, 188, 212, 0.4)', fontSize: { xs: '1.6rem', sm: '2rem', md: '2.125rem' } }}>
                      SANTHOSH R
                    </Typography>
                    <Typography variant="h6" sx={{ 
                      color: '#00bcd4', 
                      background: 'rgba(0, 188, 212, 0.15)', 
                      padding: { xs: '6px 14px', md: '8px 18px' }, 
                      borderRadius: '25px', 
                      display: 'inline-block',
                      fontWeight: 'bold',
                      letterSpacing: '1px', 
                      textTransform: 'uppercase', 
                      border: '1px solid rgba(0, 188, 212, 0.3)',
                      fontSize: { xs: '0.85rem', md: '1.25rem' }
                    }}>
                      FULL STACK DEVELOPER
                    </Typography>
                  </motion.div>

                  {/* Resume Download Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Button
                      variant="outlined"
                      startIcon={<Download />}
                      onClick={handleDownloadResume}
                      sx={{
                        mt: 3,
                        color: '#00e5ff', 
                        borderColor: '#00e5ff',
                        borderRadius: '30px', 
                        padding: { xs: '10px 24px', md: '12px 35px' }, 
                        fontWeight: 'bold',
                        fontSize: { xs: '0.9rem', md: '1rem' }, 
                        '&:hover': {
                          backgroundColor: 'rgba(0, 229, 255, 0.15)', 
                          borderColor: '#00e5ff',
                          transform: 'translateY(-3px)', 
                          boxShadow: '0 8px 16px rgba(0, 229, 255, 0.4)' 
                        },
                        transition: 'all 0.3s ease-in-out' 
                      }}
                    >
                      Download Resume
                    </Button>
                  </motion.div>

                  {/* Social Icons */}
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap: 2 }}>
                    {[
                      { icon: <LinkedIn />, platform: 'linkedin', delay: 0.5 },
                      { icon: <GitHub />, platform: 'github', delay: 0.6 },
                      { icon: <Email />, platform: 'email', delay: 0.7 }
                    ].map((social, index) => (
                      <motion.div
                        key={social.platform}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: social.delay }}
                        whileHover={{ scale: 1.2, y: -5, boxShadow: '0 8px 16px rgba(0, 229, 255, 0.4)' }} 
                      >
                        <IconButton 
                          onClick={() => handleSocialClick(social.platform)}
                          sx={{ 
                            color: '#00e5ff',
                            backgroundColor: 'rgba(0, 229, 255, 0.1)', 
                            borderRadius: '15px',
                            padding: { xs: '10px', md: '14px' }, 
                            '&:hover': {
                              backgroundColor: 'rgba(0, 229, 255, 0.2)',
                              transform: 'translateY(-3px)',
                              boxShadow: '0 6px 12px rgba(0, 229, 255, 0.3)'
                            },
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right side - Text content with enhanced animation */}
          <Grid size={{ xs: 12, md: 7 }}> 
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  p: { xs: 2.5, sm: 3, md: 4 },
                  borderRadius: '15px',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,188,212,0.08) 100%)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 10px 35px rgba(0,0,0,0.2)',
                  border: '1px solid rgba(0, 188, 212, 0.15)',
                  transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 15px 45px rgba(0, 188, 212, 0.4)',
                  },
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    background: 'linear-gradient(90deg, #00bcd4, #00e5ff)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.5s ease',
                  },
                  '&:hover::before': {
                    transform: 'scaleX(1)',
                  }
                }}
              >
                <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
                  <Typography
                    variant="h6"
                    paragraph
                    sx={{
                      textAlign: { xs: 'left', md: 'justify' },
                      lineHeight: 1.8,
                      mb: 3,
                      fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.25rem' }
                    }}
                  >
                    Hi, I'm <b style={{ color: '#00bcd4' }}>Santhosh</b>, a passionate{' '}
                    <b style={{ color: '#00bcd4' }}>Full Stack Developer</b> and{' '}
                    <b style={{ color: '#00bcd4' }}>Cloud Enthusiast</b> with a strong focus on{' '}
                    <b style={{ color: '#00bcd4' }}>UI/UX design</b> and building attractive,
                    user-friendly interfaces. I specialize in modern frameworks like{' '}
                    <b style={{ color: '#00bcd4' }}>Next.js</b> and{' '}
                    <b style={{ color: '#00bcd4' }}>Nest.js</b>, crafting scalable, responsive
                    web applications across the full stack.
                  </Typography>

                  <Typography
                    variant="h6"
                    paragraph
                    sx={{
                      textAlign: { xs: 'left', md: 'justify' },
                      lineHeight: 1.8,
                      mb: 3,
                      fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.25rem' }
                    }}
                  >
                    Currently working on multiple real-time client projects, contributing to
                    end-to-end application development across frontend and backend. I build
                    responsive, mobile-first interfaces with Tailwind CSS and Material UI,
                    design and implement RESTful APIs with NestJS, and manage PostgreSQL
                    databases using Supabase — including authentication, schemas, and CRUD
                    operations. I also integrate secure payment gateways and email
                    notification systems for authentication, order processing, and
                    transactional emails.
                  </Typography>

                  <Typography
                    variant="h6"
                    paragraph
                    sx={{
                      textAlign: { xs: 'left', md: 'justify' },
                      lineHeight: 1.8,
                      mb: 3,
                      fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.25rem' }
                    }}
                  >
                   My workflow includes unit and manual testing, debugging, code reviews,
                    Git/GitHub version control, and Agile development practices.
                  </Typography>

                  {/* Animated skill tags */}
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: '#00bcd4',
                      fontWeight: 'bold',
                      mb: 1.5,
                      fontSize: { xs: '1rem', md: '1.15rem' },
                      letterSpacing: '0.5px'
                    }}
                  >
                    Technologies Used
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1, md: 1.5 }, mt: 1 }}>
                    {['Next.js','React','Nest.JS','TypeScript','Tailwind CSS','Material UI','Supabase','PostgreSQL','Prisma','REST API','Git','GitHub','Email Integration','Payment Gateway','Unit Testing','Manual Testing','JWT','UI/UX Design'].map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: index * 0.02 }} 
                        whileHover={{ scale: 1.15, y: -3, boxShadow: '0 4px 10px rgba(0, 188, 212, 0.3)' }} 
                        style={{
                          background: 'linear-gradient(45deg, rgba(0, 188, 212, 0.15), rgba(0, 188, 212, 0.25))',
                          color: '#00e5ff', 
                          padding: '7px 16px', 
                          borderRadius: '20px',
                          fontSize: '13px',
                          fontWeight: 'bold',
                          border: '1px solid rgba(0, 188, 212, 0.3)',
                          cursor: 'default',
                          textShadow: '0 0 5px rgba(0, 229, 255, 0.2)',
                          transition: 'all 0.2s ease-in-out'
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
               {/* Skills cards with enhanced animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{ 
              mb: { xs: 4, md: 6 },
              fontWeight: 'bold',
              fontSize: { xs: '2rem', md: '3rem' },
              background: 'linear-gradient(45deg, #00bcd4, #00e5ff)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            What I Do
          </Typography>
          
          <Grid container spacing={4}>
            {[
              {
                icon: <Code sx={{ fontSize: 50, color: '#00bcd4', mb: 1 }} />,
                title: 'Web Development',
                desc: 'Building end-to-end web applications with modern technologies.',
                color: '#00bcd4',
                hoverEffect: {
                  scale: 1.03,
                  y: -5,
                  boxShadow: "0 15px 35px rgba(0, 188, 212, 0.4)"
                }
              },
              
              {
                icon: <Engineering sx={{ fontSize: 50, color: '#00bcd4', mb: 1 }} />,
                title: 'Cloud Solutions',
                desc: 'Deploying and managing applications on AWS cloud infrastructure',
                color: '#00bcd4',
                hoverEffect: {
                  scale: 1.03,
                  y: -5,
                  boxShadow: "0 15px 35px rgba(0, 188, 212, 0.4)"
                }
              },
              {
                icon: <DesignServices sx={{ fontSize: 50, color: '#00bcd4', mb: 1 }} />,
                title: 'UI/UX Design',
                desc: 'Creating user-friendly interfaces with modern design principles and responsive layouts',
                color: '#00bcd4',
                hoverEffect: {
                  scale: 1.03,
                  y: -5,
                  boxShadow: "0 15px 35px rgba(0, 188, 212, 0.4)"
                }
              },
            ].map((card, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}> 
                <motion.div
                  variants={itemVariants}
                  whileHover={card.hoverEffect}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      textAlign: 'center',
                      p: { xs: 3, md: 4 },
                      height: '100%', // Ensures the card fills the height of its grid item
                      borderRadius: '15px',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,188,212,0.05) 100%)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: `0 5px 20px rgba(0, 188, 212, 0.2)`,
                      transition: 'all 0.4s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      border: '1px solid rgba(0, 188, 212, 0.1)',
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '4px',
                        background: `linear-gradient(90deg, ${card.color}, transparent)`,
                        transform: 'translateX(-100%)',
                        transition: 'transform 0.6s ease'
                      },
                      '&:hover:before': {
                        transform: 'translateX(0)'
                      }
                    }}
                  >
                    <CardContent>
                      <motion.div
                        whileHover={{ 
                          rotateY: 360, 
                          transition: { duration: 0.8 }
                        }}
                      >
                        {card.icon}
                      </motion.div>
                      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, mt: 2, color: '#00bcd4', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                        {card.title}
                      </Typography>
                      
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'text.secondary', 
                          lineHeight: 1.6,
                          fontSize: { xs: '0.9rem', md: '1rem' },
                          minHeight: { xs: 'auto', md: '72px' } // Adjust minHeight as needed, e.g., for 3 lines of text
                        }}
                      >
                        {card.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 0.4; } 
          100% { transform: scale(1); opacity: 0.7; }
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          filter: blur(2px); /* Soften the particles */
          opacity: 0;
          pointer-events: none;
        }
      `}</style>
    </section>
  )
}

export default About