import { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar as ReactStrapNavbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: -webkit-fill-available;
  position: absolute;

  .navbar-collapse {
    background: white;
    margin-right: -18px;
    margin-left: -16px;
    padding: 0px 16px;
  }

  .navbar-toggler:focus {
    box-shadow: none;
  }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleNavbarToggle = () => setIsOpen((current) => !current);

  return (
    <StyledWrapper className="px-2 px-sm-5 py-3">
      <ReactStrapNavbar expand="md" light>
        <NavbarBrand href="/">Raphael Ehindero</NavbarBrand>
        <NavbarToggler onClick={handleNavbarToggle} />
        <Collapse
          isOpen={isOpen}
          className="ml-auto justify-content-end"
          navbar
        >
          <Nav navbar>
            <NavItem>
              <NavLink href="/about/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/resume/">Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/portfolio/">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog/">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact/">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </ReactStrapNavbar>
    </StyledWrapper>
  );
};

export { NavBar };
