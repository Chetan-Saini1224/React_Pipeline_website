import React from 'react'
import {FaBars} from "react-icons/fa" 
import {
     NavbarContainer,
     Nav,
     NavLogo,
     MobileIcon,
     NavMenu,
     NavItem,
     NavLinks,
     NavBtn,
     NavBtnLink
     } from './NavbarElemnts';
const Navbar = ({toogle}) => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to="/">HO</NavLogo>
                  
                  <MobileIcon onClick={toogle}>
                      <FaBars />
                  </MobileIcon>

                  <NavMenu>

                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="product">Product</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem>
                        
                        <NavItem>
                            <NavLinks to="signup">Sign Up</NavLinks>
                        </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to="signin">Sign In</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>          
        </>
    );
}

export default Navbar;