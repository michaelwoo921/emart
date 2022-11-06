import React, {useState} from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import FormContainer from '../components/FormContainer';


const RegisterScreen = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const submitHandler =(e) => {
    e.preventDefault();
    console.log(name,email, password, confirmPassword)
  }
  return (
    <FormContainer>
       <h1>Sign Up</h1>
      <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"
        value={name} onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

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
      <Form.Group className="mb-3" controlId="formConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
         value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="success" type="submit">
        Signup
      </Button>
      <Row className="py-3">
        <Col>
        Already have an account? <Link to="/login">Sign In</Link>
        </Col>
      </Row>

    </Form>
    </FormContainer>
       

  )
}

export default RegisterScreen