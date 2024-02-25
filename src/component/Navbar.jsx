import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function NavbarComponent() {
  return (
    <div>
      <Navbar color="primary" dark expand="md">
        <NavbarBrand href="/">Your Logo or Brand</NavbarBrand>
        {/* NavbarToggler and Collapse are not necessary for a simple navbar */}
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;