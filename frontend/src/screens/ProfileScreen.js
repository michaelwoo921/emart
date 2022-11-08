import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {Form, Button, Row, Col, Alert} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {getUserDetails, updateUserProfile} from '../actions/userActions';
import Message from '../components/Message';

const ProfileScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user, loading, error} = useSelector(state => state.userDetails)
    const {userInfo} = useSelector(state => state.userLogin);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');


    useEffect(() => {
        if(!userInfo){
            navigate('/login');
        }else{
            if(user && user.name){
                setName(user.name);
                setEmail(user.email);
            }else{
                dispatch(getUserDetails('/profile'))
            }
        }
        
    }, [dispatch, userInfo, navigate, user])

    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            setMessage('Password do not match');
        } else {
            // update profile
            dispatch(updateUserProfile({name, email, password}))
           setMessage('Profile updated')
        }

    }

  return (
    <Row>
        <Col md={3}>
            <h2>User Profile</h2>
            {message && <Message>{message}</Message>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="formBasicName" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder='Enter name'
                    value={name} onChange ={e => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder='Enter email'
                    value={email} onChange ={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder='Enter new password' 
                    value={password} onChange ={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicConfirmPassword" className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder='Confirm new password' secure
                    value={confirmPassword} onChange ={e => setConfirmPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Update
                </Button>
                
            </Form>

        </Col>
        <Col md={9}>
            <h2>My Orders</h2>
        </Col>
    </Row>
  )
}

export default ProfileScreen