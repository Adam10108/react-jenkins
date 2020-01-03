// @flow
import React from 'react'
import styled from '@emotion/styled'

const HeaderStyled = styled.div`
  height: ${props => props.height};
  padding: ${props => props.padding};
  background: ${props => props.background};

  display: flex;
  justify-content: center;
  align-items: center;
`

type Props = {
  children: any
}

const HeaderBar = (props: Props) => {
  const { children, ...rest } = props

  return <HeaderStyled {...rest}>{children}</HeaderStyled>
}

export default HeaderBar
