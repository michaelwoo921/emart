import React from 'react';
import {Navbar, Container, Form, Nav, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import SearchBox from './SearchBox';

const Header = () => {
  return (
    <header className="header">
        <Navbar bg="dark" variant="dark" className="navbar" expand="lg"  collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                <Navbar.Brand className="brand">
              
                    <i className="fas fa-shopping-cart"></i>
                    {' '} Emart
                </Navbar.Brand>
                </LinkContainer>
           
            <Navbar.Toggle aria-controls="responsive-nav" />
            <Navbar.Collapse id="responsive-nav">

                <SearchBox />    
                <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <LinkContainer to='/login'>
                    <Nav.Link><i className="fas fa-user"></i> User</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/cart">
                    <Nav.Link>  <i className="fas fa-shopping-cart"></i> Cart </Nav.Link>
                    </LinkContainer>
                
                    
            
                </Nav>

             </Navbar.Collapse>
            </Container>
      </Navbar>
    </header>
  )
}

export default Header