import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import DPlogo2 from './DPlogo2.png'
import RJlogo from './RJlogo.png'

function Experience() {
  return (
    <Container className='experience'>
      <div className='relative'>Relative Work Experience</div>
      <Row className='justify-content-between'>
        <Col>
          <Card className='cardbox'>
            <Card.Body className="card-body-experience">
            <Row>
              <Col>
              <img className="card-image" src={DPlogo2} alt='data profits logo'/>
              </Col>
              <Col xs={8} className='cardtextabout'>
                <Card.Title className='text-white'>Data Profits</Card.Title>
                <Card.Text className='text-white card-text'>
                  SaaS demand forecasting, inventory replenishment, and supply chain solution provide enterprise-level performance without the enterprise price.
                </Card.Text>
                <a className="learn-more" href="https://data-profits.com/">LEARN MORE</a>
              </Col>
            </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='cardbox'>
            <Card.Body className="card-body-experience">
            <Row>
              <Col>
                <img className="card-image" src={RJlogo} alt='raymond james logo'/>
              </Col>
              <Col xs={8} className='cardtextabout'>
                <Card.Title className='text-white'>Raymond James</Card.Title>
                <Card.Text className='text-white card-text'>
                  As a global financial services firm, our focus is on providing trusted advice and tailored, sophisticated strategies for individuals and institutions.
                </Card.Text>
                <a className="learn-more" href="https://apply.jobappnetwork.com/clients/21468/posting/8610199/en">LEARN MORE</a>
              </Col>
            </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;
