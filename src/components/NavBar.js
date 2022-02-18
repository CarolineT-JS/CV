import {Navbar, Container, Nav} from 'react-bootstrap';
import '../style/Navbar.css';

function myNavbar(){

    return (
        <>
            <Navbar bg="black" variant="dark" className="Navbar">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto w-100">
                        <Nav.Link href="/">Services</Nav.Link>
                        <Nav.Link href="#features">Skills</Nav.Link>
                        <Nav.Link href="#features">SoftSkills</Nav.Link>
                        <Nav.Link href="#features">Portfolio</Nav.Link>
                        <Nav.Link href="/contact" className="ms-auto">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}

export default myNavbar;