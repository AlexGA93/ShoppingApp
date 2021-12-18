
import HelmetIcon from '../../imgs/helmet.png';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './NavbarComponent.scss';

const NavbarComponent = () => {

    return (
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="/">
            VIKINGZ
            <img src={HelmetIcon} style={{width:'30px'}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title bg="light"  id="offcanvasNavbarLabel">Go to...</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/store">Store</Nav.Link>
                <Nav.Link href="/favorites">Favorites</Nav.Link>
                <Nav.Link href="/cart">Cart</Nav.Link>
                <NavDropdown title="About..." id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3"><a href="https://github.com/AlexGA93">View my Github</a></NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
              {/* <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    )
}

export default NavbarComponent

/*
<Navbar color="light" light expand="md" className="text-white">
          <NavbarBrand href="/">
            VIKINGZ
            <img src={HelmetIcon} style={{width:'30px'}}/>
          </NavbarBrand>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/store">Store</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/favorites">Favorites</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/cart">Cart</NavLink>
              </NavItem>
            </Nav>
        </Collapse>
        </Navbar>
*/ 