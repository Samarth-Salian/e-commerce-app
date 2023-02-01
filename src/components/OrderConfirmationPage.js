import React from 'react';
import { Container, ListGroup, Button, Alert, Image } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDetails = location.state?.orderDetails;
  if (!orderDetails) {
    return <p>Loading...</p>;
  }
  return (
    <Container>
      <h1 className="text-center my-5">Order Confirmation</h1>
      <Alert variant="success" className="text-center my-5">
        <Image
          src="https://via.placeholder.com/150x150"
          alt="Order Confirmed"
          height="100"
          width="100"
        />
        <p className="my-3">Your order has been successfully placed!</p>
      </Alert>
      <ListGroup className="my-5">
        <ListGroup.Item>
          <strong>Order Number:</strong> {orderDetails.orderNumber}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Items:</strong>
          {orderDetails.items.map((item, index) => (
            <p key={item.id || index}>{item.name}</p>
          ))}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Shipping Address:</strong> {orderDetails.shippingAddress}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Payment Method:</strong> {orderDetails.paymentMethod}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Total:</strong> &#8377;{orderDetails.total}
        </ListGroup.Item>
      </ListGroup>
      <div className="d-flex justify-content-center">
        <Button variant="primary" className="mt-3" onClick={() => navigate('/')}>
          Continue Shopping
        </Button>
      </div>
    </Container>
  );
};

export default OrderConfirmationPage;
