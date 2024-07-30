// src/components/Product.js
import React from 'react';
import { Container, Typography, Button, Card, CardContent, CardMedia, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = () => {
  return (
    <Container className="product-container">
      <Grid container spacing={3} className="product-grid">
        <Grid item xs={12} md={6} className="product-image">
          <Card className="product-card">
            <CardMedia
              component="img"
              alt="Product Image"
              height="400"
              image="https://m.media-amazon.com/images/I/61X9WQBdypL.jpg"
              title="Product Image"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6} className="product-details">
          <CardContent>
            <Typography variant="h5" component="div" className="product-title">
              My Sofa
            </Typography>
            <Typography variant="body2" color="text.secondary" className="product-description">
              This is a detailed description of the awesome product. It has many features and benefits that you'll love.
            </Typography>
            <Typography variant="h6" color="primary" className="product-price">
              $99.99
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/cart" className="add-to-cart-button">
              Add to Cart
            </Button>
          </CardContent>
        </Grid>
      </Grid>
      <Grid container spacing={3} className="return-policy-grid">
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className="return-policy-title">
            Return Policy
          </Typography>
          <Paper elevation={3} className="return-policy">
            <Typography variant="body1">
              We offer a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days for a full refund.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Product;
