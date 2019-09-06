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
export const getBookGenres = () => {
  return {
    type:"GET_BOOK_GENRES",
    payload: Axios.get(`${HOST}/books/genre`)
  }
}
export const getBookById = (id) => {
  return {
    type:"GET_BOOK_BY_ID",
    payload: Axios.get(`${HOST}/books/${id}`)
  }
}
export const getBorrowingHistory = (token) => {
  return {
    type:'GET_BORROWING_HISTORY',
    payload: Axios.get(`${HOST}/borrowings/history`,{
        headers:{
          Authorization : token
        }
      }
    )
  }
}
export const borrow = (data, token) => {
  return {
    type:'BORROW_BOOK',
    payload: Axios.post(`${HOST}/borrowings/`,data,{
        headers:{
          Authorization : token
        }
      }
    )
  }
}