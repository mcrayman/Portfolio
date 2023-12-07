import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import stockstatuswidget from './stockstatuswidget.png'

function FeaturedProject() {
  return (
<div id='projects' className='d-flex justify-content-center' style={{ width: '100%', marginTop: '100px' }}>
    <Row style={{ margin: '200px 0', maxWidth: '1200px' }}>
        <Col style={{ color: 'white', textAlign: 'left', alignSelf: 'center', marginRight: '40px' }} >
            <Row style={{ width: '300px', fontSize: '24px', color: '#7127BA' }}>Featured Project</Row>
            <Row style={{ fontSize: '50px', color: 'white', maxWidth: '600px' }}>Stock Status Widget</Row>
            <Row style={{ backgroundColor: '#1C1633', width: '600px', height: '120px', padding: '25px', marginTop: '10px', borderRadius: '15px' }}>Developed React-based widgets integrated into client applications, enabling seamless integration of Data Profits' IKIS technology. </Row>
        </Col>
        <Col style={{ alignSelf: 'center' }}>
            <Card className="card-projects" style={{ width: '400px', minWidth: '340px', height: '440px', minHeight: '440px', padding: 0, backgroundColor: '#1C1633', boxShadow: '0 4px 100px 0 #7127BA' }}>
                <Card.Img className="card-img-projects" style={{ height: '240px'}} variant="top" src={stockstatuswidget} alt='project image'/>
                <Card.Body className='card-body-projects' style={{ textAlign: 'left', color: 'white' }}>
                    <Card.Title>Data Profits</Card.Title>
                    <Card.Text>Stock Status MyDisplay informs the user about stock status across the last four weeks. It details on hand units, on order units, in-transit units, and available units.</Card.Text>
                    <Card.Text>Private 👿</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</div>
  )
}

export default FeaturedProject