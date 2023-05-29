import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.27.128.193:3333',
})
