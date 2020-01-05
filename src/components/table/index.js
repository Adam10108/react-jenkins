import { Table as AntdTable } from 'antd'

import React from 'react'
import styled from '@emotion/styled'

const StyledText = styled.div`
  font-size: 16px;
  font-weight: bold;
  opacity: 0.7;
  color: 'red';
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
  const { isLoading, data } = props
  return <AntdTable loading={isLoading} columns={columns} dataSource={data} />
}

export default Table
