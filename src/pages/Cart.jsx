import React from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.currentPrice * item.quantity, 0);

  const formatVND = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  if (cartItems.length === 0) {
    return (
      <Container className="mt-5 text-center">
        <h2 tabIndex="0">Your Cart is Empty</h2>
        <p className="text-muted mt-3">Looks like you haven't added anything yet.</p>
        <Button as={Link} to="/feature" variant="primary" className="mt-3" aria-label="Go to feature page to continue shopping">
          Continue Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Container className=" mt-4">
      <h1 className="mb-4" tabIndex="0">Shopping Cart</h1>
      <Row className="g-4">
        <Col lg={8}>
          <Card className="shadow-sm mb-4">
            <Card.Body className="p-0">
              <Table responsive className="align-middle text-center mb-0 border-white cart-table">
                <thead className="table-light">
                  <tr>
                    <th className="text-start ps-4">Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="text-start ps-4 py-3">
                        <div className="d-flex align-items-center">
                          <img src={item.image} alt={`Thumbnail of ${item.name}`} style={{ width: '60px', height: '60px', objectFit: 'contain' }} className="me-3" />
                          <span className="fw-semibold">{item.name}</span>
                        </div>
                      </td>
                      <td>{formatVND(item.currentPrice)}</td>
                      <td>
                        <div className="d-flex justify-content-center align-items-center cart-quantity-controls">
                          <Button variant="outline-secondary" size="sm" onClick={() => dispatch(decreaseQuantity(item.id))} aria-label={`Decrease quantity of ${item.name}`}>-</Button>
                          <span className="mx-3" aria-label={`Quantity is ${item.quantity}`}>{item.quantity}</span>
                          <Button variant="outline-secondary" size="sm" onClick={() => dispatch(increaseQuantity(item.id))} aria-label={`Increase quantity of ${item.name}`}>+</Button>
                        </div>
                      </td>
                      <td className="fw-bold">{formatVND(item.currentPrice * item.quantity)}</td>
                      <td className="pe-3">
                        <Button variant="danger" size="sm" onClick={() => dispatch(removeFromCart(item.id))} aria-label={`Remove ${item.name} from cart`}>
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <div className="text-start mb-4">
            <Button variant="outline-danger" onClick={() => dispatch(clearCart())} aria-label="Clear entire cart">
              Clear Entire Cart
            </Button>
          </div>
        </Col>
        
        <Col lg={4}>
          <Card className="shadow-sm border-primary">
            <Card.Header className="bg-primary text-white fw-bold fs-5" tabIndex="0">Order Summary</Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-3 border-bottom pb-2">
                <span className="text-muted">Total Quantity:</span>
                <span className="fw-bold" aria-label={`Total quantity: ${totalQuantity} items`}>{totalQuantity} items</span>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <span className="text-muted fw-bold">Total Price:</span>
                <span className="fw-bold fs-5 text-primary" aria-label={`Total price: ${formatVND(totalPrice)}`}>{formatVND(totalPrice)}</span>
              </div>
              <Button variant="success" className="w-100" size="lg" disabled aria-label="Proceed to checkout (disabled)">
                Proceed to Checkout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
