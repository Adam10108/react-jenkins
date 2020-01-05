import http from '../lib/axios'

export const getUsers = () => {
  return http('GET', 'users.json')
}

export const addUsers = body => {
  return http('POST', 'users.json', body)
}
