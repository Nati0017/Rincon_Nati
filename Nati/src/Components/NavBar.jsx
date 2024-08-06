
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, } from 'react-bootstrap';

const NavBar = () => {
  return (
      <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Web Naty</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  <Nav.Link href="#home">Inicio</Nav.Link>
                  <Nav.Link href="#historias">Historias</Nav.Link>
                  <Nav.Link href="#pensamientos">Pensamientos</Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
  );
};

export default NavBar;
