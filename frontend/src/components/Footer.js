import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
        <Container>
            <Row>
                <Col>
                &copy; {new Date().getFullYear()}, Emart
                </Col>
            </Row>
        </Container>
      </footer>
  )
}

export default Footer