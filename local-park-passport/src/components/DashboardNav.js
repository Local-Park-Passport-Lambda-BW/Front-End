import React from 'react'
import { Navbar, Nav, NavItem, Input, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';

import brandLogo from '../images/LP-logo.png'
import evansImage from '../images/evans.jpg'

const DashboardNav = () => {
  return (
    <div>
      <Navbar color="white" light expand="md">
        <Nav className="logoCon">
          <img src={brandLogo} alt="brand logo" className="logo" />
        </Nav>
        <Nav>
          <Input
            className="navSearch"
            type="search"
            name="search"
            placeholder="Find a park..."
          />
        </Nav>
        <Nav className="ml-auto navCon" navbar>
          <NavItem>
          <Button color="success" size="sm" className="addParkButton">Add A Park</Button>{' '}
          </NavItem>

          <UncontrolledDropdown setActiveFromChild>
            <DropdownToggle tag="a" className="nav-link" caret>
              <span className="charles">Charles Vane</span>
              <img src={evansImage} alt="profile" className="evansDrop" />
            </DropdownToggle>
            <DropdownMenu className="dropMenu">
              <DropdownItem tag="a" href="/blah" active>View Profile</DropdownItem>
              <DropdownItem tag="a" href="/blah">Parks Visited</DropdownItem>
              <DropdownItem tag="a" href="/blah">Parks Added</DropdownItem>
              <DropdownItem tag="a" href="/blah">Account Settings</DropdownItem>
              <DropdownItem tag="a" href="/blah" className="navLogout">Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>

    </div>
  )
}

export default DashboardNav;
