import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class ProductCardClass extends Component {
  formatVND = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  render() {
    const { product } = this.props;
    const { name, description, price, currentPrice, image } = product;

    return (
      <Card className="h-100 product-card shadow-sm border-info">
        <Card.Header className="bg-info text-white text-center py-1"><small>Class Component</small></Card.Header>
        <div className="product-image-container">
          <Card.Img variant="top" src={image} alt={`Image of ${name}`} className="product-image" />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="title-truncate-2" title={name}>{name}</Card.Title>
          <Card.Text className="text-muted small mb-3 desc-truncate-2" title={description}>
            {description}
          </Card.Text>
          <div className="mb-3 mt-auto">
            <span className="text-muted text-decoration-line-through me-2" style={{ fontSize: '0.9rem' }} aria-label={`Original price: ${this.formatVND(price)}`}>
              {this.formatVND(price)}
            </span>
            <span className="fw-bold fs-5 text-info" aria-label={`Current price: ${this.formatVND(currentPrice)}`}>
              {this.formatVND(currentPrice)}
            </span>
          </div>
          <div className="d-flex gap-2">
            <Button variant="info" className="text-white flex-grow-1 fw-semibold" aria-label={`Add ${name} to cart`}>
              Add to Cart
            </Button>
            <Button variant="outline-info" aria-label={`View details of ${name}`}>
              Details
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default ProductCardClass;
