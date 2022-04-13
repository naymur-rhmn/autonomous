import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import diameter from '../../assets/images/diameter_icon_.webp';
import vQuality from '../../assets/images/video_quality_icon.webp';
import weight from '../../assets/images/drone_weight_icon.webp';
import lense from '../../assets/images/img-static3-elomus1.webp';
import whiteDrone from '../../assets/images/img-static4-elomus1.webp';
import './FeatureTwo.css'

const FeatureTwo = () => {
  return (
    <div className='feature-two pb-5'>
      <Container>
        <Row className='mb-4'>
          <Col lg={6}>
            <div className="content pt-5 mt-5 pe-5">
              <h2 className='content-title mb-3'>Integrated <span className='blue-txt'>PTZ camera</span><br /> Stabilizes every single <br /> pixel in the image</h2>
              <p className='content-text'>PTZ camera includes a processor that calculates and compensates additional movements, and highly sensitive 3-axis gambal stabilizes up to 2000 vibrations per second, ± 0.02° accuracy.</p>

              <Row className="">
                <Col className="spc d-flex align-items-center">
                  <img className='img-fluid' src={diameter} alt="" />
                  <div className="spc-abt ms-2">
                    <p className='spc-abt-big-txt'><span>58</span>mm</p>
                    <p className='spc-abt-title'>Diameter</p>
                  </div>
                </Col>
                <Col className="spc d-flex align-items-center">
                  <img className='img-fluid' src={vQuality} alt="" />
                  <div className="spc-abt ms-2">
                    <p className='spc-abt-big-txt'><span>40</span>fps</p>
                    <p className='spc-abt-title'>4K Video</p>
                  </div>
                </Col>
                <Col className="spc d-flex align-items-center">
                  <img className='img-fluid' src={weight} alt="" />
                  <div className="spc-abt ms-2">
                    <p className='spc-abt-big-txt'><span>150</span>g</p>
                    <p className='spc-abt-title'>Weight</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <img src={lense} alt="" className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="drone-structure mb-5">
              <div className="drone-img text-center">
                <img src={whiteDrone} alt="" />
              </div>
              <div className="drone-text text1 text-end">
                <h5>Robust Structure</h5>
                <p>Even after falling down, your drone will rise the phoenix.</p>
              </div>
              <div className="drone-text text2 text-end">
                <h5>RHD Video Recording</h5>
                <p>Get the drone with a spectacular 4k camera.</p>
              </div>
              <div className="drone-text text3 text-start">
                <h5>Simple Disassembly</h5>
                <p>Need a new detail? No problem at all!</p>
              </div>
              <div className="drone-text text4 text-start">
                <h5>Advanced Technology</h5>
                <p>We offer only the latest technologies on the market</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeatureTwo;