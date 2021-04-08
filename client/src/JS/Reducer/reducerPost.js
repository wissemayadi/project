import { getPostById } from "../Action/actionPost";
import {
  GET_POST, GET_POST_BY_USER_ID,
  POST_REGISTER, POST_REGISTER_SUCCESS, POST_REGISTER_FAIL, GET_POST_SUCCESS, GET_POST_FAIL,
  UPDATE_POST_SUCCESS,
  DELETE_POST,
  GET_POST_BY_ID


} from "../Constant/actionTypesPost";

const intialState = {
  post: [],
  postById: {},
  postByUserId:{},
  loading: false,
  errors: null,
 
  



  
};


const reducerPost = (state = intialState, { type, payload }) => {
  switch (type) {
    case GET_POST:

      return {
        ...state,
        loading: true,
         post:payload,

      };
   
    case GET_POST_BY_USER_ID:

      
 return {
   ...state,
   postByUserId: payload,
   loading:false,
 }
    
     case GET_POST_BY_ID:
       return{
         ...state,
         postById: payload,
         loading:false
       }
      

    case POST_REGISTER:
      return {
        ...state,
        loading: true,

      }
    case POST_REGISTER_SUCCESS:
      return {
        ...state,
        loading: true,
      }
    case POST_REGISTER_FAIL:
      case GET_POST_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,

      }
    case GET_POST_SUCCESS:
      return {
        ...state,
        users:payload 
      };

      case UPDATE_POST_SUCCESS:
        return{
          ...state,
       postById:payload,
       loading:false
        
      }
      case DELETE_POST:
        return{
       ...state,
       payload
        }
    default: return state;


  }
}

export default reducerPost;