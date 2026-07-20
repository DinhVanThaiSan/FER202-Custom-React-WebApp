import React, { useState } from 'react';
import { Form, Button, Card, Row, Col, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/products/productsSlice';

const AddProductForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    currentPrice: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

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

    // Dispatch
    const newProduct = {
      id: Date.now(), // Generate unique ID
      name,
      description,
      price: numPrice,
      currentPrice: numCurrentPrice,
      image: '/images/products/laptop1.png', // Default placeholder
    };

    dispatch(addProduct(newProduct));
    setSuccess('Product added successfully!');
    setFormData({ name: '', description: '', price: '', currentPrice: '' });
    
    // Clear success message after 3 seconds
    setTimeout(() => setSuccess(''), 3000);
  };

  return (
    <Card className="mb-4 shadow-sm border-0">
      <Card.Header className="bg-dark text-white text-center fw-bold fs-5 py-3">
        Add Product
      </Card.Header>
      <Card.Body className="bg-dark text-white p-4">
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        
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
                type="text"
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
            <Button variant="primary" type="submit" className="px-4">
              Add Product
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddProductForm;
