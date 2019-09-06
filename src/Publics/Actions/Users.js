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
export const getProfile = (token) => {
  return {
    type:'GET_PROFILE',
    payload: Axios.get(`${HOST}/users/profile`,{
        headers:{
          Authorization : token
        }
      }
    )
  }
}