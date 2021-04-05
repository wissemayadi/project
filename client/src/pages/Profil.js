import React,{useState,useEffect} from 'react';
// import { stringify } from "querystring";
import { Link,Redirect } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux";
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import { deleteUser, getUsers, userRegister} from "../JS/Action/actionUser";
import {getPostById, postRegister} from "../JS/Action/actionPost";

import NavProfil from './navProfil';
import {getProfile} from "../JS/Action/actionUser";




// import {logout} from "../JS/Action/actionUser";


const Profil = () => {








const dispatch =useDispatch()
//getprofile
const id =useSelector((state)=>state.userReducer.users._id)
const post=useSelector((state)=>state.postReducer.getPostById);
const users = useSelector((state) => state.userReducer.users);
const loading = useSelector((state) => state.userReducer.loading);
const loadingP = useSelector((state) => state.postReducer.loading);
const isAuth=useSelector((state)=>state.userReducer.isAuth);
const posts=useSelector((state)=>state.postReducer.postByUserId.data);
console.log(users)
console.log(isAuth)
console.log(users._id)
useEffect(() => {
!users ?  dispatch(getProfile()) :
 dispatch(getPostById(id)) 

 
  
}, [users._id,isAuth])



// useEffect(()=>{
//   dispatch(getPostById)
// },[users._id])


//post staff 
const [country,setCountry] = useState();
const [dateStart,setDateStart]=useState();
const [dateEnd,setDateEnd]=useState();
const  [description,setDescription]=useState();

const addPost=(e)=>{
  e.preventDefault()
  dispatch (
    postRegister({
      country,
      dateStart,
      dateEnd,
      description

        
    })
  )
}





  return  (



    <div>
  
   
      <NavProfil/>
   

   <h1>
      
   </h1>

      <div>

    

      </div>
      <div class="w-full relative mt-4 shadow-2xl rounded my-24 overflow-hidden">
      
      
  <div class="top h-64 w-full bg-blue-600 overflow-hidden relative" >
    <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" class="bg w-full h-full object-cover object-center absolute z-0"/>
    <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" class="h-24 w-24 object-cover rounded-full"/>
      <h1 class="text-2xl font-semibold" >
    <p>{users.pseudo}</p>
   
      </h1>
      <h4 class="text-sm font-semibold"></h4>
    </div>
 

  </div>
  <div class="grid grid-cols-12 bg-white ">

    <div class="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">

      <a href="#form-item"  class="text-sm p-2 bg-indigo-900 text-white text-center rounded font-bold">About me</a>

      <a href="#" class="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">Modify Information</a>

      <a href="#poste" class="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">Create destination</a>

      <a href="#" class="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200"
  
      >Logout</a>
     
    </div>

    <div class="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
      <div class="px-4 pt-4">
        <form action="#" class="flex flex-col space-y-8">

          <div>
            <div></div>
            <h3 class="text-2xl font-semibold">Basic Information</h3>
            <hr/>
          </div>

          <div class="form-item">
            <label class="text-xl ">Full Name</label>
            <input type="text"  class="w-full appearance-none text-black text-opacity-5 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 " 
          value={users.fullName}
            
            />
          </div>
         

          <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">

            <div class="form-item w-full">
              <label class="text-xl ">Username</label>
              <input type="text"  class="w-full appearance-none text-black text-opacity-5 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-5 "
               value={users.pseudo}
              
              />
            </div>
            

            <div class="form-item w-full">
              <label class="text-xl ">Email</label>
              <input type="text"  class="w-full appearance-none text-black text-opacity-5 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-5 "
              
              value={users.email}
              
              />
            </div>
            <div class="form-item w-full">
              <label class="text-xl ">Phone</label>
              <input type="text"  class="w-full appearance-none text-black text-opacity-5 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-5 "
              
              value={users.phone}
              
              />
            </div>
          </div>
          

          <div>
            <h3 class="text-2xl font-semibold ">More About Me</h3>
            <hr/>
          </div>

          <div class="form-item w-full">
            <label class="text-xl ">Biography</label>
            <textarea cols="30" rows="10" class="w-full appearance-none text-black text-opacity-5 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-5 "
              value={users.bio}
            >    </textarea>
          
          </div>
          <div></div>
          <div>
            <h3 class="text-2xl font-semibold">My Social Media</h3>
            <hr/>
          </div>

          <div class="form-item">
            <label class="text-xl ">Instagram</label>
            <input type="text" value={users.istagram}class="w-full appearance-none text-black text-opacity-5 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " />
          </div>
          <div class="form-item">
            <label class="text-xl ">Facebook</label>
            <input type="text" value={users.facebook} class="w-full appearance-none text-black text-opacity-5 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " />
          </div>
          <div class="form-item">
            <label class="text-xl ">Twitter</label>
            <input type="text" value={users.twitter} class="w-full appearance-none text-black text-opacity-5 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  " />
          </div>
         
          <div
      class="bg-white px-6 py-4 my-3 w-3/4 mx-auto shadow rounded-md flex items-center"
    >
    <div class="w-full text-center mx-auto">
          <Link to ="/editprofil">
          <button
        type="button"
        class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"

    
      > 
       Edit
      </button></Link>
      
      <button
        type="button"
        class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        // onClick={()=>dispatch(EditProfil(users._id))}
      >
        
       Save
      </button>
      <Link to="/">
      <button
        type="button"
        class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        onClick={()=>dispatch(deleteUser(users._id))}
      
      >delete</button></Link>
       <Link to='/'><button
        type="button"
        class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
      
      
      >logout</button></Link>
      </div></div>
        </form>
      </div>
    </div>


  </div>
</div>

<section id="poste">

<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
      <div class="max-w-md mx-auto">
        <div class="flex items-center space-x-5">
          <div class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
          <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
            <h2 class="leading-relaxed">Create a destination</h2>
            <p class="text-sm text-gray-500 font-normal leading-relaxed">Form destination</p>
          </div>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div class="flex flex-col">
              <label class="leading-loose">Country</label>
              <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title"
              
              onChange={(e)=>setCountry(e.target.value)}
              />
            </div>
            <div class="flex flex-col">
              <label class="leading-loose">Event Subtitle</label>
              <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional"/>
            </div>
            <div class="flex items-center space-x-4">
              <div class="flex flex-col">
                <label class="leading-loose">Start</label>
                <div class="relative focus-within:text-gray-600 text-gray-400">
                  <input type="text" class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="25/02/2020"
                  
                  onChange={(e)=>setDateStart(e.target.value)}

                  
                  />
                  <div class="absolute left-3 top-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                </div>
              </div>
              <div class="flex flex-col">
                <label class="leading-loose">End</label>
                <div class="relative focus-within:text-gray-600 text-gray-400">
                  <input type="text" class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="26/02/2020"
                  
                  onChange={(e)=>setDateEnd(e.target.value)}
                  />
                  <div class="absolute left-3 top-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <label class="leading-loose">Event Description</label>
              <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional"
              
              onChange={(e)=>setDescription(e.target.value)}
              />
            </div>
          </div>
          <div class="pt-4 flex items-center space-x-4">
              <button class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
              </button>
              {/* { loadingP ?  <Link to ="/post"/> : null } */}
              
              <button class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
              
              onClick={addPost}

            

              >Create
              </button>
            <Link to="/post"><button onClick={dispatch(getPostById(id))}>post management</button></Link> 
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <EditProfil/> */}
</section>

<Footer/>
    </div>
  )
}

export default Profil