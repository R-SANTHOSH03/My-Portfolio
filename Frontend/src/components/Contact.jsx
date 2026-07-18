import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  TextField, 
  Button, 
  Alert,
  IconButton,
  Fade,
  Slide,
  Zoom,
  InputAdornment,
  useMediaQuery,
  useTheme,
  Paper,
  alpha,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
 
} from '@mui/material';
import { 
  Email, 
  Phone, 
  LocationOn, 
  LinkedIn, 
  GitHub, 
  Twitter,
  Person,
  Subject,
  Send,
  Close,
  PhoneAndroid,
  CheckCircle,
  ContactMail,
  Mail
} from '@mui/icons-material';
import { keyframes, styled } from '@mui/system';

// Enhanced animations (keep your existing animations)
const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(3deg); }
  66% { transform: translateY(5px) rotate(-3deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.05); opacity: 0.5; }
  100% { transform: scale(1); opacity: 0.7; }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled components (keep your existing styled components)
const AnimatedSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  padding: theme.spacing(8, 0),
  backgroundSize: '400% 400%',
  animation: `${gradientShift} 15s ease infinite`,
}));

const FloatingShape = styled(Box)(({ theme, delay, size, top, left, right, bottom, shape, color1, color2, rotation }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: shape === 'circle' ? '50%' : '20%',
  background: `linear-gradient(45deg, ${color1}, ${color2})`,
  opacity: 0.15,
  animation: `${float} 12s ease-in-out infinite, ${pulse} 8s ease-in-out infinite`,
  animationDelay: `${delay}, ${parseFloat(delay) + 0.5}s`,
  top: top,
  left: left,
  right: right,
  bottom: bottom,
  zIndex: 0,
  transform: `rotate(${rotation}deg)`,
}));

const GlassPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
  background: `linear-gradient(135deg, 
    ${alpha(theme.palette.background.paper, 0.7)} 0%, 
    ${alpha(theme.palette.background.paper, 0.4)} 100%)`,
  backdropFilter: 'blur(12px)',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.1)}`,
  transition: 'all 0.4s ease',
  position: 'relative',
  overflow: 'hidden',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, 
      ${theme.palette.primary.main}, 
      ${theme.palette.secondary.main})`,
    backgroundSize: '200% 200%',
    animation: `${gradientShift} 3s ease infinite`,
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 12px 40px ${alpha(theme.palette.common.black, 0.15)}`,
    border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
  }
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  background: `linear-gradient(135deg, 
    ${alpha(theme.palette.primary.main, 0.05)} 0%, 
    ${alpha(theme.palette.primary.main, 0.02)} 100%)`,
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
  '&:hover': {
    background: `linear-gradient(135deg, 
      ${alpha(theme.palette.primary.main, 0.1)} 0%, 
      ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
    transform: 'translateY(-5px)',
    boxShadow: `0 10px 25px ${alpha(theme.palette.primary.main, 0.15)}`,
    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  }
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  background: `linear-gradient(135deg, 
    ${alpha(theme.palette.primary.main, 0.1)} 0%, 
    ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
  marginRight: theme.spacing(1),
  transition: 'all 0.3s ease',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
  '&:hover': {
    background: `linear-gradient(135deg, 
      ${theme.palette.primary.main} 0%, 
      ${theme.palette.primary.dark} 100%)`,
    color: theme.palette.common.white,
    transform: 'translateY(-3px) scale(1.1)',
    boxShadow: `0 5px 15px ${alpha(theme.palette.primary.main, 0.4)}`,
    border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
  }
}));

const ShimmerButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: -100,
    width: '50%',
    height: '100%',
    background: `linear-gradient(90deg, transparent, ${alpha(theme.palette.common.white, 0.4)}, transparent)`,
    transition: 'left 0.7s ease',
  },
}));

const MessageContainer = styled(Box)(({ theme, focused }) => ({
  position: 'relative',
  marginBottom: theme.spacing(3),
  transition: 'all 0.3s ease',
  transform: focused ? 'translateY(-5px)' : 'none',
  '&:hover': {
    transform: 'translateY(-5px)',
  }
}));

const MessageLabel = styled(Typography)(({ theme, focused }) => ({
  position: 'absolute',
  top: focused ? '-12px' : '16px',
  left: focused ? '12px' : '50px',
  fontSize: focused ? '0.8rem' : '1rem',
  color: focused ? theme.palette.primary.main : theme.palette.text.secondary,
  backgroundColor: focused ? theme.palette.background.paper : 'transparent',
  padding: focused ? '0 8px' : 0,
  transition: 'all 0.3s ease',
  zIndex: 2,
  pointerEvents: 'none',
}));

const CharacterCounter = styled(Typography)(({ theme, nearLimit }) => ({
  position: 'absolute',
  bottom: '8px',
  right: '16px',
  fontSize: '0.75rem',
  color: nearLimit ? theme.palette.warning.main : theme.palette.text.secondary,
  transition: 'all 0.3s ease',
  backgroundColor: theme.palette.background.paper,
  padding: '0 4px',
  borderRadius: '4px',
}));

const AnimatedBorderBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: '16px',
  padding: '2px',
  background: `linear-gradient(45deg, 
    ${theme.palette.primary.main}, 
    ${theme.palette.secondary.main}, 
    ${theme.palette.primary.main})`,
  backgroundSize: '200% 200%',
  animation: `${gradientShift} 3s ease infinite`,
  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
  WebkitMaskComposite: 'xor',
  maskComposite: 'exclude',
  pointerEvents: 'none',
  opacity: 0,
  transition: 'opacity 0.3s ease',
}));
const API_ENDPOINT = import.meta.env.VITE_API_BASE_URL 
  ? `${import.meta.env.VITE_API_BASE_URL}/api/contact`
  : 'http://localhost:5000/api/contact'; 

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [messageLength, setMessageLength] = useState(0);
  const [hoveredField, setHoveredField] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successDialog, setSuccessDialog] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }
    
    return () => observer.disconnect();
  }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Validate email in real-time
    if (name === 'email') {
      if (value && !validateEmail(value)) {
        setFormErrors({ ...formErrors, email: 'Please enter a valid email address' });
      } else {
        setFormErrors({ ...formErrors, email: '' });
      }
    }
    
    if (name === 'message') {
      setMessageLength(value.length);
    }
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Final validation before submit
    if (formData.email && !validateEmail(formData.email)) {
      setFormErrors({ ...formErrors, email: 'Please enter a valid email address' });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send form data to the API endpoint
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log('Form submitted successfully:', result);
        setSubmitStatus('success');
        setSuccessDialog(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setMessageLength(0);
        setFormErrors({ email: '' });
      } else {
        throw new Error('Server error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      let errorMessage = 'Error submitting form. Please try again.';
      
      if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
        errorMessage = 'Cannot connect to the server. Please check your connection.';
      }
      
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection id="contact">
      {/* Enhanced animated background elements */}
      <FloatingShape 
        delay="0s" 
        size="200px" 
        top="-50px" 
        left="-50px" 
        shape="circle"
        color1={theme.palette.primary.main}
        color2={theme.palette.secondary.main}
        rotation="0"
      />
      <FloatingShape 
        delay="2s" 
        size="150px" 
        bottom="20px" 
        right="-30px" 
        shape="square"
        color1={theme.palette.secondary.main}
        color2={theme.palette.primary.main}
        rotation="45"
      />
      <FloatingShape 
        delay="4s" 
        size="100px" 
        top="50%" 
        right="100px" 
        shape="circle"
        color1={theme.palette.info.main}
        color2={theme.palette.primary.main}
        rotation="10"
      />
      <FloatingShape 
        delay="1s" 
        size="120px" 
        bottom="100px" 
        left="5%" 
        shape="square"
        color1={theme.palette.warning.main}
        color2={theme.palette.secondary.main}
        rotation="-15"
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          
          <Grid size={{ xs: 12, md: 6 }}>
            <Slide in={visible} direction="right" timeout={500} style={{ transitionDelay: '200ms' }}>
              <Box>
                <Typography 
                  variant="h2" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 'bold', 
                    mb: 3,
                    fontSize: { xs: '2.5rem', md: '3rem' },
                    color: 'text.primary',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Get In Touch
                </Typography>
                
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  color="primary" 
                  sx={{ 
                    fontWeight: '600', 
                    mb: 2,
                  }}
                >
                  I'd like to hear from you!
                </Typography>
                
                <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.8, color: 'text.secondary' }}>
                  If you have any inquiries or just want to say hi, please use the contact form!
                </Typography>
                
                <Box sx={{ mt: 4 }}>
                  <Fade in={visible} timeout={800} style={{ transitionDelay: '300ms' }}>
                    <ContactItem onClick={() => navigator.clipboard.writeText('santhoshrpsanthosh@gmail.com')}>
                      <Box sx={{ 
                        width: 50, 
                        height: 50, 
                        borderRadius: '50%', 
                        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.2)} 0%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`,
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        mr: 2,
                        transition: 'all 0.3s ease',
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                      }}>
                        <Email color="primary" sx={{ fontSize: '28px' }} />
                      </Box>
                      <Box>
                        <Typography variant="body2" color="textSecondary">Email</Typography>
                        <Typography variant="body1" fontWeight="500">santhoshrpsanthosh@gmail.com</Typography>
                      </Box>
                    </ContactItem>
                  </Fade>

                  <Fade in={visible} timeout={800} style={{ transitionDelay: '400ms' }}>
                    <ContactItem onClick={() => navigator.clipboard.writeText('+91 9597633016')}>
                      <Box sx={{ 
                        width: 50, 
                        height: 50, 
                        borderRadius: '50%', 
                        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.2)} 0%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`,
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        mr: 2,
                        transition: 'all 0.3s ease',
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                      }}>
                        <PhoneAndroid color="primary" sx={{ fontSize: '28px' }} />
                      </Box>
                      <Box>
                        <Typography variant="body2" color="textSecondary">Contacts</Typography>
                        <Typography variant="body1" fontWeight="500">+91 9597633016</Typography>
                      </Box>
                    </ContactItem>
                  </Fade>
                  
                  <Fade in={visible} timeout={800} style={{ transitionDelay: '500ms' }}>
                    <ContactItem onClick={() => navigator.clipboard.writeText('Dindigul')}>
                      <Box sx={{ 
                        width: 50, 
                        height: 50, 
                        borderRadius: '50%', 
                        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.2)} 0%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`,
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        mr: 2,
                        transition: 'all 0.3s ease',
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                      }}>
                        <LocationOn color="primary" sx={{ fontSize: '28px' }} />
                      </Box>
                      <Box>
                        <Typography variant="body2" color="textSecondary">Location</Typography>
                        <Typography variant="body1" fontWeight="500">Dindigul</Typography>
                      </Box>
                    </ContactItem>
                  </Fade>
                  
                  <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: '600' }}>
                      Follow me
                    </Typography>
                    <Box>
                      <Zoom in={visible} timeout={500} style={{ transitionDelay: '600ms' }}>
                        <SocialIcon 
                          onClick={() => window.open('https://www.linkedin.com/in/santhosh-r-santhosh/', '_blank')}
                          aria-label="LinkedIn"
                        >
                          <LinkedIn />
                        </SocialIcon>
                      </Zoom>
                      <Zoom in={visible} timeout={500} style={{ transitionDelay: '700ms' }}>
                        <SocialIcon 
                          onClick={() => window.open('https://github.com/R-SANTHOSH03', '_blank')}
                          aria-label="GitHub"
                        >
                          <GitHub />
                        </SocialIcon>
                      </Zoom>
                      <Zoom in={visible} timeout={500} style={{ transitionDelay: '800ms' }}>
                        <SocialIcon 
                          onClick={() => window.open('mailto:santhoshrpsanthosh@gmail.com', '_blank')}
                          aria-label="Email"
                        >
                          <Mail />
                        </SocialIcon>
                      </Zoom>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Slide>
          </Grid>
          
          {/* Right Side - Contact Form */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Slide in={visible} direction="left" timeout={500} style={{ transitionDelay: '300ms' }}>
              <GlassPaper 
                component="form" 
                onSubmit={handleSubmit}
                elevation={0}
                noValidate
                sx={{
                  animation: `${fadeInUp} 0.8s ease-out`,
                }}
              >
                {submitStatus === 'error' && (
                  <Alert 
                    severity="error" 
                    sx={{ 
                      mb: 2, 
                      borderRadius: 2, 
                      boxShadow: 1,
                      animation: `${fadeInUp} 0.5s ease-out`,
                    }}
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => setSubmitStatus(null)}
                      >
                        <Close fontSize="inherit" />
                      </IconButton>
                    }
                  >
                    There was an error sending your message. Please try again later.
                  </Alert>
                )}
                
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <MessageContainer focused={focusedField === 'name'}>
                      <MessageLabel focused={focusedField === 'name' || formData.name}>
                        First Name
                      </MessageLabel>
                      <TextField
                        required
                        fullWidth
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        variant="outlined"
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        onMouseEnter={() => setHoveredField('name')}
                        onMouseLeave={() => setHoveredField(null)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Person color={focusedField === 'name' || hoveredField === 'name' ? 'primary' : 'inherit'} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            transition: 'all 0.3s ease',
                            backgroundColor: alpha(theme.palette.background.paper, 0.7),
                            '&:hover fieldset': {
                              borderColor: theme.palette.primary.main,
                              boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.1)}`
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: theme.palette.primary.main,
                              boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.2)}`
                            }
                          },
                          '& .MuiOutlinedInput-input': {
                            paddingTop: '22px',
                            paddingBottom: '10px',
                          }
                        }}
                      />
                      <AnimatedBorderBox sx={{ opacity: focusedField === 'name' ? 1 : 0 }} />
                    </MessageContainer>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <MessageContainer focused={focusedField === 'email'}>
                      <MessageLabel focused={focusedField === 'email' || formData.email} error={!!formErrors.email}>
                        Email Address *
                      </MessageLabel>
                      <TextField
                        required
                        fullWidth
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                        error={!!formErrors.email}
                        helperText={formErrors.email}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        onMouseEnter={() => setHoveredField('email')}
                        onMouseLeave={() => setHoveredField(null)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Email color={
                                focusedField === 'email' || hoveredField === 'email' ? 
                                (formErrors.email ? 'error' : 'primary') : 
                                (formErrors.email ? 'error' : 'inherit')
                              } />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            transition: 'all 0.3s ease',
                            backgroundColor: alpha(theme.palette.background.paper, 0.7),
                            '&:hover fieldset': {
                              borderColor: formErrors.email ? theme.palette.error.main : theme.palette.primary.main,
                              boxShadow: `0 0 0 3px ${alpha(
                                formErrors.email ? theme.palette.error.main : theme.palette.primary.main, 
                                0.1
                              )}`
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: formErrors.email ? theme.palette.error.main : theme.palette.primary.main,
                              boxShadow: `0 0 0 3px ${alpha(
                                formErrors.email ? theme.palette.error.main : theme.palette.primary.main, 
                                0.2
                              )}`
                            }
                          },
                          '& .MuiOutlinedInput-input': {
                            paddingTop: '22px',
                            paddingBottom: '10px',
                          }
                        }}
                      />
                      <AnimatedBorderBox sx={{ 
                        opacity: focusedField === 'email' ? 1 : 0,
                        background: formErrors.email ? `linear-gradient(45deg, ${theme.palette.error.main}, ${theme.palette.warning.main}, ${theme.palette.error.main})` : undefined
                      }} />
                    </MessageContainer>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <MessageContainer focused={focusedField === 'subject'}>
                      <MessageLabel focused={focusedField === 'subject' || formData.subject}>
                        Subject
                      </MessageLabel>
                      <TextField
                        fullWidth
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        variant="outlined"
                        onFocus={() => handleFocus('subject')}
                        onBlur={handleBlur}
                        onMouseEnter={() => setHoveredField('subject')}
                        onMouseLeave={() => setHoveredField(null)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Subject color={focusedField === 'subject' || hoveredField === 'subject' ? 'primary' : 'inherit'} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            transition: 'all 0.3s ease',
                            backgroundColor: alpha(theme.palette.background.paper, 0.7),
                            '&:hover fieldset': {
                              borderColor: theme.palette.primary.main,
                              boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.1)}`
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: theme.palette.primary.main,
                              boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.2)}`
                            }
                          },
                          '& .MuiOutlinedInput-input': {
                            paddingTop: '22px',
                            paddingBottom: '10px',
                          }
                        }}
                      />
                      <AnimatedBorderBox sx={{ opacity: focusedField === 'subject' ? 1 : 0 }} />
                    </MessageContainer>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <MessageContainer focused={focusedField === 'message'}>
                      
                      <MessageLabel 
                      focused={focusedField === 'message' || formData.message}>
                       Message
                      </MessageLabel>
                      <TextField
                        required
                        fullWidth
                        multiline
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        variant="outlined"
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        onMouseEnter={() => setHoveredField('message')}
                        onMouseLeave={() => setHoveredField(null)}
                        InputProps={{
                         
                          maxLength: 500 }}
                        
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            transition: 'all 0.3s ease',
                            backgroundColor: alpha(theme.palette.background.paper, 0.7),
                            '&:hover fieldset': {
                              borderColor: theme.palette.primary.main,
                              boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.1)}`
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: theme.palette.primary.main,
                              boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.2)}`
                            }
                          },
                          '& .MuiOutlinedInput-input': {
                            paddingTop: '22px',
                            paddingBottom: '30px',
                          }
                        }}
                      />
                      <CharacterCounter nearLimit={messageLength > 400}>
                        {messageLength}/500
                      </CharacterCounter>
                      <AnimatedBorderBox sx={{ opacity: focusedField === 'message' ? 1 : 0 }} />
                    </MessageContainer>
                  </Grid>
                  <Grid size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ShimmerButton 
                      type="submit" 
                      size="large"
                      sx={{
                        color:'black',
                        py: 1.5,
                        px: 4,
                        ml:40,
                        borderRadius: 4,
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        
                        background: `linear-gradient(155deg, #2985bbff 0%, #88cae0ff 100%)`,
                        boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.4)}`,
                        transition: 'all 0.3s ease',
                        minWidth: '120px',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: `0 6px 20px ${alpha(theme.palette.secondary.main, 0.5)}`,
                           background: `linear-gradient(155deg, #d2df7dff 0%, #7edc6bff 100%)`,
                        },
                        '&:disabled': {
                          
                          boxShadow: 'none',
                        }
                      }}
                      disabled={!formData.name || !formData.email || !formData.message || !!formErrors.email || isSubmitting}
                      startIcon={isSubmitting ? <CircularProgress size={20} /> : <Send />}
                    >
                      {isSubmitting ? 'Sending...' : 'Send'}
                    </ShimmerButton>
                  </Grid>
                </Grid>
              </GlassPaper>
            </Slide>
          </Grid>
        </Grid>
      </Container>

      {/* Success Dialog */}
      <Dialog 
        open={successDialog} 
        onClose={() => setSuccessDialog(false)}
        PaperProps={{
          sx: {
            borderRadius: 3,
            background: `linear-gradient(135deg, 
              ${alpha(theme.palette.background.paper, 0.9)} 0%, 
              ${alpha(theme.palette.background.paper, 0.7)} 100%)`,
            backdropFilter: 'blur(10px)',
          }
        }}
      >
        <DialogTitle sx={{ textAlign: 'center' }}>
          <CheckCircle color="success" sx={{ fontSize: 60, mb: 2 }} />
          <Typography variant="h2" gutterBottom>
            Message Sent!
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" textAlign="center">
            Thank you for your message. I'll get back to you as soon as possible.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
          <Button 
            variant="contained" 
            onClick={() => setSuccessDialog(false)}
            sx={{ borderRadius: 2, px: 4 }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </AnimatedSection>
  );
};

export default Contact;