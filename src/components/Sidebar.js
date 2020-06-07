import React from 'react'
import styled from 'styled-components'
import { menuLinks } from 'config/navigation'

const SidebarWrapper = styled.div`
  width: 240px;
  border-right: 2px solid #d7dfe9;
`
const Nav = styled.nav``
const MainMenu = styled.ul``
const MenuRow = styled.li`
  padding: 0 24px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  svg {
    margin-right: 9px;
  }
`

const Logo = styled.span``
const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Logo>TEAMIC</Logo>
      <Nav>
        <MainMenu>
          {menuLinks.map(({ route, icon }) => (
            <MenuRow key={route}>
              {icon}
              {route}
            </MenuRow>
          ))}
        </MainMenu>
      </Nav>
    </SidebarWrapper>
  )
}

export default Sidebar
