import React, { useEffect, useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const Nav_Bar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navSize, setNavSize] = useState("md");
  useEffect(() => {
    if (window.innerWidth < 600) {
      setNavSize(false);
      return;
    }
    setNavSize("md");
    console.log("saif");
  }, [window.innerWidth]);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="my-2" color="dark" dark expand={navSize}>
        <NavbarBrand href="/">Tacnique</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar></Collapse>
      </Navbar>
    </div>
  );
};

export default Nav_Bar;
