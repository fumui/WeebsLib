const initState = {
  books : [],
  errMessage:'',
  message:'',
  page:1,
  isLoading:false,
  isRejected:false,
  isFulfilled:false,
}
const books = (state = initState, action)=>{
  switch(action.type){
    case 'GET_ALL_BOOKS_PENDING':
      return{
        ...state,
        isLoading:true,
        isRejected:false,
        isFulfilled:false,
      }
    case 'GET_ALL_BOOKS_REJECTED':
      return{
        ...state,
        isLoading:false,
        isRejected:true,
        errMessage:action.payload.response ? action.payload.response.data.message : action.payload.message,
      }
    case 'GET_ALL_BOOKS_FULFILLED':
        action.payload.data.data.map(book => state.books.push(book))
      return{
        ...state,
        isLoading:false,
        isFulfilled:true,
        page:action.payload.data.page
      }
    case 'GET_BOOKS_BY_GENRE_PENDING':
      return{
        ...state,
        isLoading:true,
        isRejected:false,
        isFulfilled:false,
      }
    case 'GET_BOOKS_BY_GENRE_REJECTED':
      return{
        ...state,
        isLoading:false,
        isRejected:true,
        errMessage:action.payload.response ? action.payload.response.data.message : action.payload.message,
      }
    case 'GET_BOOKS_BY_GENRE_FULFILLED':
      return{
        ...state,
        isLoading:false,
        isFulfilled:true,
        books:action.payload.data.data,
        page:action.payload.data.page
      }
    default:
      return state
  }
}
export default books