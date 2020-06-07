import React from 'react'
import styled from 'styled-components'
import { menuLinks, projects, teams, integrations } from 'config/navigation'
import { NavLink } from 'react-router-dom'
const AddIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.25 7.25V2H8.75V7.25H14V8.75H8.75V14H7.25V8.75H2V7.25H7.25Z"
      fill="#7E858E"
    />
  </svg>
)

const SidebarWrapper = styled.div`
  width: 240px;
  border-right: 2px solid #d7dfe9;
  padding-top: 30px;
`
const Logo = styled.span`
  font-size: 28px;
  line-height: 32px;
  margin-left: 24px;
`
const Nav = styled.nav`
  margin-top: 21px;
`
const MainMenu = styled.ul``

const MenuRow = styled.li`
  padding: 4px 24px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-left: 3px solid transparent;
  a {
    &:hover {
      color: #0b69ff;
    }
  }
`
const MainMenuRow = styled.li`
  a {
    padding: 4px 24px;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-left: 3px solid transparent;
    &:hover {
      background: rgba(126, 133, 142, 0.04);
    }
    &:hover,
    &.active {
      border-color: #0b69ff;
    }
    &.active {
      color: #0b69ff;
    }
  }
`
const Button = styled.button`
  svg {
    margin-right: 4px;
  }
  font-size: 12px;
  line-height: 16px;
  color: #7e858e;
`
const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  > svg {
    margin-right: 9px;
  }
`
const Menu = styled.div`
  margin-top: 36px;
`
const MenuTitle = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: rgba(126, 133, 142, 0.6);
  margin-left: 24px;
`
const Warning = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: #0b69ff;
`
const Pending = styled(Warning)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(11, 105, 255, 0.1);
  border-radius: 100px;
  width: 24px;
  height: 24px;
`
const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Logo>TEAMIC</Logo>
      <Nav>
        <MainMenu>
          {menuLinks.map(({ route, icon, pending }) => (
            <MainMenuRow>
              <NavLink to={route} key={route} activeClassName="active">
                <FlexRow>
                  {icon}
                  {route}
                </FlexRow>
                {pending && <Pending>12</Pending>}
              </NavLink>
            </MainMenuRow>
          ))}
        </MainMenu>
        <Menu>
          <MenuTitle>Starred</MenuTitle>
          {projects
            .filter(({ starred }) => starred)
            .map(({ id, name }) => (
              <MenuRow key={id}>
                <NavLink to={`/projects/${id}`}>{name}</NavLink>
              </MenuRow>
            ))}
        </Menu>
        <Menu>
          <MenuTitle>Projects</MenuTitle>
          {projects.map(({ id, name }) => (
            <MenuRow key={id}>
              <NavLink to={`/projects/${id}`}>{name}</NavLink>
            </MenuRow>
          ))}
          <MenuRow>
            <NavLink to={`/projects`}>See all</NavLink>
          </MenuRow>
          <MenuRow>
            <Button>
              <AddIcon />
              Add
            </Button>
          </MenuRow>
        </Menu>
        <Menu>
          <MenuTitle>Teams</MenuTitle>
          {teams.map(({ id, name }) => (
            <MenuRow key={id}>
              <NavLink to={`/teams/${id}`}>{name}</NavLink>
            </MenuRow>
          ))}
          <MenuRow>
            <NavLink to={`/teams`}>See all</NavLink>
          </MenuRow>
          <MenuRow>
            <Button>
              <AddIcon />
              Add
            </Button>
          </MenuRow>
        </Menu>
        <Menu>
          <MenuTitle>Integrations</MenuTitle>
          {integrations.map(({ id, name, update }) => (
            <MenuRow key={id}>
              <NavLink to={`/integrations/${id}`}>{name}</NavLink>
              {update && <Warning>Update</Warning>}
            </MenuRow>
          ))}
          <MenuRow>
            {' '}
            <NavLink to={`/integrations`}>See all</NavLink>
          </MenuRow>
          <MenuRow>
            <Button>
              <AddIcon />
              Add
            </Button>
          </MenuRow>
        </Menu>
      </Nav>
    </SidebarWrapper>
  )
}

export default Sidebar
