import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from "react-redux";
import {deletePost} from "../JS/Action/actionPost";
import {Link} from "react-router-dom";
import NavProfil from "./navProfil";
import { Card, Button, Form } from "react-bootstrap";

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
    //   dispatch(getPostById(id))
    // }, [isAuth]);
  
//


useEffect(() => {
  
    dispatch(getPostById(id))
 
    
  }, [users])



    return (
        <div style={{display:"flex",flexDirection:"column" ,alignItems:"center",justifyContent:"center"}}>
         <NavProfil/>
   
         <div>
           {/* <Link to ="/">
           <button onClick={()=>dispatch(deletePost(post._id))}>delete</button></Link> */}
           </div>
           {users.fullName}

           <table class="border-collapse w-full">
           { postByUserId.map((postByUserId,index)=>(
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
                <p>  key={index} 
        {postByUserId._id}</p> 
    <p> {postByUserId.country}</p> 
    <p> {postByUserId.dateStart}</p> 
    <p> {postByUserId.dateEnd}</p> 
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
               <Link to ="/postUpdate"><a href="#" class="text-blue-400 hover:text-blue-600 underline" onClick={()=>dispatch(getPostId(postByUserId._id))}>Edit</a></Link> 
               <Link to="/profil"> <a href="#" class="text-blue-400 hover:text-blue-600 underline pl-6"  onClick={()=>dispatch(deletePost(postByUserId._id))}>Remove</a> </Link>
            
            </td>
        </tr>
       
    </tbody>
    </div>
          ))} 
</table><br/>

<div>
    <section id="edit-section">
edit modal 

</section>
</div>

</div>

      
    )
}



export default Post

