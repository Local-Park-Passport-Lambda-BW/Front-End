import React from 'react'
import styled from 'styled-components';
import { Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';

import brandLogo from '../images/LP-logo.png'
import evansImage from '../images/evans.jpg'

const DashboardNav = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Nav className="ml-auto navCon" navbar>
          <NavItem>
            {/* <NavLink href="/components/">Inactive Link</NavLink> */}
          <Button color="success" size="sm" className="addParkButton">Add A Park</Button>{' '}
          </NavItem>

          <UncontrolledDropdown setActiveFromChild>
            <DropdownToggle tag="a" className="nav-link" caret>
              <span className="charles">Charles Vane</span>
              <img src={evansImage} alt="profile" className="evansDrop" />
            </DropdownToggle>
            <DropdownMenu className="dropMenu">
              <DropdownItem tag="a" href="/blah" active>View Profile</DropdownItem>
              <DropdownItem tag="a" href="/blah" active>Parks Visited</DropdownItem>
              <DropdownItem tag="a" href="/blah" active>Parks Added</DropdownItem>
              <DropdownItem tag="a" href="/blah" active>Account Settings</DropdownItem>
              <DropdownItem tag="a" href="/blah" active>Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>

    </div>
  )
}

export default DashboardNav;
