import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbarh.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Navbarh = () => {
    return (
        <div className='nav-nav-stick'>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home" className='nav-brand'><Link to="/">CareerLink</Link></Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="" className='nav-links'><Link to="/"><FontAwesomeIcon icon={faHouse} style={{ marginRight: '5px' }} />Home</Link></Nav.Link>
                        <Nav.Link className='nav-links'><Link to="/jobs"><FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginRight: '5px' }} />Find Jobs</Link></Nav.Link>
                        <Nav.Link href="#pricing" className='nav-links'><FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbarh
