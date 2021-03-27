import {GET_POST,GET_POST_BY_ID,
    POST_REGISTER,POST_REGISTER_SUCCESS,POST_REGISTER_FAIL,


} from "../Constant/actionTypesPost";

const intialState = {
    post:[],
    postById:{},
    loading: false,
    errors: null,
    isAuth: false,
  };


const reducerPost=(state = intialState, { type, payload })=>{
    switch (type) {
        case GET_POST:
        
          return {
            ...state,
            loading: true,
            post: payload
          };
        case GET_POST_BY_ID:
         
    return {
      ...state,
      loading:true,
      postById:payload
    }

    case POST_REGISTER:
        return {
            ...state,
            loading :true,
        }
  case POST_REGISTER_SUCCESS:
  return {
   ...state,
    loading:true,
  }
 case POST_REGISTER_FAIL :
     return {
         ...state,
         loading:false,
         errors:payload,
     }
    default :return state;


    }
}

export default reducerPost;