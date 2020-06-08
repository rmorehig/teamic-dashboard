import React from 'react'
import styled from 'styled-components'
import Flex from 'components/Flex'
import colors from 'theme/colors'
import dropboxLogo from 'assets/dropbox.svg'
import appleLogo from 'assets/apple.svg'
import cocacolaLogo from 'assets/cocacola.svg'
import { NavLink } from 'react-router-dom'
import { getInitials } from 'utils/data'

const Company = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const CompanyDescription = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
`
const CompanyLogo = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid #d7dfe9;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`
const CompanyName = styled.span`
  color: ${colors.darkBlue};
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`
const CompanyType = styled.span`
  font-weight: normal;
`
const Member = styled.div`
  background-color: #ffbbd3;
  color: #f13838;
  border-radius: 100px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 11px;
`
const ActiveProyects = styled(Flex)`
  font-weight: 500;
  svg {
    margin-left: 4px;
  }
`
const ArrowDown = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.76619 7.06669L8.91644 3.91644L10 5L5 10L0 5L1.08356 3.91644L4.23381 7.06669L4.23381 0L5.76619 0L5.76619 7.06669Z"
      fill={colors.success}
    />
  </svg>
)

export const data = [
  {
    id: 1,
    name: 'Dropbox, Inc',
    type: 'Technology',
    activeProjects: 9,
    activeProjectsStatus: 'down',
    members: [],
    logo: dropboxLogo,
  },
  {
    id: 2,
    name: 'Apple, Inc',
    type: 'Technology',
    activeProjects: 4,
    activeProjectsStatus: 'down',
    members: [],
    logo: appleLogo,
  },
  {
    id: 3,
    name: 'Coca Cola Company',
    type: 'Technology',
    activeProjects: 2,
    activeProjectsStatus: 'down',
    members: ['John Smith', 'Martha Kent', 'Kal El'],
    logo: cocacolaLogo,
  },
]

export const columns = [
  {
    id: 'name',
    name: 'company',
    sort: true,
    render: ({ id, name, type, logo }) => (
      <Company to={`/teams/${id}`}>
        <CompanyLogo>
          <img src={logo} alt="company logo" />
        </CompanyLogo>
        <CompanyDescription>
          <CompanyName>{name}</CompanyName>
          <CompanyType>{type}</CompanyType>
        </CompanyDescription>
      </Company>
    ),
  },
  {
    id: 'activeProjects',
    name: 'active projects',
    sort: true,
    render: ({ activeProjects, activeProjectsStatus }) => (
      <ActiveProyects>
        {activeProjects}
        {activeProjectsStatus === 'down' && <ArrowDown />}
      </ActiveProyects>
    ),
  },
  {
    id: 'members',
    name: 'members',
    render: ({ members = [] }) => (
      <Flex>
        {members?.map(member => (
          <Member>{getInitials(member)}</Member>
        ))}
      </Flex>
    ),
  },
]
