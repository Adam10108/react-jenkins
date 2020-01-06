import { Row, Col } from 'antd'
import * as R from 'ramda'
import React from 'react'
import styled from '@emotion/styled'

import { getUsers } from '../../core/models/users'
import FormAddUsers from './components/formAddUser'
import Layout from '../../components/layout'
import Table from '../../components/table'
import useQuery from '../../core/hooks/useQuery'

const Content = styled.div`
  margin: 30px 8.22%;
  height: 80%;
`

function Index() {
  const resp = useQuery(getUsers)

  return (
    <Layout>
      <Content>
        <Row gutter={20}>
          <Col lg={9}>
            <FormAddUsers
              setIsLoading={R.path(['setIsLoading'], resp)}
              reloadData={R.path(['reloadData'], resp)}
            />
          </Col>
          <Col lg={15}>
            <Table
              isLoading={R.path(['isLoading'], resp)}
              data={R.path(['data'], resp)}
              scroll={{ x: false, y: `${window.innerHeight - 500}px` }}
            />
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}
export default Index
