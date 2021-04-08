import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from "react-redux";
import {deletePost} from "../JS/Action/actionPost";
import {Link} from "react-router-dom";
import NavProfil from "./navProfil";


import {getPostById,editPost,getPostId} from "../JS/Action/actionPost";
const Post = () => {
  const  dispatch = useDispatch()
  const postByUserId=useSelector((state)=>state.postReducer.postByUserId);
 const id =useSelector((state)=>state.userReducer.users._id)
  const users= useSelector((state)=>state.userReducer.users);
  const loading = useSelector((state) => state.userReducer.loading);
const isAuth=useSelector((state)=>state.userReducer.isAuth);
const   user=useSelector((state)=>state.postReducer.post);
const postById=useSelector((state)=>state.postReducer.postById)

///


 


// useEffect(() => {
//       dispatch(getPostId(postById))
//     }, [id]);
  



useEffect(() => {
  
    dispatch(getPostById(id))
 
    
  }, [])



    return (
        <div style={{display:"flex",flexDirection:"column" ,alignItems:"center",justifyContent:"center"}}>
         <NavProfil/>
          
        
           {users.fullName}
           {postByUserId ?
           <table class="border-collapse w-full">
           { postByUserId.map((post,index)=>(
  <div>
     
    <thead>
        <tr>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell" >PostId</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Country</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
        </tr>
    </thead>
    <tbody>
   



      
  
  
 
    
      
        <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
       
        >
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
                <p  key= {post._id} post={post}></p> 
        
    <h1> {post.country}</h1> 
    <p> {post.dateStart}</p> 
    <p> {post.dateEnd}</p> 
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                German
            </td>
          	<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                <span class="rounded bg-red-400 py-1 px-3 text-xs font-bold">deleted</span>
          	</td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
               <Link to ={`postUpdate/${post._id}`}><a href="#" class="text-blue-400 hover:text-blue-600 underline"  onClick={()=>dispatch(getPostId(post._id))} >Edit</a></Link> 
               <Link to="/profil"> <a href="#" class="text-blue-400 hover:text-blue-600 underline pl-6"  onClick={()=>dispatch(deletePost(post._id))}>Remove</a> </Link>
               {/* onClick={()=>dispatch(getPostId(post._id))} */}
              
            </td>
        </tr>
       
    </tbody>
    </div>
          ))} 
</table>: "..."
}
<br/>



</div>

      
    )
}



export default Post

