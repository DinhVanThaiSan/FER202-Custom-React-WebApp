import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ProductCardFunctional from '../components/ProductCardFunctional';
import ProductCardClass from '../components/ProductCardClass';

const demoProduct = {
  id: 1,
  name: 'Demo Asus ROG Strix',
  description: 'High performance gaming laptop with advanced cooling',
  price: 35000000,
  currentPrice: 32000000,
  image: '/images/products/laptop1.png'
};

const Home = () => {
  return (
    <Container className="mt-5 mb-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">Welcome to TechLaptops</h1>
        <p className="lead text-muted">Your ultimate destination for premium laptops and accessories.</p>
      </div>
      
      <Card  className="shadow-sm mb-5 border-0 bg-light">
        <Card.Body className="p-4">
          <h2 className="mb-3 text-center">Project Component Demonstration (LO2 & LO3)</h2>
          <p className="text-center text-muted mb-4">
            Below are two identical looking components built using different React paradigms. This satisfies the requirement to demonstrate both Class and Functional components.
          </p>
          <Row className="g-4 justify-content-center">
            <Col md={6} lg={4}>
              <h4 className="text-center mb-3 text-primary">Functional Component</h4>
              <ProductCardFunctional product={demoProduct} />
            </Col>
            
            <Col md={6} lg={4}>
              <h4 className="text-center mb-3 text-info">Class Component</h4>
              <ProductCardClass product={demoProduct} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
