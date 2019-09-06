import Axios from 'axios'

import {HOST} from '../../config';

export const getAllBooks = (page) => {
  return {
    type:"GET_ALL_BOOKS",
    payload: Axios.get(`${HOST}/books?page=${page}`)
  }
}
export const getBooksByGenre = (genre) => {
  return {
    type:"GET_BOOKS_BY_GENRE",
    payload: Axios.get(`${HOST}/books/genre/${genre}`)
  }
}