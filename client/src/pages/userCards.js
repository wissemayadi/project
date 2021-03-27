import React,{useEffect} from 'react'
import { getPost } from '../JS/Action/actionPost';
import Header from "../partials/Header";
import {Link} from "react-router-dom";
import Footer from "../partials/Footer";

import {useDispatch,useSelector} from "react-redux";




const Cards = () => {
 
    const post=useSelector(state=>state.postReducer.post);


    const dispatch = useDispatch()

    useEffect(() => {
    
      dispatch(getPost())
      
      
    }, [])




    return (

        <div>

<Header/>
<div><br/>
{/* flex-row items-center h-screen justify-center wrap" */}
{/* flex flex-wrap  justify-between  m-8 */}
{post.map((post,key)=>(
<div class="flex-wrap  justify-between  m-8">

<div class="mg-8">
    <div class="bg-white shadow-xl rounded-lg py-3">
        
        <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{post.country}</h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
                <p>Web Developer</p>
            </div>
            <table class="text-xs my-3">
                <tbody><tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">description</td>
                    <td class="px-2 py-2">{post.description}</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">date debut</td>
                    <td class="px-2 py-2">{post.dateStart}</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">date fin</td>
                    <td class="px-2 py-2">{post.dateEnd}</td>
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
