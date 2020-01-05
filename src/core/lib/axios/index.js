import axios from 'axios'

const baseUrl = 'https://selected-4a7b2.firebaseio.com/'

const http = (method, jsonFile, body) => {
  return axios({
    url: `${baseUrl}${jsonFile}`,
    data: body,
    method,
    header: {
      Authorization: `key=${process.env.REACT_APP_SERVER_KEY}`
    }
  })
    .then(resp => resp)
    .catch(err => console.log('request - error : ', err))
}

export default http
