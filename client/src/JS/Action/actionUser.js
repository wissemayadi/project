import axios from "axios";

import {GET_USER, GET_USER_BY_ID,
  USER_LOGIN,USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_FAIL,
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  LOGOUT_SUCCESS,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS
  




} from "../Constant/actionTypes"
import { UPDATE_POST_FAIL } from "../Constant/actionTypesPost";


export const getUsers=()=>async (dispatch)=>{

try {
    
  const res = await axios.get('/api/user')
  console.log(res)

  dispatch({type : GET_USER , payload : res.data})


} catch (error) {

  console.log('get error' , error)
  
}


axios.get("/api/user")
.then((res)=>dispatch({type:GET_USER,payload:res.data}))
.catch((err)=>console.log(err))

}
//register

export const userRegister=(newUser)=>async(dispatch)=>{
dispatch({type : USER_REGISTER});

try {
const userAdd=await axios.post("api/user/register",newUser);
console.log(userAdd);
dispatch({type :USER_REGISTER_SUCCESS,payload:userAdd.data});


}catch(error){
  dispatch({type:USER_REGISTER_FAIL,payload: error.response.data})


}
}


export const userLogin = (userCred) => async  (dispatch) => {

  // dispatch({ type: USER_LOGIN });

    try {
            const userRes = await axios.post('/api/user/login', userCred);
            //stocker token in local storage to verifier if the user is logged or not
            const token  = userRes.data.token;
            localStorage.setItem('token', token);
            dispatch({ type: USER_LOGIN_SUCCESS, payload: userRes.data.token });


      } catch (error) {
            console.log(error.response.data);
            dispatch({ type: USER_LOGIN_FAIL, payload: error.response.data })
            
      } 
};


export const getProfile=()=>async(dispatch)=>{
  
dispatch({ type:GET_PROFILE })


try {
  const token = localStorage.getItem("token");

const config ={

  headers: {
    Authorization :token,
  }
}
 

const user = await axios.get("api/user/current", config)

    dispatch({ type: GET_PROFILE_SUCCESS, payload: user.data });
  } catch (error) {
    dispatch({ type: GET_PROFILE_FAIL, payload: error.response.data });
  }
};





export const getUserById=(id)=>(dispatch)=>{

axios.get(`/api/user${id}`)
.then((res)=>dispatch({type:GET_USER_BY_ID,payload:res.data}))
.catch((err)=>console.log(err))

}

  export const deleteUser = (id) => (dispatch) => {
    axios
      .delete(`/api/user/${id}`)
      .then(() => dispatch(getUsers()))
      .catch((err) => console.log(err));
  };
  
 






/// essai update profile
export const editUserById = (id, updatedProfile) => async (dispatch) => {
      dispatch({type:UPDATE_PROFILE})
  const config = {
            headers: {
                  Authorization: localStorage.getItem("token"),
            },
};

try {
      const { data } = await axios.put(`/api/user/${id}`,updatedProfile,config);
      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: updatedProfile });
      
      
} catch (error) {
      console.log(error);
      dispatch({type:UPDATE_POST_FAIL})
}

};
  


export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};