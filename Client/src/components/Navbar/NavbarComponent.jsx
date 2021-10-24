import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import './NavbarComponent.scss';

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar color="light" light expand="md" className="navbar">
          <NavbarBrand className="navbar__name" href="/">VIKINGZ</NavbarBrand>
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
    )
}

export default NavbarComponent

