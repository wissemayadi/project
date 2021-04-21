import React,{useEffect} from 'react'
import { getPostMap } from '../JS/Action/actionPost';
import Header from "../partials/Header";
import {Link} from "react-router-dom";
import Footer from "../partials/Footer";

import {useDispatch,useSelector} from "react-redux";





const Cards = () => {
 
    const posts = useSelector((state) => state.postReducer.posts);
  const users=useSelector((state)=>state.userReducer.users);
  
    const dispatch = useDispatch()

    useEffect(() => {
    
    dispatch(getPostMap(posts))
      
      
    }, [])



    return (

        <div>

<Header/>
<div><br/>

{ posts.map((posts,index) =>(

    
    
   
<div class="flex-wrap  justify-between  m-8">

<div class="mg-8">
    <div class="bg-white shadow-xl rounded-lg py-3">
        
        <div class="p-2">
            <li ></li>
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8"></h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
                <p>country destinantion</p>
                
            
            
               
            </div>
            <table class="text-xs my-3">
                <tbody key={index}><tr>
                <td class="px-2 py-2 text-gray-500 font-semibold">email</td>
                    <td class="px-2 py-2">{users.email}</td>
                    <td class="px-2 py-2 text-gray-500 font-semibold">description</td>
                    <td class="px-2 py-2">{posts.description}</td>
                    {/* {posts.user} */}
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">date debut</td>
                    <td class="px-2 py-2">{posts.dateStart}</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">date fin</td>
                    <td class="px-2 py-2">{posts.dateEnd}</td>
                </tr>
            </tbody></table>

            <div class="text-center my-3">
                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#"><Link to="/profile"></Link>View detail</a>
            </div>

        </div>
    </div>
</div>
</div>
 ))} 
</div>
<div class="mt-10">
<Footer />
</div>
        </div>
    )
}

export default Cards
