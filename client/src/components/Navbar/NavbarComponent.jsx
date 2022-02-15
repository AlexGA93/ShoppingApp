
import HelmetIcon from '../../imgs/helmet.png';
import {Link} from 'react-router-dom';
import './NavbarComponent.scss';
import { useSelector } from 'react-redux';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';



const NavbarComponent = () => {
  // If there is favs in array state render length array
  const favsCounter = useSelector(state => state.shopping.favs);
  console.log(favsCounter);
  // If there is cart in array state render length array
  const cartCounter = useSelector(state => state.shopping.cart);

    return (
      <div className='container'>
        <div className='container__name'>
          {/* logo and Name */}
          <img src={HelmetIcon} alt='helmet icon'/>
          <h2>Vikingz</h2>
        </div>
        {/* search section */}
        {/* links section */}
        <nav className='container__links'>
          <ul>
              <Link className='nav-link' to="/cart"><h3>STORE</h3></Link>
          </ul>
          <ul>
            <Link className='nav-link' to="/cart"><h3>FAVORITES</h3></Link>
            <div>
            {
              favsCounter.length > 0 ? (
                <span className="cart_counter" alt='cuantity icon'>
                  <p className='cart_counter__data'>{favsCounter.length}</p>
                </span>
              ) : null
            }
            </div>
          </ul>
          <ul>
            <Link className='nav-link' to="/cart"><h3>CART</h3></Link>
            <div>
            {
              cartCounter.length > 0 ? (
                <span className="cart_counter" alt='cuantity icon'>
                  <p className='cart_counter__data'>{cartCounter.length}</p>
                </span>
              ) : null
            }
            </div>
          </ul>
        </nav>
      </div>
      // <Navbar bg="light" expand={false}>
      //   <Container fluid>
      //     <Navbar.Brand href="/">
      //       VIKINGZ
      //       <img src={HelmetIcon} style={{width:'30px'}}/>
      //     </Navbar.Brand>
      //     <Navbar.Toggle aria-controls="offcanvasNavbar" />
      //     <Navbar.Offcanvas
      //       id="offcanvasNavbar"
      //       aria-labelledby="offcanvasNavbarLabel"
      //       placement="end"
      //     >
      //       <Offcanvas.Header closeButton>
      //         <Offcanvas.Title bg="light"  id="offcanvasNavbarLabel">Go to...</Offcanvas.Title>
      //       </Offcanvas.Header>
      //       <Offcanvas.Body>
      //         <Nav className="justify-content-end flex-grow-1 pe-3">
      //           <Nav.Link href="/store">Store</Nav.Link>
      //           <Nav.Link href="/favorites">Favorites</Nav.Link>
      //           <Nav.Link href="/cart">Cart</Nav.Link>
      //           <NavDropdown title="About..." id="offcanvasNavbarDropdown">
      //             <NavDropdown.Item href="#action3"><a href="https://github.com/AlexGA93">View my Github</a></NavDropdown.Item>
      //             <NavDropdown.Divider />
      //           </NavDropdown>
      //         </Nav>
      //         {/* <Form className="d-flex">
      //           <FormControl
      //             type="search"
      //             placeholder="Search"
      //             className="me-2"
      //             aria-label="Search"
      //           />
      //           <Button variant="outline-success">Search</Button>
      //         </Form> */}
      //       </Offcanvas.Body>
      //     </Navbar.Offcanvas>
      //   </Container>
      // </Navbar>
    )
}

export default NavbarComponent