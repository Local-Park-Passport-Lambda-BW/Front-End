import React from 'react'
import styled from 'styled-components';
import { Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import brandLogo from '../images/LP-logo.png'
import evansImage from '../images/evans.jpg'

const NavContainer = styled.div`
  display: flex;

  .brandCon {
    padding: 1.5em;

    img {max-width: 100%;
      width: 30px;
      height: auto ;
    }
  }

  .mainNav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .searchCon {

    }

    .rightNav {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      img {
        max-width: 100%;
        border-radius: 50%;
        width: 40px;
        height: auto;
      }
    }
  }
  
`;

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
