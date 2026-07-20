import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import { Spinner } from 'react-bootstrap';

const Feature = React.lazy(() => import('./pages/Feature'));
const Cart = React.lazy(() => import('./pages/Cart'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
const EditProduct = React.lazy(() => import('./pages/EditProduct'));

const FallbackLoader = () => (
  <div className="d-flex flex-column align-items-center justify-content-center mt-5">
    <Spinner animation="border" variant="primary" />
    <p className="mt-3">Loading module...</p>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<FallbackLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/products/:id/edit" element={<EditProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
