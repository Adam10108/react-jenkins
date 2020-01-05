// @flow
import { Col } from 'antd'
import React from 'react'
import styled from '@emotion/styled'

import Header from '../header'

import UserIcon from '../../core/image/user.png'

const BackgruondLayout = styled.div`
  height: 100vh;
  background-image: linear-gradient(
    to left bottom,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
`

const ImgStyled = styled.img`
  height: 80px;
  width: 100px;
`
const TextBoxStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.rigth ? 'flex-end' : '')};
`
const TitleStyled = styled.span`
  margin: 25px;
  font-size: 40px;
  color: white;
  font-weight: 800;
`
const PageLayout = props => {
  const { children } = props
  return (
    <BackgruondLayout>
      <Header height="130px" width="100%" padding="20px 8.33%">
        <Col lg={19}>
          <TextBoxStyled>
            <ImgStyled src={UserIcon} />
            <TitleStyled>Test ReactJs With Jenkins.</TitleStyled>
          </TextBoxStyled>
        </Col>
        <Col lg={5}>
          <TextBoxStyled rigth>
            <TitleStyled>IT4-RA</TitleStyled>
          </TextBoxStyled>
        </Col>
      </Header>
      {children}
    </BackgruondLayout>
  )
}

export default PageLayout
