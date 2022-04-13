import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Feedback = () => {
  return (
    <div className='feedback  mt-5 pt-5'>
      <Container>
        <Row>
          <Col>
            <div className="section-title text-center">
              <p>Welcome to my personal presentation</p>
              <h2>WHAT OUR <span className='blue-txt'>CLIENTS SAY</span></h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Feedback;