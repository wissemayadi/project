import axios from "axios";


import {
    GET_POST,
    GET_POST_BY_USER_ID,
    GET_POST_SUCCESS,
    GET_POST_FAIL,
    POST_REGISTER,
    POST_REGISTER_SUCCESS,
    POST_REGISTER_FAIL,
    DELETE_POST,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAIL,
    UPDATE_POST_SUCCESS,
    UPDATE_POST,
    UPDATE_POST_FAIL,
    GET_POST_BY_ID
} from "../Constant/actionTypesPost";


// export const getPost=()=>async (dispatch)=>{
//   const config = {
//     headers: {
//           Authorization: localStorage.getItem("token"),
//     },
// };
//     try {
        
//       const res = await axios.get('/api/post/posts',config)
//       console.log(res)
    
//       dispatch({type : GET_POST , payload : res.data})
    
    
//     } catch (error) {
    
//       console.log('get error',error)
      
//     }
//     axios.get("/api/post")
// .then((res)=>dispatch({type:GET_POST,payload:res.data}))
// .catch((err)=>console.log(err))
// }

export const getPost=()=>async(dispatch)=>{
  
  dispatch({ type:GET_POST })
  
  
  try {
    const token = localStorage.getItem("token");
  
  const config ={
  
    headers: {
      Authorization :token,
    }
  }
   
  
  const post= await axios.get("api/post/posts", config)
  
      dispatch({ type: GET_POST_SUCCESS, payload: post });
    } catch (error) {
      dispatch({ type: GET_POST_FAIL, payload: error.response.data });
    }
  };


//post register with user auth

export const postRegister=(newPost)=>async(dispatch)=>{
    dispatch({type : POST_REGISTER});
    
    const config = {
      headers: {
            Authorization: localStorage.getItem("token"),
      },
};
    try {
    
    const postAdd=await axios.post("api/post/registerp",newPost,config);
   
    console.log(postAdd);
    dispatch({type :POST_REGISTER_SUCCESS,payload:postAdd.data});
    
    
    }catch(error){
      dispatch({type:POST_REGISTER_FAIL,payload:error.response.data})
    
    
    }
    }
//delete post by id 
export const deletePost=(id)=>async(dispatch)=>{
  
  dispatch({ type:DELETE_POST })
  
  
  try {
    const token = localStorage.getItem("token");
  
  const config ={
  
    headers: {
      Authorization :token,
    }
  }
   
  
  const post= await axios.delete(`/api/post/user/${id}`, config)
  
      dispatch({ type: DELETE_POST_SUCCESS, payload: id});
    } catch (error) {
      dispatch({ type: DELETE_POST_FAIL, payload: error.response.data });
    }
  };
//





//get post by userid
export const getPostById=(id)=>(dispatch)=>{

  axios.get(`/api/post/user/${id}`)
  .then((res)=>dispatch({type:GET_POST_BY_USER_ID,payload:res.data}))
  .catch((err)=>console.log(err))
  
  } 
//get post by id 
export const getPostId=(id)=>(dispatch)=>{

axios.get(`/api/post/${id}`)
.then((res)=>dispatch({type:GET_POST_BY_ID,payload:res.data}))
.catch((err)=>console.log(err))

}



export const editPost=(id,updatedPost)=>async(dispatch)=>{
  
  dispatch({ type:UPDATE_POST })
  
  
  try {
    const token = localStorage.getItem("token");
  
  const config ={
  
    headers: {
      Authorization :token,
    }
  }
   
  
  const post= await axios.put(`/api/post/user/${id}`,updatedPost,config)
  
      dispatch({ type: UPDATE_POST_SUCCESS, payload: updatedPost});
    } catch (error) {
      dispatch({ type: UPDATE_POST_FAIL, payload: error.response.data });
    }
  };
  // export const editPost = (id, editPost) => (dispatch) => {
  //   axios
  //     .put(`/api/post/user/${id}`, editPost)
  //     .then((res) => dispatch(editPost()))
  //     .catch((err) => console.log(err));
  // };
    