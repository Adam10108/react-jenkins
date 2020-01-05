// @flow
import { Form, Row, Col, Input } from 'antd'
import * as R from 'ramda'
import React from 'react'

import { addUsers } from '../../../../core/models/users'
import { StyledButton, StyledFooter, StyledText, StyledTitle } from './styled'

const FormAddUser = props => {
  const { setIsLoading, reloadData } = props

  const validEmail = (rule, fieldName, callback) => {
    if (fieldName) {
      const pattern = new RegExp(
        '^[a-zA-Z0-9-/+-_.]+@+[a-zA-Z0-9--/+-_.]+.+[a-zA-Z]+$'
      )
      if (!pattern.test(fieldName)) {
        callback(`Please check '${fieldName}' is not Email.`)
      } else {
        callback()
      }
    } else {
      callback()
    }
  }
  const validName = (rule, fieldName, callback) => {
    if (fieldName) {
      const pattern = new RegExp('^[a-zA-Zก-๙]+$')
      if (!pattern.test(fieldName)) {
        callback(`Please enter English or Thai only.`)
      } else {
        callback()
      }
    } else {
      callback()
    }
  }

  const validPhone = (rule, fieldName, callback) => {
    if (fieldName) {
      const pattern = new RegExp('^[0]+[0-9]+$')
      if (!pattern.test(fieldName)) {
        callback(`Please enter Number only.`)
      } else {
        callback()
      }
    } else {
      callback()
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.form.validateFields(async (err, values) => {
      if (!err) {
        const userData = {
          email: R.path(['email'], values).toLowerCase(),
          name: R.path(['name'], values).toLowerCase(),
          phoneNumber: R.path(['phoneNumber'], values).toLowerCase()
        }

        try {
          setIsLoading(true)
          await addUsers(userData)
          reloadData()
          setIsLoading(false)
        } catch (error) {
          console.log(('error ': error))
        }
      }
    })
  }

  const { getFieldDecorator } = props.form

  return (
    <>
      <StyledTitle>Create User</StyledTitle>
      <Form>
        <Row type="flex">
          <StyledText>Email</StyledText>
          <StyledText required>*</StyledText>
        </Row>

        <Form.Item>
          {getFieldDecorator('email', {
            rules: [
              {
                required: true,
                message: 'Please enter a valid a email address'
              },
              { validator: validEmail.bind(this) }
            ]
          })(<Input type="email" placeholder="exsample@me.com" />)}
        </Form.Item>

        <Row gutter={20}>
          <Col span={12}>
            <Row type="flex">
              <StyledText>Name</StyledText>
              <StyledText required>*</StyledText>
            </Row>
            <Form.Item>
              {getFieldDecorator('name', {
                rules: [
                  { required: true, message: 'Name is required' },
                  { validator: validName.bind(this) }
                ]
              })(<Input prefix="" placeholder="Firstname" />)}
            </Form.Item>
          </Col>

          <Col span={12}>
            <Row type="flex">
              <StyledText>Phone Number</StyledText>
              <StyledText required>*</StyledText>
            </Row>
            <Form.Item>
              {getFieldDecorator('phoneNumber', {
                rules: [
                  {
                    required: true,
                    message: 'Phone Number is required'
                  },
                  {
                    validator: validPhone
                  }
                ]
              })(<Input prefix="" placeholder="Phone Number" />)}
            </Form.Item>
          </Col>
        </Row>

        <StyledFooter>
          <StyledButton type="submit" onClick={e => handleSubmit(e)}>
            Submit
          </StyledButton>
        </StyledFooter>
      </Form>
    </>
  )
}

const WrappedAddUserForm = Form.create()(FormAddUser)
export default WrappedAddUserForm
