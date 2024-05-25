import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (email === '' || password === '') {
      setError('Email and password are required');
      return;
    }

    // Simulate a successful login
    if (email === 'test@example.com' && password === 'password') {
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="font-weight-bold" style={{ fontSize: '24px', color: '#007bff' }}>Email:</Form.Label> {/* Highlighted with bigger and thicker fonts */}
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="font-weight-bold" style={{ fontSize: '24px', color: '#007bff' }}>Password:</Form.Label> {/* Highlighted with bigger and thicker fonts */}
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
