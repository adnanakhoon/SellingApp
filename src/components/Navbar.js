// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css';

const Navbar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography  component={Link} to="/" variant="h6" className="title">
          My Unique Store
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/product">Product</Button>
        <Button color="inherit" component={Link} to="/cart">
          <ShoppingCartIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
