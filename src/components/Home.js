// src/components/Home.js
import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <Container className="home-container">
      <Grid container spacing={3} className="home-grid">
        <Grid item xs={12} className="home-header">
          <Typography variant="h2" gutterBottom className="home-title">
            Welcome to My Unique Store
          </Typography>
          <Typography variant="h5" gutterBottom className="home-subtitle">
            Discover the best product for your needs.
          </Typography>
        </Grid>
        <Grid item xs={12} className="home-button">
          <Button variant="contained" color="primary" component={Link} to="/product">
            Buy Now
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3} className="testimonials-grid">
        <Grid item xs={12}>
          <Typography variant="h4" className="testimonials-title">
            Customer Testimonials
          </Typography>
          <Paper elevation={3} className="testimonial">
            <Typography variant="body1">
              "This product is amazing! It exceeded all my expectations."
            </Typography>
            <Typography variant="body2" color="textSecondary">
              -  Adnan Ashraf
            </Typography>
          </Paper>
          <Paper elevation={3} className="testimonial">
            <Typography variant="body1">
              "Great value for the price. Highly recommend!"
            </Typography>
            <Typography variant="body2" color="textSecondary">
              - Adnan Akhoon
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} className="security-grid">
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom className="security-title">
            Shop with Confidence
          </Typography>
          <div className="security-badges">
            <img src="../../security-badge.jpeg" alt="Security Badge 1" />
            
          </div> 
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
