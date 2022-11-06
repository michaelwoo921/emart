import React, {useState} from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom'
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import users from '../data/users';


const LoginScreen = () => {
  const navigate = useNavigate();
 let signedInUser;

 const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')



  const submitHandler =(e) => {
    e.preventDefault();
    console.log(email, password)
    signedInUser = users.find(user => user.email === email && user.password === password);
    if(signedInUser){
      navigate('/');
    } else {
      setError('Invalid email or password')
      navigate('/login')
    }
  }
  return (
    <FormContainer>
       <h1>Sign In</h1>

       {error && <Message variant="danger">{error}</Message>}
      <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        value={email} onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
         value={password} onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="success" type="submit">
        Sign In
      </Button>
      <Row className="py-3">
        <Col>
        New Customer? <Link to="/register">Register</Link>
        </Col>
      </Row>

    </Form>
    </FormContainer>
       

  )
}

export default LoginScreen