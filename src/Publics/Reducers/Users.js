const initState = {
  userProfile : {},
  token:'',
  errMessage:'',
  message:'',
  isLoading:false,
  isRejected:false,
  isFulfilled:false,
}
const users = (state = initState, action)=>{
  switch(action.type){
    case 'LOGIN_PENDING':
      return{
        ...state,
        isLoading:true,
        isRejected:false,
        isFulfilled:false,
      }
    case 'LOGIN_REJECTED':
      return{
        ...state,
        isLoading:false,
        isRejected:true,
        errMessage:action.payload.response ? action.payload.response.data.message : action.payload.message,
      }
    case 'LOGIN_FULFILLED':
      return{
        ...state,
        isLoading:false,
        isFulfilled:true,
        token:action.payload.data.token,
      }
    case 'REGISTER_PENDING':
      return{
        ...state,
        isLoading:true,
        isRejected:false,
        isFulfilled:false,
      }
    case 'REGISTER_REJECTED':
      return{
        ...state,
        isLoading:false,
        isRejected:true,
        errMessage:action.payload.response ? action.payload.response.data.message : action.payload.message,
      }
    case 'REGISTER_FULFILLED':
      return{
        ...state,
        isLoading:false,
        isFulfilled:true,
      }
    default:
      return state
  }
}
export default users