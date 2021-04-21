import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {userRegister} from '../JS/Action/actionUser';
import { Link, Redirect } from 'react-router-dom';
import ErrModal from "./erreurModal";


import Header from '../partials/HeaderS';
import Footer from "../partials/Footer";
function SignUp() {
const [pseudo,setPseudo] = useState();
const [email,setEmail]=useState();
const [password,setPassword]= useState();



const errors = useSelector((state)=>  state.userReducer.errors.errors);

const isAuth = useSelector((state)=>state.userReducer.isAuth);
const loading = useSelector((state)=>state.userReducer.loading);
console.log(errors)


const dispatch =useDispatch();
const addUser=(e)=>{
  e.preventDefault()
  dispatch (
    userRegister({
   pseudo,
   email,
   password
        
    }
    )
  )
alert("user added successfuly");
  setPseudo("");
setEmail("");
setPassword("");
}
 

 
if(loading) return <Redirect to='/login'/>

  return (


    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Welcome to form registration</h1>
              </div>
                 {errors ?  <ErrModal errors={errors}/>:   null} 
              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Pseudo<span className="text-red-600">*</span></label>
                      <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your name" required 
                      
                      onChange={(e)=>setPseudo(e.target.value)}

                     
                    
                      
                      />
                    </div>
                    
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                      <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required
                      onChange={(e)=>setEmail(e.target.value)}
                       
                      />
                     
                 
                    </div>
                    
                    
                  
                    
                   
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                      <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password" required 
                      onChange={(e)=>setPassword(e.target.value)}
                      
                      
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Confirm your password <span className="text-red-600">*</span></label>
                      <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password again" required 
                      onChange={(e)=>setPassword(e.target.value)}
                      
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      
                      <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                      
                      onClick={addUser}
                      
                      >Sign up</button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 text-center mt-3">
                    By creating an account, you agree to the <a className="underline" href="#0">terms & conditions</a>, and our <a className="underline" href="#0">privacy policy</a>.
                                </div>
                </form>
                <div className="flex items-center my-6">
                  <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
                  <div className="text-gray-600 italic">Or</div>
                  <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
                </div>
                
                <div className="text-gray-600 text-center mt-6">
                  Already using Simple? <Link to="/login" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign in</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
  <Footer/>
    </div>
    
  );
}

export default SignUp;