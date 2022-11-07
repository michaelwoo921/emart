import React, {useState, useEffect} from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {register} from '../actions/userActions'
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import Loader from '../components/Loader';


const RegisterScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location.search ? '/' + location.search.split('=')[1]: '/';
  const {userInfo, loading, error} = useSelector(state => state.userRegister);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  console.log('1')

  useEffect(() => {
    console.log('2')
    if(userInfo){
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect])

  const submitHandler =(e) => {
    e.preventDefault();
    setMessage('')
    console.log(name,email, password, confirmPassword)
    if(password === confirmPassword){
      dispatch(register(name, email, password));
    } else {
      setMessage('passwords do not match')
    }
    
  }
  return (
    <FormContainer>
       <h1>Sign Up</h1>
       {loading && <Loader/>}
      {message ? <Message variant="danger">{message}</Message> : (
        error && <Message variant="danger">{error}</Message>
      )}
      
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