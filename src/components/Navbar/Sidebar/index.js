import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper,
    SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'


export const Sidebar = props => {
    return (
        <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
            <Icon onClick={props.toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={props.toggle}>About</SidebarLink>
                    <SidebarLink to="discover" onClick={props.toggle}>Discover</SidebarLink>
                    <SidebarLink to="services" onClick={props.toggle}>Services</SidebarLink>
                    <SidebarLink to="signup" onClick={props.toggle}>SignUp</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
