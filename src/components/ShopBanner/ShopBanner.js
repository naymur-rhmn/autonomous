import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import seaDrone from '../../assets/images/bkg_static5_elomus1.webp';
import './ShopBanner.css'



const ShopBanner = () => {

  return (
    <div className='shop-banner px-custom banner-bg d-flex align-items-center' style={{ backgroundImage: `url(${seaDrone})` }}>
      <Container fluid>
        <Row>
          <Col>
            <div className="banner-cnt" >
              <h2>SHOP OUR STORE</h2>
              <p>Camera Drone Usa SellsTop Name Brand Drones</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShopBanner;