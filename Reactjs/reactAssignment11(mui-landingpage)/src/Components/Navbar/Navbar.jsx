import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const pages = ['Home', 'About', 'Trainings', 'Contact Us'];
const trainingOptions = [
  'Web and Mobile Application Development',
  'Flutter Mobile Application Development',
  'Graphic Design And Video Editing',
  'Digital And Social Media Marketing',
  'Blockchain Development'
];
function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElTraining, setAnchorElTraining] = React.useState(null);
    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenTrainingMenu = (event) => {
    setAnchorElTraining(event.currentTarget);
  };
  const handleCloseTrainingMenu = () => {
    setAnchorElTraining(null);
  };
  return (
    <AppBar
      sx={{
        backgroundColor: 'white',
        border: 'none',
        boxShadow: 'none',
        backgroundColor:"#f5f5f5"
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              color: 'black',
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            <img width={300} src="./src/assets/logo.png" alt="Logo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: 'black' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                page === 'Trainings' ? (
                  <MenuItem key={page} onClick={handleOpenTrainingMenu}>
                    <Typography textAlign="center" sx={{ textTransform: 'capitalize', color: 'black' }}>
                      {page}
                      <ExpandMoreIcon sx={{ ml: 1 }} />
                    </Typography>
                  </MenuItem>
                ) : (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{ textTransform: 'capitalize', color: 'black' }}>
                      {page}
                    </Typography>
                  </MenuItem>
                )
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              page === 'Trainings' ? (
                <Button
                  key={page}
                  onClick={handleOpenTrainingMenu}
                  sx={{ my: 2, color: 'black', display: 'block', textTransform: 'capitalize', fontSize: '20px' }}
                >
                  {page}
                  <ExpandMoreIcon sx={{ ml: 1 }} />
                </Button>
              ) : (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block', textTransform: 'capitalize', fontSize: '20px' }}
                >
                  {page}
                </Button>
              )
            ))}
          </Box>

          <Menu
            id="menu-training"
            anchorEl={anchorElTraining}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElTraining)}
            onClose={handleCloseTrainingMenu}
          >
            {trainingOptions.map((option) => (
              <MenuItem key={option} onClick={handleCloseTrainingMenu}>
                <Typography textAlign="center" sx={{ textTransform: 'capitalize', color: 'black' }}>
                  {option}
                </Typography>
              </MenuItem>
            ))}
          </Menu>

          <Box sx={{ display: { md: 'none', lg: 'none' } }}>
            <img width={300} src="./src/assets/logo.png" alt="Logo" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
