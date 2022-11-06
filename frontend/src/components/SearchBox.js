import React from 'react';
import {Nav, Form, Button} from 'react-bootstrap'

const SearchBox = () => {
  return (
    (
        <Nav className="me-auto">
        <Form className="d-flex e-search">
            <Form.Control
            type="search"
            placeholder="Search products"
            className="me-2"
            aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>
         </Nav>
    )
  )
}

export default SearchBox