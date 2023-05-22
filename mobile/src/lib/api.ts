import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.27.132.141:3333',
})
