// src/components/Cart.js
import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  return (
    <Container className="cart-container">
      <Grid container spacing={3} className="cart-grid">
        <Grid item xs={12} className="cart-header">
          <Typography variant="h4" gutterBottom className="cart-title">
            Your Cart
          </Typography>
          <Typography variant="body1" gutterBottom className="cart-subtitle">
            You have 1 item in your cart.
          </Typography>
          <Typography variant="h6" color="primary" className="cart-total">
            Total: $99.99
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="/checkout" className="checkout-button">
            Proceed to Checkout
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
