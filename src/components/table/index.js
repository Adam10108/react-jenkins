import { Table as AntdTable } from 'antd'
import * as R from 'ramda'
import React from 'react'
import styled from '@emotion/styled'

const StyledText = styled.div`
  font-size: 16px;
  font-weight: bold;
  opacity: 0.7;
  color: 'red';
`
const StyledScroll = styled.div`
  height: ${props => (props.height ? props.height : '')};
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: white;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: white;
  }
`

const columns = [
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: email => {
      return <StyledText>{email}</StyledText>
    }
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: name => {
      return <StyledText>{name}</StyledText>
    }
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
    render: phoneNumber => {
      return <StyledText>{phoneNumber}</StyledText>
    }
  }
]

const Table = props => {
  const { isLoading, data, scroll } = props
  return (
    <StyledScroll height={R.path(['y'], scroll)} width={R.path(['x'], scroll)}>
      <AntdTable loading={isLoading} columns={columns} dataSource={data} />
    </StyledScroll>
  )
}

export default Table
