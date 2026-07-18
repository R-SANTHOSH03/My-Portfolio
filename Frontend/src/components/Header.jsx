import { useState } from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useScrollTrigger,
    Slide,
    Box
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../assets/me.jpg'

function HideOnScroll(props) {
    const { children } = props
    const trigger = useScrollTrigger()

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}

const Header = ({ activeSection }) => {
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const menuItems = [
        'Home',
        'About',
        'Education',
        'Skills',
        'Experience',
        'Projects',
        'Certificates',
        'Contact'
    ]

    const drawer = (
        <List>
            {menuItems.map((item) => (
                <ListItem
                    button
                    key={item}
                    onClick={() => {
                        document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: 'smooth' })
                        setMobileOpen(false)
                    }}
                >
                    <ListItemText primary={item} />
                </ListItem>
            ))}
        </List>
    )

    return (
        <>
            <HideOnScroll>
                <AppBar>
                    <Toolbar>
                        <img
                            src={logo}
                            alt="Logo"
                            style={{
                                width: '40px', height: '40px', marginRight: '10px', borderRadius: '50%', background: 'linear-gradient(145deg, #00bcd4, #673ab7)', position: 'relative',
                                boxShadow: '0 0 25px rgba(0,188,212,0.5)'
                            }}
                        />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 1 }}>
                            Santhosh Portfolio
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            {menuItems.map((item) => (
                                <Button
                                    key={item}
                                    color="inherit"
                                    onClick={() => document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: 'smooth' })}
                                    sx={{
                                        mx: 0.5,
                                        borderBottom: activeSection === item.toLowerCase() ? '2px solid #f9f9faff' : 'none', height: "100%"
                                    }}
                                >
                                    {item}
                                </Button>
                            ))}
                        </Box>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 } }}
            >
                {drawer}
            </Drawer>
        </>
    )
}

export default Header

