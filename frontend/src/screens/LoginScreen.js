import React, {useEffect, useState} from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../actions/userActions';
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import Loader from '../components/Loader';
import users from '../data/users';


const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const {userInfo, loading, error} = useSelector(state => state.userLogin);
  const redirect = location.search ? '/' +  location.search.split('=')[1]: '/'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(redirect)

  useEffect(() => {
    if(userInfo){
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler =(e) => {
    e.preventDefault();
    dispatch(login(email, password));
  }
  return (
    <FormContainer>
       <h1>Sign In</h1>
       {error && <Message variant="danger">{error}</Message>}
      {loading? (
        <Loader />
      ): (
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
      )}
       

    </FormContainer>
       

  )
}

export default LoginScreen