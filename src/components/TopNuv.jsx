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
import { Suspense } from "react";
import { Routes, Route, Link } from 'react-router-dom';
const LazyHome=React.lazy(()=>import('./Home'))
const LazyTodo = React.lazy(()=>import('./Todo'))
const LazyPost = React.lazy(()=>import('./Post'))
const LazyPhoto= React.lazy(()=>import('./Photo'))
const LazyUsers = React.lazy(()=>import('./Users'))


const pages = ['Home', 'ToDo', 'Photo','Post','Users'];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
            {pages.map((page) => (
              <Button 
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }} 
                
              >
                <Link style={{textDecoration:'none'}} to={page} >{page}</Link>            
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Routes>
        <Route path="/Home" element={<Suspense fallback={<h1>loading..</h1>}><LazyHome /></Suspense>} />
        <Route path="/Todo" element={<Suspense fallback={<h1>loading..</h1>}><LazyTodo /></Suspense>} />
        <Route path="/Post" element={<Suspense fallback={<h1>loading..</h1>}><LazyPost /></Suspense>}/>
        <Route path="/Photo" element={<Suspense fallback={<h1>loading..</h1>}><LazyPhoto /></Suspense>}/>
        <Route path="/Users" element={<Suspense fallback={<h1>loading..</h1>}><LazyUsers /></Suspense>}/>
      </Routes>
      </>  
  );
}
export default ResponsiveAppBar;