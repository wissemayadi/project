import axios from "axios";

import {
    GET_POST,
    GET_POST_BY_ID,
    POST_REGISTER,
    POST_REGISTER_SUCCESS,
    POST_REGISTER_FAIL,
    DELETE_POST,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAIL
} from "../Constant/actionTypesPost";


export const getPost=()=>async (dispatch)=>{

    try {
        
      const res = await axios.get('/api/post')
      console.log(res)
    
      dispatch({type : GET_POST , payload : res.data})
    
    
    } catch (error) {
    
      console.log('get error',error)
      
    }
    axios.get("/api/post")
.then((res)=>dispatch({type:GET_POST,payload:res.data}))
.catch((err)=>console.log(err))
}


export const postRegister=(newPost)=>async(dispatch)=>{
    dispatch({type : POST_REGISTER});
    
    try {
    const postAdd=await axios.post("api/post/register",newPost);
    console.log(postAdd);
    dispatch({type :POST_REGISTER_SUCCESS,payload:postAdd.data});
    
    
    }catch(error){
      dispatch({type:POST_REGISTER_FAIL,payload:error.response.data})
    
    
    }
    }

    export const deletePost = (id) => (dispatch) => {
      axios
        .delete(`/api/post/${id}`)
        .then(() => dispatch(getPost()))
        .catch((err) => console.log(err));
    };