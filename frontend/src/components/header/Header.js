import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <header>
            <nav className="navbar">
                <a href="/" className="logo">
                    <img src="logo.png" alt="Geneque"
                        style={{ maxWidth: '150px', marginLeft: '20px' }} />
                </a>
                <div className="nav-links">
                    <a href="/" className="nav-link-special"
                        style={{ color: '#333' }}>Home</a>
                    <div className="dropdown">
                        <button className="dropbtn"
                            style={{ fontFamily: "'Times New Roman', serif", fontSize: '16px' }}>
                            Features
                        </button>
                        <div className="dropdown-content">
                            <a href="/personal">Personal data</a>
                            <a href="/sample">Sample life tracking</a>
                            <a href="/viewing">Viewing data</a>
                        </div>
                    </div>
                    <a href="/prediction" className="nav-link-special"
                        style={{ color: '#333' }}>Prediction</a>
                    <a href="/about" className="nav-link-special"
                        style={{ color: '#333' }}>About Us</a>
                    <a href="/login" className="login-btn">Log In</a>
                </div>
            </nav>
        </header>
        // <AppBar position="fixed" color="primary">
        //     <Toolbar>
        //         <IconButton
        //             size="large"
        //             edge="start"
        //             color="inherit"
        //             aria-label="menu"
        //             sx={{ mr: 2 }}
        //             onClick={handleMenuClick}
        //         >
        //             <MenuIcon />
        //         </IconButton>
        //         <Menu
        //             anchorEl={anchorEl}
        //             open={Boolean(anchorEl)}
        //             onClose={handleMenuClose}
        //         >
        //             <MenuItem onClick={handleMenuClose}><Link to="/" className="menu-link">Home</Link></MenuItem>
        //             <MenuItem onClick={handleMenuClose}><Link to="/personal" className="menu-link">Personal Data</Link></MenuItem>
        //             <MenuItem onClick={handleMenuClose}><Link to="/sample" className="menu-link">Sample Life Tracking</Link></MenuItem>
        //             <MenuItem onClick={handleMenuClose}><Link to="/viewing" className="menu-link">Viewing Data</Link></MenuItem>
        //         </Menu>
        //         <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', fontFamily: 'YourFont', color: '#fff' }}>
        //             Geneque
        //         </Typography>
        //         <Button color="inherit" component={Link} to="/">Home</Button>
        //         <Button color="inherit" component={Link} to="/about">About Us</Button>
        //         <Button color="inherit" component={Link} to="/login" variant="contained">
        //             Log In
        //         </Button>
        //     </Toolbar>
        // </AppBar>
    );
};

export default Header;
