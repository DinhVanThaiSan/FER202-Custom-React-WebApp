import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Card, Row, Col, Button, Badge } from 'react-bootstrap';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) => 
    state.products.items.find((p) => p.id === Number(id))
  );

  const formatVND = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  if (!product) {
    return (
      <Container className="mt-5 text-center">
        <h2>Product not found</h2>
        <p className="text-muted">The product you are looking for does not exist or has been removed.</p>
        <Button as={Link} to="/feature" variant="primary">
          Back Home
        </Button>
      </Container>
    );
  }

  const { name, description, price, currentPrice, image } = product;
  
  // Calculate discount: ((price - currentPrice) / price) * 100
  const discountPercentage = price > 0 && currentPrice < price 
    ? Math.round(((price - currentPrice) / price) * 100) 
    : 0;

  return (
    <Container fluid className="py-5 bg-dark" style={{ minHeight: '80vh' }}>
      <Row className="justify-content-center text-white text-center">
        <Col md={10} lg={8}>
          <h2 className="mb-4">{name}</h2>
          
          <div className="mb-4 d-flex justify-content-center">
            <div className="bg-white p-3 rounded" style={{ display: 'inline-block' }}>
              <img src={image} alt={`Image of ${name}`} style={{ width: '300px', height: '300px', objectFit: 'contain' }} />
            </div>
          </div>
          
          <p className="fs-5 mb-4 px-md-5">{description}</p>
          
          <div className="mb-4">
            <p className="fs-5 mb-2">Price: {formatVND(price)}</p>
            <p className="fs-5 mb-2">Current Price: {formatVND(currentPrice)}</p>
            <p className="fs-5 mb-4">Discount: {discountPercentage} %</p>
          </div>
          
          <div className="d-flex justify-content-center gap-3">
            <Button as={Link} to="/feature" variant="primary" className="px-4 py-2">
              Back Home
            </Button>
            <Button as={Link} to={`/products/${id}/edit`} variant="danger" className="px-4 py-2">
              Edit
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
