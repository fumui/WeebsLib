import Axios from 'axios'

import {HOST} from '../../config';

export const login = (data) => {
  return {
    type:"LOGIN",
    payload: Axios.post(`${HOST}/users/login`,data)
  }
}
export const register = (data) => {
  return {
    type:"REGISTER",
    payload: Axios.post(`${HOST}/users/register`,data)
  }
}