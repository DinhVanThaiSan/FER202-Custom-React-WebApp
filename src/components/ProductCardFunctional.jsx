import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

//renders the product card UI
const ProductCardFunctional = ({ product }) => {
  const { id, name, description, price, currentPrice, image } = product;
  const dispatch = useDispatch();

  //formats the price into Vietnamese currency
  const formatVND = (amount) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
  };

  //dispatches the product to the cart state
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card className="h-100 product-card shadow-sm rounded-0 border-light">
      <div className="product-image-container bg-white" style={{ borderBottom: 'none' }}>
        <Card.Img variant="top" src={image} alt={`Image of ${name}`} className="product-image p-2" />
      </div>
      <Card.Body className="d-flex flex-column text-center bg-white px-2">
        <Card.Title className="title-truncate-2 text-danger" style={{ fontSize: '0.95rem' }} title={name}>{name}</Card.Title>
        <Card.Text className="text-secondary mb-4 desc-truncate-2" style={{ fontSize: '0.8rem', lineHeight: '1.4' }} title={description}>
          {description}
        </Card.Text>
        <div className="mb-4 mt-auto">
          <div className="text-muted text-decoration-line-through mb-2" style={{ fontSize: '0.9rem' }} aria-label={`Original price: ${formatVND(price)}`}>
            {formatVND(price)}
          </div>
          <div className="text-danger" style={{ fontSize: '1.1rem' }} aria-label={`Current price: ${formatVND(currentPrice)}`}>
            {formatVND(currentPrice)}
          </div>
        </div>
        <div className="d-flex justify-content-center gap-2">
          <Button as={Link} to={`/products/${id}`} variant="danger" className="rounded-1 px-4" style={{ fontSize: '0.85rem' }} aria-label={`View details of ${name}`}>
            View Details
          </Button>
          <Button variant="outline-danger" className="rounded-1 px-2" style={{ fontSize: '0.85rem' }} onClick={handleAddToCart} aria-label={`Add ${name} to cart`}>
            Add
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCardFunctional;
