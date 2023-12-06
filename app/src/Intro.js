import memoji from './memoji.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Intro() {
    return (
        <Container id="intro" className='intro' style={{width: '75%'}}>
            <Row className="justify-content-center">
                <Col md={7}  className="align-self-center" style={{ marginTop: '100px'}}>
                <div className='hello' style={{ margin: '20px 0 20px 0'}}>Hello! I am <span className='name'>Matthew McMeans</span></div>
                <div className='im-se'>Im a Software Engineer.</div>
                <div className="currently" >Currently, I'm a software engineer intern at <a className="dataprofits" href="https://data-profits.com/">Data Profits</a></div>
                </Col>
                <Col className='memoji-container' style={{ marginTop: '100px' }}><img className="me" src={memoji} alt="memoji" style={{ width: '400px'}}/></Col>
            </Row>

            <Row className='about' style={{ marginTop: '50px',}}>
                <Col className='about-text'>I’m a computer science student focused on frontend development with a flair for full-stack work. My strength lies in grasping user needs and aligning them with business goals, creating tech solutions that merge both seamlessly.</Col>
            </Row>
        </Container>
    )
}

export default Intro;