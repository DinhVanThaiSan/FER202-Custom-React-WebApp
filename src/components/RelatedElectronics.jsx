import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Spinner, Alert } from 'react-bootstrap';

const RelatedElectronics = () => {
  const [electronics, setElectronics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchElectronics = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch('https://fakestoreapi.com/products/category/electronics');
        if (!response.ok) {
          throw new Error(`Public API fetch failed: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        // Render up to 4 items
        setElectronics(data.slice(0, 4));
      } catch (err) {
        setError(err.message || 'Error loading public API data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchElectronics();
  }, []);

  return (
    <div className="mt-5 related-electronics-section mb-4">
      <h2 className="mb-2 text-secondary h4">Related Electronics</h2>
      <p className="text-muted small mb-4">Note: This section fetches live data from FakeStore API (LO7 requirement).</p>
      
      {isLoading && (
        <div className="d-flex align-items-center mb-3">
          <Spinner animation="border" role="status" variant="secondary" size="sm" className="me-2" aria-hidden="true" />
          <span aria-live="polite">Fetching related electronics...</span>
        </div>
      )}

      {error && (
        <Alert variant="warning" aria-live="assertive">
          <Alert.Heading>Failed to load related items</Alert.Heading>
          <p>{error}</p>
        </Alert>
      )}

      {!isLoading && !error && electronics.length > 0 && (
        <Row className="g-4">
          {electronics.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={3}>
              <Card className="h-100 product-card shadow-sm border-secondary">
                <div className="product-image-container">
                  <Card.Img 
                    variant="top" 
                    src={item.image} 
                    alt={`Image of ${item.title}`} 
                    className="product-image"
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fs-6 title-truncate-2" title={item.title}>{item.title}</Card.Title>
                  <Card.Text className="text-muted small text-capitalize mb-1">{item.category}</Card.Text>
                  <Card.Text className="fw-bold mb-3 text-success" aria-label={`Price: $${item.price.toFixed(2)}`}>${item.price.toFixed(2)}</Card.Text>
                  <Button variant="secondary" className="mt-auto btn-sm" href="#" onClick={(e) => e.preventDefault()} aria-label={`View external product: ${item.title}`}>
                    View External Product
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default RelatedElectronics;
