import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Layout({children}) {
  return (
    <div>
      <>
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand>
         <Nav.Link as={Link} to='/'> 
          Auth Demo
         </Nav.Link> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto'>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    <Container>{children}</Container>
    </>
    </div>
  )
}

export default Layout
