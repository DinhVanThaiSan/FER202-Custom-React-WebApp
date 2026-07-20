import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Alert, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsAsync } from '../features/products/productsSlice';
import ProductList from '../components/ProductList';
import AddProductForm from '../components/AddProductForm';
import ProductCardFunctional from '../components/ProductCardFunctional';
import RelatedElectronics from '../components/RelatedElectronics';

const getBrand = (name) => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('lg')) return 'LG';
  if (lowerName.includes('acer')) return 'Acer';
  if (lowerName.includes('dell')) return 'Dell';
  if (lowerName.includes('msi')) return 'MSI';
  if (lowerName.includes('asus')) return 'Asus';
  return 'Other';
};

const Feature = () => {
  const dispatch = useDispatch();
  const { items: products, status, error } = useSelector((state) => state.products);

  // States for search, filter, and sort
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProductsAsync());
    }
  }, [status, dispatch]);

  const isLoading = status === 'loading' || status === 'idle';

  // Event Handlers
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleBrandChange = (e) => setSelectedBrand(e.target.value);
  const handleSortChange = (e) => setSortOrder(e.target.value);
  const handleReset = () => {
    setSearchTerm('');
    setSelectedBrand('All');
    setSortOrder('default');
  };

  // Derive brands from the product name
  const brands = ['All', ...new Set(products.map(p => getBrand(p.name)))];

  // Apply filters and sort on client-side
  let processedProducts = products.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const productBrand = getBrand(product.name);
    const matchBrand = selectedBrand === 'All' || productBrand === selectedBrand;
    return matchSearch && matchBrand;
  });

  // Sort the new array
  if (sortOrder === 'lowToHigh') {
    processedProducts.sort((a, b) => a.currentPrice - b.currentPrice);
  } else if (sortOrder === 'highToLow') {
    processedProducts.sort((a, b) => b.currentPrice - a.currentPrice);
  }

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Product Management</h1>
      
      <AddProductForm />

      {isLoading && (
        <div className="text-center my-5">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p className="mt-2">Loading products...</p>
        </div>
      )}

      {status === 'failed' && (
        <Alert variant="danger" className="my-4">
          <Alert.Heading>Error Loading Products</Alert.Heading>
          <p>{error}</p>
        </Alert>
      )}

      {!isLoading && status !== 'failed' && (
        <>
          <Row className="mb-4 align-items-end g-3">
            <Col md={4}>
              <Form.Group controlId="searchFilter">
                <Form.Label>Search Products</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Search by name..." 
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="brandFilter">
                <Form.Label>Brand</Form.Label>
                <Form.Select value={selectedBrand} onChange={handleBrandChange}>
                  {brands.map((brand, idx) => (
                    <option key={idx} value={brand}>
                      {brand === 'All' ? 'All Brands' : brand}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="sortFilter">
                <Form.Label>Sort by Price</Form.Label>
                <Form.Select value={sortOrder} onChange={handleSortChange}>
                  <option value="default">Default</option>
                  <option value="lowToHigh">Price: Low to High</option>
                  <option value="highToLow">Price: High to Low</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={2}>
              <Button variant="secondary" className="w-100" onClick={handleReset}>
                Reset
              </Button>
            </Col>
          </Row>

          <div className="mb-5 bg-dark p-3">
            <h3 className="text-white text-center mb-4">Product List</h3>
            <Row className="g-3">
              {processedProducts.map((product) => (
                <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <ProductCardFunctional product={product} />
                </Col>
              ))}
            </Row>
          </div>

          <hr className="my-5" />
          <h2 className="mb-4 text-center">Product Management (Activity 2)</h2>
          <AddProductForm />
          <ProductList products={processedProducts} />
        </>
      )}

      {/* LO7: Public API Requirement */}
      <RelatedElectronics />
    </Container>
  );
};

export default Feature;
