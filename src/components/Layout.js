import React from 'react'
import styled from 'styled-components'
import GlobalStyle from 'theme/Global'
import Sidebar from 'components/Sidebar'
import Normalize from 'theme/Normalize'

const LayoutWrapper = styled.div`
  height: 100vh;
  display: flex;
`
const Main = styled.main`
  flex: 1;
`
const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
const Header = styled.header`
  height: 72px;
  border-bottom: 2px solid #d7dfe9;
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <Column>
        <Header />
        <Main>{children}</Main>
      </Column>
      <GlobalStyle />
      <Normalize />
    </LayoutWrapper>
  )
}

export default Layout
