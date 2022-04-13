import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import screen from '../../assets/images/drone_rotate_360.webp';
import hdmi from '../../assets/images/hdmi_connect.webp';
import battery from '../../assets/images/high_battery.webp';
import weight from '../../assets/images/drone_weight_icon.webp';
import staticDrone from '../../assets/images/img-static1-elomus1.webp'
import './FeatureOne.css'

const FeatureOne = () => {
  return (
    <div className='feature-one mt-5 pt-5'>
      <Container>
        <Row>
          <Col>
            <div className="section-title text-center">
              <p>Experience</p>
              <h2>FLY IN THE SKY</h2>
            </div>
          </Col>
        </Row>
        <Row className='mt-5 pt-3 row-cols-lg-4 row-cols-md-2 row-cols-1'>
          <Col>
            <div className="single-feature text-center">
              <img className='mb-4' src={screen} alt="" />
              <h5 className='mb-2'>Immersive Field of View</h5>
              <p className='lh-base'>Screen equivalent to 125” screen viewed from 10 feet with 24-bit true color (16 million colors)</p>
            </div>
          </Col>
          <Col>
            <div className="single-feature text-center">
              <img className='mb-4' src={hdmi} alt="" />
              <h5 className='mb-2'>Immersive Field of View</h5>
              <p className='lh-base'>Screen equivalent to 125” screen viewed from 10 feet with 24-bit true color (16 million colors)</p>
            </div>
          </Col>
          <Col>
            <div className="single-feature text-center">
              <img className='mb-4' src={battery} alt="" />
              <h5 className='mb-2'>Immersive Field of View</h5>
              <p className='lh-base'>Screen equivalent to 125” screen viewed from 10 feet with 24-bit true color (16 million colors)</p>
            </div>
          </Col>
          <Col>
            <div className="single-feature text-center">
              <img className='mb-4' src={weight} alt="" />
              <h5 className='mb-2'>Immersive Field of View</h5>
              <p className='lh-base'>Screen equivalent to 125” screen viewed from 10 feet with 24-bit true color (16 million colors)</p>
            </div>
          </Col>

        </Row>
        <Row>
          <Col>
            <div className="static-drone text-center mt-5 pt-4">
              <img src={staticDrone} alt="" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeatureOne;