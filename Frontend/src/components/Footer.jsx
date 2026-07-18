import { Box, Container, Typography, IconButton } from '@mui/material'
import { LinkedIn, GitHub, Twitter, Email } from '@mui/icons-material'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 4, 
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Santhosh.R . All rights reserved.
          </Typography>
          
          <Box sx={{ mt: { xs: 2, sm: 0 } }}>
            <IconButton 
              color="primary" 
              onClick={() => window.open('https://www.linkedin.com/in/santhosh-r-santhosh/', '_blank')}
            >
              <LinkedIn />
            </IconButton>
            <IconButton 
              color="primary" 
              onClick={() => window.open('https://github.com/R-SANTHOSH03', '_blank')}
            >
              <GitHub />
            </IconButton>
            
            <IconButton 
              color="primary" 
              onClick={() => window.location.href = 'mailto:santhoshrpsanthosh@gmail.com'}
            >
              <Email />
            </IconButton>
          </Box>
        </Box>
        
        
      </Container>
    </Box>
  )
}

export default Footer