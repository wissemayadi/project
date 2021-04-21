import React, { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editPost,getPostById} from "../JS/Action/actionPost";
import { getProfile } from '../JS/Action/actionUser';



const EditPost = ()=> {

 

const postById =useSelector((state)=>state.postReducer.postById[0]);
const isAuth=useSelector((state)=>state.userReducer.isAuth);

 const users=useSelector((state)=>state.userReducer.users)
const id = useSelector((state)=>state.userReducer.users._id)
const postByUserId=useSelector((state)=>state.postReducer.postByUserId);

  const dispatch = useDispatch();
  const [editPoster, setEditPoster] = useState({});


  console.log(postById)
 
  useEffect(() => {
   
    setEditPoster(postById);
  }, [postById]);

 

 
 
 


  const handleChange = e => {
   
    setEditPoster({ ...editPoster, [e.target.name]: e.target.value });
  };



  return (
<div >
  
{ editPoster ? 
<div>
<div class="mx-auto max-w-6xl p-12">
   <div class="flex flex-col md:flex-row justify-center">
      <div class="md:w-1/2 max-w-md flex flex-col justify-center">
         <div class="md:text-4xl text-xl font-black uppercase">Page edit post</div>
         <div class="text-xl mt-4">Here you can update your post</div>
         <a href="https://icon-library.net/icon/edit-profile-icon-1.html" title="Edit Profile Icon #359395"><img src="https://icon-library.net//images/edit-profile-icon/edit-profile-icon-1.jpg" width="150" /></a>
         <Link to="/post"> <span class="text-sm">or <a href="#" class="text-blue-700"> 
         back to post page
      </a>
   </span></Link>
      </div>
      <div class="md:w-1/2 flex justify-start mt-5 md:justify-end w-full md:w-1/2 ">
         <div class="shadow-md flex-auto max-w-sm p-10 pb-20">
            <div class="w-full">
               <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span class="text-red-400 mr-1">*</span> Country</div>
               <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">  <input placeholder="set your country" class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
               type="text"
               name="country"
               Value={editPoster.country}
               onChange={handleChange}
               
               />  </div>
            </div>
            <div class="w-full">
               <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span class="text-red-400 mr-1">*</span> Date Start</div>
               <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">  <input placeholder="set your date" class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                type="text"
                name="dateStart"
                Value={editPoster.dateStart}
                onChange={handleChange}
               
               />  </div>
            </div>
            <div class="w-full">
               <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span class="text-red-400 mr-1">*</span> Date End</div>
               <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">  <input placeholder="set your date" class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
               type="text"
               name="dateEnd"
               Value={editPoster.dateEnd}
               onChange={handleChange}
               
               />  </div>
            </div>
            <div class="w-full">
               <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span class="text-red-400 mr-1">*</span> Description</div>
               <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">  <input placeholder="set your description" class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
               type="text"
               name="description"
               Value={editPoster.description}
               onChange={handleChange}
               
               
               />  </div>
            </div>
            <div class="mt-6 relative">
              
              <Link to="/post">
               <div class="shadow-md font-medium py-2 px-4 text-green-100
                  cursor-pointer bg-teal-600 rounded text-lg tr-mt  absolute text-center w-full"
                  onClick={() => dispatch(editPost(editPoster._id, editPoster))}
                  
                  >Submit</div>
                  </Link>
            </div> 
            
         </div>
      </div>
   </div>
</div>
  
      <div>
</div>
      </div> : "post does not exist"  
}
</div>
  )
}

export default  EditPost;







