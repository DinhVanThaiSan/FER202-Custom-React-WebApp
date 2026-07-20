import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../features/products/productsSlice';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const formatVND = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      dispatch(deleteProduct(id));
    }
  };

  if (!products || products.length === 0) {
    return <div className="text-center my-4 text-muted border p-4 bg-white rounded shadow-sm">No products found.</div>;
  }

  return (
    <div className="table-responsive bg-white rounded shadow-sm border border-dark">
      <div className="bg-dark text-white text-center py-2 fw-bold fs-5">
        Product List
      </div>
      <Table className="align-middle mb-0" bordered hover>
        <thead className="table-light text-center">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Current Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td className="fw-semibold">{product.name}</td>
              <td className="text-truncate" style={{ maxWidth: '200px' }} title={product.description}>{product.description}</td>
              <td className="text-muted text-decoration-line-through">{formatVND(product.price)}</td>
              <td className="text-primary fw-bold">{formatVND(product.currentPrice)}</td>
              <td>
                <div className="d-flex justify-content-center gap-2">
                  <Button as={Link} to={`/products/${product.id}`} variant="outline-primary" size="sm">
                    View Details
                  </Button>
                  <Button as={Link} to={`/products/${product.id}/edit`} variant="warning" size="sm" className="text-dark">
                    Edit
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(product.id, product.name)}>
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
