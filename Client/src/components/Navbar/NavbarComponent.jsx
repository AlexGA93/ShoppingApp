import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import './NavbarComponent.scss';

const NavbarComponent = () => {
    // const [isOpen, setIsOpen] = useState(false);

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
      <Navbar color="faded" light className="navbar" className="navbar-dark bg-dark">
        <NavbarBrand href="/" className="mr-auto navbar__name">VIKINGZ</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar className="navbar__collapsed">
          <Nav navbar>
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
        // <Navbar color="light" light expand="md" className="navbar">
        //   <NavbarBrand className="navbar__name" href="/">VIKINGZ</NavbarBrand>
        //     <Collapse isOpen={isOpen} navbar>
        //       <Nav className="mr-auto" navbar>
        //         <NavItem>
        //           <NavLink href="/store">Store</NavLink>
        //         </NavItem>
        //         <NavItem>
        //           <NavLink href="/favorites">Favorites</NavLink>
        //         </NavItem>
        //         <NavItem>
        //           <NavLink href="/cart">Cart</NavLink>
        //         </NavItem>
        //       </Nav>
        //   </Collapse>
        // </Navbar>
    )
}

export default NavbarComponent

