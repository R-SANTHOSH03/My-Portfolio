import { useEffect, useState } from 'react'
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Chip,
  alpha,
  useTheme,
  Fade,
  Grow,
  Zoom
} from '@mui/material'
import { GitHub, OpenInNew } from '@mui/icons-material'
import Todolist from '../assets/ToDoList.jpg';
import instaicon from '../assets/insta.jpg'
import healthcareicon from '../assets/healthcareicon.jpg'
import  TicTacToeGameicon from '../assets/TicTacToeGameicon.png'
import  calculatoricon from '../assets/calculatoricon.jpg'
import  bookimg from '../assets/bookdesign.jpeg'
import  moviereview from '../assets/moviereview.jpg'
import  cartoonicon from '../assets/cartoonicon.png'
import  ReportCardGenerator from '../assets/reporticon.jpg'

const Projects = () => {
  const [visible, setVisible] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    observer.observe(document.getElementById('projects'))
    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Web-Todolist ",
      description: "A responsive web-based task management application with intuitive UI for creating, organizing, and tracking daily tasks efficiently.",
      image: Todolist,
      technologies: ["React", "HTML", "Css","Java script","Node.js","Mongodb","API"],
      githubUrl: "https://github.com/R-SANTHOSH03/web-Todolist",
      
    },
    {
      title: "Basic Instagram-clone ",
      description: "Basic Instagram Clone built with React.js, HTML, CSS, and JavaScript featuring user posts, likes, and responsive design.",
      image: instaicon,
      technologies: ["React", "HTML", "Css","Java script","json"],
      githubUrl: "https://github.com/R-SANTHOSH03/Instagramclone",
    
    },
    {
      title: "Graft-3D-Healthcare ",
      description: "Graft 3D Healthcare –  web app showcasing 3D models for innovative healthcare solutions.",
      image: healthcareicon,
      technologies: ["HTML", "CSS","JavaScript"],
      githubUrl: "https://github.com/R-SANTHOSH03/Graft-3D-Healthcare",
      
    },
    {
      title: "Tic--Tac--Toe--Game",
      description: "A classic Tic Tac Toe game developed using HTML, CSS, and JavaScript with smooth and responsive gameplay.",
      image: TicTacToeGameicon,
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/R-SANTHOSH03/Tic--Tac--Toe--Game",
      
    },
    {
      title: "calculator",
      description: "A responsive Calculator built with  HTML, CSS, and JavaScript for fast, accurate arithmetic.",
      image: calculatoricon,
      technologies: ["HTML", "CSS","JavaScript"],
      githubUrl: "https://github.com/R-SANTHOSH03/calculator",
     
    },
    {
      title: "Reading-Haven-Book-Website ",
      description: "Reading Haven – book website built with HTML, CSS, and JavaScript  books store.",
      image: bookimg,
      technologies: ["HTML", "CSS","JavaScript"],
      githubUrl: "https://github.com/R-SANTHOSH03/Reading-Haven-Book-Website",
      
    },
    
   {
      title: "Movie-Review-Sentiment-Analyzer ",
      description: "IMDb Sentiment Analysis – A machine learning project built with Python, Pandas, NLTK, and Scikit-learn.The project achieves high accuracy and includes an interactive mode for testing custom user reviews.",
      image: moviereview,
      technologies: ["Python","Pandas","NLTK","Scikit-learn"],
      githubUrl: "https://github.com/R-SANTHOSH03/Movie-Review-Sentiment-Analyzer",
      
    },
    {
      title: "Cartoonify-an-Image ",
      description: "Cartoonify Image App – A fun computer vision project built with Python, OpenCV, and NumPy that transforms real photos into cartoon-style images.",
      image: cartoonicon,
      technologies: ["Python","OpenCV","NumPy","K-Means Clustering","Bilateral Filtering","Image Enhancement",],
      githubUrl: "https://github.com/R-SANTHOSH03/Cartoonify-an-Image",
      
    },
    {
      title: "Report Card Generator",
      description: "Report Card Generator – A Python project that processes student marks from a CSV file, calculates totals and percentages, gives performance feedback, and saves the results into a new CSV report card.",
      image: ReportCardGenerator,
      technologies: ["Python","CSV Module","Matplotlib","File Handling","Bilateral Filtering","Image Enhancement",],
      githubUrl: "https://github.com/R-SANTHOSH03/Cartoonify-an-Image",
      
    },
    
  ]

  return (
    <section id="projects" className={`section ${visible ? 'visible' : ''}`}>
      <Container maxWidth="lg" sx={{ py: 10,cursor:"pointer" }}>
        <Fade in={visible} timeout={1000}>
          <Typography 
            variant="h2" 
            gutterBottom 
            align="center" 
            sx={{ 
              fontWeight: 800, 
              mb: 8,
              cursor:"pointer",
              fontSize: { xs: '2.5rem', md: '3rem' },
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                borderRadius: 2
              }
            }}
          >
             <span style={{ color: theme.palette.primary.main }}>Projects</span>
          </Typography>
        </Fade>
        
        <Grid container spacing={2}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Grow in={visible} timeout={1000} style={{ transformOrigin: '0 0 0' }}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    bgcolor: 'background.paper',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    border: '1px solid',
                    borderColor: alpha(theme.palette.primary.main, 0.15),
                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                    borderRadius: 3,
                    overflow: 'hidden',
                    position: 'relative',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      transform: 'scaleX(0)',
                      transformOrigin: '0% 50%',
                      transition: 'transform 0.5s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.01)',
                      boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.2)}`,
                      borderColor: alpha(theme.palette.primary.main, 0.3),
                      '&:before': {
                        transform: 'scaleX(1)',
                      },
                      '& .project-image': {
                        transform: 'scale(1.1)',
                        filter: 'brightness(1.1) saturate(1.2)',
                      },
                      '& .project-title': {
                        color: theme.palette.primary.main,
                      }
                    }
                  }}
                >
                  <Box
                    sx={{
                      height: 220,
                      position: 'relative',
                      overflow: 'hidden',
                      bgcolor: alpha(theme.palette.primary.main, 0.08),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Project image with overlay effect */}
                    <Box 
                      className="project-image"
                      component="img"
                      src={project.image}
                      alt={project.title}
                      sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'all 0.5s ease',
                      }}
                    />
                    
                    {/* Gradient overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '40%',
                        background: `linear-gradient(to top, ${alpha('#000', 0.7)} 0%, ${alpha('#000', 0)} 100%)`,
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                        display: 'flex',
                        alignItems: 'flex-end',
                        p: 2,
                      }}
                      className="project-overlay"
                    />
                    
                    {/* Fallback if image doesn't load */}
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        zIndex: 1,
                        p: 2,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        display: project.image ? 'none' : 'block',
                        color: theme.palette.primary.main
                      }}
                    >
                      {project.title}
                    </Typography>
                  </Box>
                  
                  <CardContent sx={{ flexGrow: 1, p: 3, pb: 2 }}>
                    <Typography 
                      className="project-title"
                      variant="h6" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                        transition: 'color 0.3s ease',
                        mb: 2,
                        fontSize: '1.2rem',
                        lineHeight: 1.3
                      }}
                    >
                      {project.title}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      paragraph
                      sx={{ 
                        mb: 2,
                        lineHeight: 1.6,
                        fontSize: '0.9rem'
                      }}
                    >
                      {project.description}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech, i) => (
                        <Zoom in={visible} timeout={800} key={i}>
                          <Chip 
                            label={tech} 
                            size="small" 
                            variant="filled"
                            sx={{ 
                              fontSize: '0.7rem',
                              bgcolor: alpha(theme.palette.primary.main, 0.12),
                              color: theme.palette.primary.dark,
                             
                              fontWeight: 600,
                              height: 24,
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                bgcolor: alpha(theme.palette.primary.main, 0.25),
                                transform: 'translateY(-2px)'
                              }
                            }} 
                          />
                        </Zoom>
                      ))}
                    </Box>
                  </CardContent>
                  
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button 
                      size="small" 
                      startIcon={<GitHub />}
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      sx={{
                        color: theme.palette.text.secondary,
                        fontWeight: 600,
                        borderRadius: 2,
                        px: 2,
                        py: 1,
                        transition: 'all 0.3s ease',
                        ml:"30%",
                        '&:hover': {
                          color: theme.palette.primary.main,
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          transform: 'translateY(-2px)',
                          boxShadow: `0 4px 8px ${alpha(theme.palette.primary.main, 0.2)}`
                        }
                      }}
                    >
                      Code
                    </Button>
                    
                  </CardActions>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default Projects