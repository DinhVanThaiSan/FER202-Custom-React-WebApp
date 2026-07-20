import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5 mb-5">
      <h1 className="mb-4 text-center">About This Project</h1>

      <Row className="g-4">
        <Col md={8}>
          <Card className="shadow-sm h-100 border-0">
            <Card.Body>
              <Card.Title className="fs-3">FER202 Assignment - Mini E-Commerce</Card.Title>
              <Card.Text className="text-muted mb-4">
                This is a React-based web application built as the final assignment for the Front-End Web Development with React (FER202) course. It simulates a laptop store with features like product listing, filtering, and a shopping cart.
              </Card.Text>

              <h5 className="mt-4 mb-3">Technologies Used</h5>
              <ul className="mb-4">
                <li>React.js (Create React App)</li>
                <li>React Router DOM (Navigation)</li>
                <li>React Bootstrap & Vanilla CSS (Styling)</li>
                <li>Redux Toolkit (State Management)</li>
                <li>Public REST API (Data Fetching)</li>
              </ul>

              <h5 className="mt-4 mb-3">Learning Outcomes (LO1 - LO8) Achieved</h5>
              <ListGroup variant="flush">
                <ListGroup.Item>✅ <strong>LO1:</strong> Project Setup with CRA & Git.</ListGroup.Item>
                <ListGroup.Item>✅ <strong>LO2:</strong> Class & Functional Components.</ListGroup.Item>
                <ListGroup.Item>✅ <strong>LO3:</strong> JSX, Props, ES6 syntax.</ListGroup.Item>
                <ListGroup.Item>✅ <strong>LO4:</strong> Bootstrap integration & Custom CSS.</ListGroup.Item>
                <ListGroup.Item>✅ <strong>LO5:</strong> React Router configuration.</ListGroup.Item>
                <ListGroup.Item>✅ <strong>LO6:</strong> Event Handling & useState/useEffect.</ListGroup.Item>
                <ListGroup.Item>✅ <strong>LO7:</strong> Public API Fetching & Loading states.</ListGroup.Item>
                <ListGroup.Item>✅ <strong>LO8:</strong> Global State Management (Redux).</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm h-100 border-0 bg-light">
            <Card.Body>
              <Card.Title className="text-center mb-4">Development Team</Card.Title>
              <ListGroup>
                <ListGroup.Item className="d-flex align-items-center">
                  <div className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center me-3" style={{ width: '40px', height: '40px' }} aria-hidden="true">M1</div>
                  <span>Đinh Văn Thái San</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <div className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center me-3" style={{ width: '40px', height: '40px' }} aria-hidden="true">M2</div>
                  <span>Dương Thành Long</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <div className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center me-3" style={{ width: '40px', height: '40px' }} aria-hidden="true">M3</div>
                  <span>Lê Văn Minh Phát</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <div className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center me-3" style={{ width: '40px', height: '40px' }} aria-hidden="true">M4</div>
                  <span>Nguyễn Hoàng Xuân Ny</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <div className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center me-3" style={{ width: '40px', height: '40px' }} aria-hidden="true">M5</div>
                  <span>Nguyễn Thanh Hoàng</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
