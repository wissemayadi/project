import {
      GET_USER,
      GET_USER_BY_ID,
      USER_LOGIN,
      USER_LOGIN_SUCCESS,
      USER_REGISTER_FAIL,
      USER_REGISTER,
      USER_REGISTER_SUCCESS,
      GET_PROFILE,
      GET_PROFILE_SUCCESS,
      GET_PROFILE_FAIL,
      USER_LOGIN_FAIL,
      LOGOUT_SUCCESS,
      UPDATE_PROFILE,
    





} from "../Constant/actionTypes";

const initialState = {
      users: [],
      userById: {},
   
      loading: false,
      errors: {},
      isAuth: false,
};

const reducerUser = (state = initialState, { type, payload }) => {
      switch (type) {


            case GET_USER:
                  return {
                        ...state,
                        loading: true,
                        users: payload
                  }
            case GET_USER_BY_ID:
                  return {
                        ...state,
                        loading: true,
                        userById: payload
                  }

            case USER_REGISTER:
            case USER_LOGIN:
            case GET_PROFILE:

                  return {
                        ...state,
                        loading: true
                  };

            case USER_REGISTER_SUCCESS:
                  return {
                        ...state,
                        loading: false,
                        users: payload,
                  };

            case USER_LOGIN_SUCCESS:
                  return {
                        ...state,
                        loading: false,
                        token: payload,
                        isAuth: true,
                  };

            case GET_PROFILE_SUCCESS:
                  return {
                        ...state,
                        loading: false,
                        users: payload,
                        isAuth: true,
                  };

            case USER_REGISTER_FAIL:


                  return {
                        ...state,
                        loading: false,
                        errors: payload,
                       
                  };
            case GET_PROFILE_FAIL:
            case USER_LOGIN_FAIL:
                  return {
                        ...state,
                        loading: false,
                        errors: payload,
                        isAuth: false

                  }
            case LOGOUT_SUCCESS:
                  return {
                        ...state,
                        users: null,
                        isAuth: false,
                        loading: false,
                        token: null
                  }
            case UPDATE_PROFILE:
                  return {
                     ...state,
                     user:payload   
                  }      
             


            default:
                  return state;

      }
}

export default reducerUser
