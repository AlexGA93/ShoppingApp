import React, { useState } from 'react';
import HelmetIcon from '../../imgs/helmet.png';
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
    )
}

export default NavbarComponent

