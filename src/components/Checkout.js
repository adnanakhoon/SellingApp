// src/components/Checkout.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import './Checkout.css';

const Checkout = () => {
  const [details, setDetails] = useState({ name: '', address: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order Details:', details);
    alert('Order placed successfully!');
  };

  return (
    <Container className="checkout-container">
      <Grid container spacing={3} className="checkout-grid">
        <Grid item xs={12} className="checkout-header">
          <Typography variant="h4" gutterBottom className="checkout-title">
            Checkout
          </Typography>
        </Grid>
        <Grid item xs={12} className="checkout-form">
          <form onSubmit={handleSubmit}>
            <TextField
              name="name"
              label="Name"
              value={details.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              className="checkout-input"
            />
            <TextField
              name="address"
              label="Address"
              value={details.address}
              onChange={handleChange}
              fullWidth
              margin="normal"
              className="checkout-input"
            />
            <TextField
              name="email"
              label="Email"
              value={details.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              className="checkout-input"
            />
            <Button type="submit" variant="contained" color="primary" className="checkout-submit">
              Place Order
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;
