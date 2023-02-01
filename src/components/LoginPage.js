import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // validate the credentials using middleware
    const isValid = validateCredentials(email, password);

    if (isValid) {
      // navigate to the product listing page
      navigate('/');
    } else {
      // show error message using toast
      return toast.error('Invalid email or password');
    }
  };

  const validateCredentials = (email, password) => {
    // write your validation logic here, for example:
    if (!email || !password) {
      return false;
    }

    // call an API to check if the email and password are valid
    /*   const isValid = checkCredentialsWithAPI(email, password);

    return isValid;
*/
    return true;
  };

  return (
    <Card className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
      <Card.Header className="bg-transparent border-0 text-center text-uppercase">
        Login
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="btn-lg w-100 text-uppercase">
            Login
          </Button>
        </Form>
      </Card.Body>
      <ToastContainer />
    </Card>
  );
};

export default LoginPage;
