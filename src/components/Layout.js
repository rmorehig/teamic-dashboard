import React from 'react'
import styled from 'styled-components'
import GlobalStyle from 'theme/Global'
import Sidebar from 'components/Sidebar'

const LayoutWrapper = styled.div`
  height: 100vh;
  display: flex;
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidebar />
      {children}
      <GlobalStyle />
    </LayoutWrapper>
  )
}

export default Layout
