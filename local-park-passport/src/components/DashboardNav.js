import React from 'react'
import styled from 'styled-components';
import { Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import brandLogo from '../images/LP-logo.png'
import evansImage from '../images/evans.jpg'

const DashboardNav = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Inactive Link</NavLink>
          </NavItem>
          <UncontrolledDropdown setActiveFromChild>
            <DropdownToggle tag="a" className="nav-link" caret>
              Dropdown
          </DropdownToggle>
            <DropdownMenu>
              <DropdownItem tag="a" href="/blah" active>Link</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
      
    </div>
  )
}

export default DashboardNav;
