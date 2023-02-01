import React, { useState } from 'react';
import { Form, FormControl, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = ({ name, address, cart, total }) => {
  const [formData, setFormData] = useState({
    name,
    address,
    paymentMethod: '',
  });
  const navigate = useNavigate();

  const paymentMethods = [
    { id: 1, name: 'Credit Card' },
    { id: 2, name: 'PayPal' },
    { id: 3, name: 'Apple Pay' },
    { id: 4, name: 'Google Pay' },
  ];

  const handleSubmit = event => {
    event.preventDefault();
    if (!formData.paymentMethod) {
      alert('Please select a payment method');
      return;
    }
    const items = cart.map(item => ({
      id: item.id,
      name: item.name,
    }));
    const orderDetails = {
      orderNumber: '123456',
      items,
      name: formData.name,
      shippingAddress: formData.address,
      paymentMethod: formData.paymentMethod,
      total,
    };
    // Call API to process payment and save order information.
    localStorage.removeItem('cart');
    navigate('/order-confirmation', { state: { orderDetails } });
  };

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <FormControl name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <FormControl name="address" value={formData.address} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formPaymentMethod">
          <Form.Label>Payment Method</Form.Label>
          <Form.Control
            as="select"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select a payment method</option>
            {paymentMethods.map(method => (
              <option key={method.id} value={method.name}>
                {method.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <div className="mt-2 text-center">
          <Button variant="primary" type="submit">
            Proceed to Checkout
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default CheckoutPage;
