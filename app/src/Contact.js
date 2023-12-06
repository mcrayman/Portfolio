import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';


function Contact() {
  return (
    <Row style={{ margin: '0 400px 50px 400px' }} id="contact">
        <Row>
            <div style={{ fontSize: '36px', color: 'white', textAlign: 'center', margin: '200px 0 100px 0' }}>Lets Connect!</div>
        </Row>
        <Row style={{ textAlign: 'center', marginBottom: '100px' }}>
            <Col className="d-flex justify-content-center">
            <a href="mailto:mrmcmans@memphis.edu"><FaEnvelope className='icon-connect'/></a>
            </Col>
            <Col className="d-flex justify-content-center">
            <a href="https://github.com/mcrayman"><FaGithub className='icon-connect'/></a>
            </Col>
            <Col className="d-flex justify-content-center">
            <a href="https://www.linkedin.com/in/matthew-mcmeans-085828195/"><FaLinkedin className='icon-connect'/></a> 
            </Col>
        </Row>
    </Row>

  )
}

export default Contact