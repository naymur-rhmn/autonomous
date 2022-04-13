import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner py-5 text-center'>
      <Container>
        <Row>
          <Col>
            <p>Buy Now Phantom 4 Professional offer an immersive, fun flying experience.</p>
            <Button>Shop Now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;