import React, { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editUserById} from "../JS/Action/actionUser";


// import "bootstrap/dist/css/bootstrap.min.css";


const EditProfil = ()=> {

 
 
const users =useSelector((state)=>state.userReducer.users);
const isAuth=useSelector((state)=>state.userReducer.isAuth);
  const [editUser, setEditUser] = useState({});

 
  const dispatch = useDispatch();
  

  useEffect(() => {
    setEditUser(users);
  }, [users]);



  const handleChange = e => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };



  return (
  <div>
    {editUserById ? 
    <div>

<div class="text-center mt-24">

      <div class="flex items-center justify-center">
      
         <a href="https://icon-library.net/icon/edit-profile-icon-5.html" title="Edit Profile Icon #359403"><img src="https://icon-library.net//images/edit-profile-icon/edit-profile-icon-5.jpg" width="150" /></a>      </div>
      <h2 class="text-4xl tracking-tight">
         edit your info
      </h2>
     <Link to="/profil"> <span class="text-sm">or <a href="#" class="text-blue-500"> 
         back to your profil
      </a>
   </span></Link>
</div>
<div class="flex justify-center my-2 mx-4 md:mx-0">
   <form class="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
      <div class="flex flex-wrap -mx-3 mb-6">
       
         <div class="w-full md:w-full px-3 mb-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='name'>Full name</label>
            <input class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='text' name="fullName"
             Value={editUser.fullName}
             onChange={handleChange}
            
            />
         </div>
         <div class="w-full md:w-full px-3 mb-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password'>Email</label>
            <input class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='email' name="email"
             Value={editUser.email}
             onChange={handleChange}
            
            />
         </div>
         <div class="w-full md:w-full px-3 mb-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password'>Phone</label>
            <input class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='text' name="phone"
            
            Value={editUser.phone}
            onChange={handleChange}
            />
         </div>
         <div class="w-full md:w-full px-3 mb-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password'>Biography</label>
            <input class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='text' name="bio"
             Value={editUser.bio}
             onChange={handleChange}
            />
         </div>
         <div class="w-full md:w-full px-3 mb-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password'>Instagram</label>
            <input class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='text' name="instagram"
                       Value={editUser.instagram}
                       onChange={handleChange}
            />
         </div>
         <div class="w-full md:w-full px-3 mb-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password'>Facebook</label>
            <input class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='text' name="facebook"
                       Value={editUser.facebook}
                       onChange={handleChange}
            />
         </div>
         <div class="w-full md:w-full px-3 mb-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password'>Twitter</label>
            <input class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='text' name="twitter"
                       Value={editUser.twitter}
                       onChange={handleChange}
            />
         </div>
         <div class="w-full flex items-center justify-between px-3 mb-3 ">
           
           
         </div>
         <div class="w-full md:w-full px-3 mb-6">
         <Link to="/profil">   <button class="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500"onClick={() => dispatch(editUserById(editUser._id, editUser))}
             >Confirm</button></Link>
         </div>
        
         
      </div>
   </form>
</div> 

</div>:"..."
}
</div>
  )
}

export default  EditProfil;




