import memoji from './memoji.png'
import Gradient from './Gradient.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Intro() {
    return (
        <Container id="intro" className='intro'>
            <Row className="justify-content-md-center">
                <Col md={{ span: 4, offset: 2 }} className='hello'>Hello! I am <span className='name'>Matthew McMeans</span></Col>
                <Col className='memoji-container'><img className="me" src={memoji} alt="memoji"/></Col>
            </Row>
            <Row className='im-se'>
                <Col>Im a Software Engineer.</Col>
            </Row>
            <Row className="currently">
                <Col>Currently, I'm a software engineer intern at <a className="dataprofits" href="https://data-profits.com/">Data Profits</a></Col>
            </Row>
            <Row className='about'>
                <Col className='about-text'>I’m a computer science student focused on frontend development with a flair for full-stack work. My strength lies in grasping user needs and aligning them with business goals, creating tech solutions that merge both seamlessly.</Col>
            </Row>
        </Container>
    )
}

export default Intro;