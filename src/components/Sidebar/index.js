import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SideBtnWrap,
    SidebarLink,
    SidebarMenu,
    SidebarWrapper,
    SidebarBtn   } from './SidebarElements';
const Sidebar = ({isopen,toogle}) => 
{
    return (        
    <SidebarContainer isopen={isopen} onClick={toogle}>
             <Icon onClick={toogle}>
                 <CloseIcon />
             </Icon>

             <SidebarWrapper>
                 <SidebarMenu>
                      <SidebarLink to="about" onClick={toogle}>
                          About  
                      </SidebarLink>

                      <SidebarLink to="product" onClick={toogle}>
                          Product  
                      </SidebarLink>

                      <SidebarLink to="Contact" onClick={toogle}>
                          Contact  
                      </SidebarLink>

                      <SidebarLink to="signup" onClick={toogle}>
                            Sign Up
                      </SidebarLink>

                </SidebarMenu>

                <SideBtnWrap>
                <SidebarBtn to="/signin" onClick={toogle}>Sign In</SidebarBtn>
                 </SideBtnWrap>
             </SidebarWrapper>     
    </SidebarContainer>
    )
}
export default Sidebar;