import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

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
      <div >
        <Navbar color="primary" dark expand="md" style={{position: "fixed", width: "100%", zIndex: "100"}}>
          <NavbarBrand href="/">My Portfolio</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#about">ABOUT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#skills">SKILLS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#resume">RESUME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#work-experience">EXPERIENCE</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#education">EDUCATION</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#references">REFERENCES</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#blog">BLOG</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">CONTACT</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}