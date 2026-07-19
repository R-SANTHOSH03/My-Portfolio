import { useEffect, useState } from 'react'
import { Container, Typography, Box, Paper, useTheme, useMediaQuery } from '@mui/material'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab'
import { School } from '@mui/icons-material'
import { motion } from 'framer-motion'

const Education = () => {
  const [visible, setVisible] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  useEffect(() => {
    const section = document.getElementById('education')
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const educationData = [
    {
      degree: 'B.E - Computer Science Engineering',
      institution: 'SSM Institute of Engineering and Technology',
      year: '2020-2024',
      description: 'CGPA : 7.6 /10'
    },
    {
      degree: 'Higher Secondary Certificate',
      institution: 'Shantinikethan Higher Secondary School',
      year: '2018-2020'
    },
    {
      degree: 'Secondary School Leaving Certificate',
      institution: 'Shantinikethan Higher Secondary School',
      year: '2017-2018'
    }
  ]

  return (
    <section id="education" className={`section ${visible ? 'visible' : ''}`}>
      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            gutterBottom
            align="center"
            sx={{ fontWeight: 'bold', mb: 6, fontSize: { xs: '2.5rem', md: '3.75rem' } }}
          >
            Education & <span style={{ color: '#00bcd4' }}>Qualifications</span>
          </Typography>
        </motion.div>

        {/* Timeline */}
        <Timeline 
          position={isMobile ? 'right' : 'alternate'} 
          sx={{ 
            mt: 4, 
            px: { xs: 0, md: 2 },
            ...(isMobile && {
              [`& .MuiTimelineItem-root:before`]: {
                flex: 0,
                padding: 0,
              },
            }),
          }}
        >
          {educationData.map((edu, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  <School />
                </TimelineDot>
                {index < educationData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ px: { xs: 1.5, sm: 2 } }}>
                <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'center' } }}>
                  <motion.div
                    style={{ width: '100%', display: 'flex', justifyContent: isMobile ? 'flex-start' : 'center' }}
                    initial={{ opacity: 0, scale: 0.8, y: 40 }}
                    animate={visible ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: { xs: 2, md: 4 },
                        cursor:"pointer",
                        width: '100%',
                        maxWidth: 520,
                        borderRadius: 4,
                        background: '#1c1c1c', 
                        
                       boxShadow: '0 0 2px 2px rgba(27, 131, 176, 0.6)',
                        transition: 'all 0.4s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(8px) scale(1)',
                          boxShadow: '0 0 25px 6px rgba(0, 188, 212, 0.6)', 
                          background: '#1e1e1e', 
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          color: '#fff',
                          fontWeight: 'bold',
                        }}
                      >
                        {edu.degree}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        sx={{ fontStyle: 'italic', color: '#00bcd4' }} // Accent cyan
                      >
                        {edu.institution}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#ccc' }} paragraph>
                        {edu.year}
                      </Typography>
                      {edu.description && (
                        <Typography variant="body2" sx={{ fontWeight: 500, color: '#e0e0e0' }}>
                          {edu.description}
                        </Typography>
                      )}
                    </Paper>


                  </motion.div>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </section>
  )
}

export default Education
