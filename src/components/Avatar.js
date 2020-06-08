import React from 'react'
import styled from 'styled-components'
import { getInitials } from 'utils/data'

const AvatarWrapper = styled.div`
  background-color: #ffbbd3;
  color: #f13838;
  border-radius: 100px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Avatar = ({ name }) => {
  return <AvatarWrapper>{getInitials(name)}</AvatarWrapper>
}

export default Avatar
