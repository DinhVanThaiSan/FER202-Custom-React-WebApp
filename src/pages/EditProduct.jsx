import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { updateProduct } from '../features/products/productsSlice';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const product = useSelector((state) => 
    state.products.items.find((p) => p.id === Number(id))
  );

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    currentPrice: '',
  });
  const [error, setError] = useState('');

  // Load data into form
  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        description:  product.description,
        price: product.price.toString(),
        currentPrice: product.currentPrice.toString(),
      });
    }
  }, [product]);

  if (!product) {
    return (
      <Container className="mt-5 text-center">
        <h2>Product not found</h2>
        <Button as={Link} to="/feature" variant="primary" className="mt-3">
          Back Home
        </Button>
      </Container>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const { name, description, price, currentPrice } = formData;
    const numPrice = Number(price);
    const numCurrentPrice = Number(currentPrice);

    // Validation
    if (!name || !description || !price || !currentPrice) {
      setError('All fields are required.');
      return;
    }
    if (numPrice <= 0 || numCurrentPrice <= 0) {
      setError('Prices must be greater than 0.');
      return;
    }
    if (numCurrentPrice > numPrice) {
      setError('Current Price cannot be greater than Original Price.');
      return;
    }

    // Dispatch update
    const updatedProduct = {
      ...product, // keeps original id and image
      name,
      description,
      price: numPrice,
      currentPrice: numCurrentPrice,
    };

    dispatch(updateProduct(updatedProduct));
    navigate(`/products/${id}`); // Redirect back to detail page
  };

  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="shadow-sm border-0">
            <Card.Header className="bg-dark text-white text-center fw-bold fs-5 py-3">
              Edit Product
            </Card.Header>
            <Card.Body className="bg-dark text-white p-4">
              {error && <Alert variant="danger">{error}</Alert>}
              
              <Form onSubmit={handleSubmit}>
                <Row className="g-3 align-items-center mb-3">
                  <Col md={2} className="text-end">
                    <Form.Label className="mb-0">Name:</Form.Label>
                  </Col>
                  <Col md={10}>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                
                <Row className="g-3 align-items-center mb-3">
                  <Col md={2} className="text-end">
                    <Form.Label className="mb-0">Description:</Form.Label>
                  </Col>
                  <Col md={10}>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                
                <Row className="g-3 align-items-center mb-3">
                  <Col md={2} className="text-end">
                    <Form.Label className="mb-0">Price:</Form.Label>
                  </Col>
                  <Col md={10}>
                    <Form.Control
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                
                <Row className="g-3 align-items-center mb-4">
                  <Col md={2} className="text-end">
                    <Form.Label className="mb-0">Current Price:</Form.Label>
                  </Col>
                  <Col md={10}>
                    <Form.Control
                      type="number"
                      name="currentPrice"
                      value={formData.currentPrice}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                
                <div className="text-center mt-3">
                  <Button variant="primary" className="me-3 px-4" as={Link} to={`/products/${id}`}>
                    Back Home
                  </Button>
                  <Button variant="danger" type="submit" className="px-4">
                    Save Product
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProduct;
