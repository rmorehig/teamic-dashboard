import React from 'react'
import styled from 'styled-components'

const ViewWrapper = styled.section`
  height: 100%;
  padding: 40px 32px;
`
const TitleHeading = styled.h1`
  font-weight: normal;
  font-style: normal;
`
const Title = styled.div`
  display: flex;
  align-items: center;
`

const View = ({ title, titleAction, children }) => {
  return (
    <ViewWrapper>
      <Title>
        <TitleHeading>{title}</TitleHeading>
        {titleAction}
      </Title>
      {children}
    </ViewWrapper>
  )
}

export default View
