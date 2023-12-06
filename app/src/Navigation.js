import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Navigation() {
    return (
        <>
        <Navbar className='navbar' expand="lg" fixed="top">
            <Container>
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link className="link" href="#intro">Me</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="link" href="#projects">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="link" href="#contact">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="link" href="https://github.com/mcrayman"><FaGithub className='github'/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="link" href="https://www.linkedin.com/in/matthew-mcmeans-085828195/"><FaLinkedin className='linkedin'/></Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
        </>
)}

export default Navigation;