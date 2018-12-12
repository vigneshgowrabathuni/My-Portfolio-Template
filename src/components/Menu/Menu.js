import React from 'react';
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
  DropdownItem } from 'reactstrap';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">My Portfolio</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">ABOUT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">SKILLS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">PORTFOLIO</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">EXPERIENCE</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">EDUCATION</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">REFERENCES</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">BLOG</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">CALENDAR</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">CONTACT</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}