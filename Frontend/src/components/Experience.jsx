import { useEffect, useState } from 'react'
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails, Chip } from '@mui/material'
import { ExpandMore, Work, CorporateFare, CalendarToday } from '@mui/icons-material'
import { keyframes } from '@mui/system'

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`

const slideIn = keyframes`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(0, 188, 212, 0.3); }
  50% { box-shadow: 0 0 15px rgba(0, 188, 212, 0.5); }
  100% { box-shadow: 0 0 5px rgba(0, 188, 212, 0.3); }
`

const Experience = () => {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(document.getElementById('experience'))
    return () => observer.disconnect()
  }, [])

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const experiences = [
    {
      company: "Highonswift",
      position: "Junior Full Stack Developer",
      period: "Nov 2025 - Present",
      description:
        "Working on multiple real-time client projects, contributing to end-to-end application development across frontend and backend. Building scalable, responsive web applications using modern JavaScript frameworks, integrating third-party services, optimizing user experience, and collaborating with cross-functional teams throughout the software development lifecycle.",

      responsibilities: [
        "Developed and maintained multiple real-time client projects using Next.js, NestJS, React, and modern web technologies.",
        "Built responsive, mobile-first user interfaces using Tailwind CSS and Material UI with a strong focus on UI/UX best practices.",
        "Designed and implemented RESTful APIs using NestJS and integrated frontend applications with backend services.",
        "Designed and managed PostgreSQL databases using Supabase, including authentication, database schemas, and CRUD operations.",
        "Integrated secure payment gateways and email notification systems for user authentication, order processing, and transactional emails.",
        "Collaborated with designers, developers, and stakeholders to deliver high-quality features within project deadlines.",
        "Optimized application performance, accessibility, SEO, and cross-browser compatibility for production deployments.",
        "Performed unit testing, manual testing, debugging, and bug fixing to ensure application reliability and maintainability.",
        "Participated in code reviews, version control using Git/GitHub, and Agile development practices."
      ],

      technologies: [
        "Next.js",
        "React",
        "NestJS",
        "TypeScript",
        "Tailwind CSS",
        "Material UI",
        "Supabase",
        "PostgreSQL",
        "Prisma",
        "REST API",
        "Git",
        "GitHub",
        "Render",
        "Email Integration",
        "Payment Gateway",
        "Unit Testing",
        "Manual Testing"
      ]
    },
    {
      company: "Highonswift",
      position: "Full Stack Developer intern",
      period: "June-2025 - October-2025",
      description: "Contributed to the development of web applications using React and Node.js",
      responsibilities: [
        "Designed and implemented responsive frontend interfaces using React and Material-UI",
        "Developed RESTful APIs with Node.js and Express for seamless data management",
        "Created database schemas and implemented CRUD operations with MongoDB",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Material-UI", "render"]
    },
    {
      company: " Neznova",
      position: "Artificial Intelligence Intern",
      period: "May-2025 -June-2025",
      description: "Developed AI solutions and machine learning models for various projects with focus on practical applications",
      responsibilities: [
        " Built AI tools that solve real problems",

        "Made machine learning models work better",

        "Created reusable code for data processing",

        "Worked with different data sources and APIs"
      ],
      technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "NumPy"]
    },

  ]

  return (
    <section id="experience" className={`section ${visible ? 'visible' : ''}`}>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 6, fontSize: { xs: '2.5rem', md: '3.75rem' } }}>
          Work <span style={{ color: '#00bcd4' }}>Experience</span>
        </Typography>

        <Box>
          {experiences.map((exp, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              sx={{
                mb: 3,
                bgcolor: 'background.paper',
                borderRadius: '12px !important',
                overflow: 'hidden',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.4s ease',
                animation: visible ? `${fadeIn} 0.6s ease-out ${index * 0.2}s both` : 'none',
                '&:before': { display: 'none' },
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 30px rgba(0, 188, 212, 0.15)',
                  animation: `${pulse} 2s ease-in-out infinite`
                }
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore color="primary" sx={{ fontSize: '2rem' }} />}
                sx={{
                  borderLeft: '5px solid',
                  borderColor: 'primary.main',
                  padding: '20px',
                  minHeight: '80px !important',
                  '& .MuiAccordionSummary-content': {
                    alignItems: 'center',
                    margin: '0 !important'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  <Box sx={{
                    width: { xs: 45, md: 60 },
                    height: { xs: 45, md: 60 },
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: { xs: 2, md: 3 },
                    animation: `${pulse} 3s ease-in-out infinite`,
                    boxShadow: '0 4px 15px rgba(0, 188, 212, 0.3)'
                  }}>
                    <Work sx={{ color: 'white', fontSize: { xs: '22px', md: '28px' } }} />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="div" fontWeight="600">
                      {exp.position}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                      <CorporateFare sx={{ fontSize: '18px', color: 'primary.main', mr: 1 }} />
                      <Typography variant="subtitle1" color="primary" fontWeight="500">
                        {exp.company}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                      <CalendarToday sx={{ fontSize: '16px', color: 'text.secondary', mr: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        {exp.period}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: '25px' }}>
                <Typography variant="body1" paragraph sx={{ color: 'text.primary', lineHeight: 1.7 }}>
                  {exp.description}
                </Typography>

                <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: '600', mt: 3 }}>
                  Key Responsibilities:
                </Typography>
                <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                  {exp.responsibilities.map((resp, i) => (
                    <Box
                      component="li"
                      key={i}
                      sx={{
                        animation: expanded === index ? `${slideIn} 0.5s ease-out ${i * 0.1}s both` : 'none'
                      }}
                    >
                      <Typography variant="body2" sx={{ mb: 1.5, color: 'text.primary', lineHeight: 1.6 }}>
                        {resp}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: '600' }}>
                    Technologies Used:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {exp.technologies.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: 'primary.main',
                          color: 'white',
                          bgcolor: 'rgba(0, 188, 212, 0.08)',
                          fontWeight: '500',
                          animation: expanded === index ? `${fadeIn} 0.5s ease-out ${i * 0.1}s both` : 'none',
                          '&:hover': {
                            bgcolor: 'primary.main',
                            color: 'white',
                            animation: `${glow} 1.5s ease-in-out infinite`
                          }
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </section>
  )
}

export default Experience