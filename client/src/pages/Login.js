import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { userLogin } from '../JS/Action/actionUser';
import Menu from './Menu';
import Load from "./load";
import './Login.css'
function Login() {
      const [email, setEmail] = useState();
      const [password, setPassWord] = useState();
      const [visible, setVisible] = useState(false);
      //get errors with useSelector
      const errors = useSelector(state => state.userReducer.errors)

      const loading =useSelector((state)=>state.userReducer.loading)
      const isAuth = useSelector(state => state.userReducer.isAuth)


      console.log(isAuth)
      const dispatch = useDispatch()


      const login = (e) => {
          e.preventDefault();
            dispatch(userLogin({
                  email,
                  password

            }));
            setEmail('');
            setPassWord('');
      }
      const Visiblity = () => {
            setVisible(visible? false : true);
          };

      if (isAuth){ return <Redirect to='/profil' />}

      return(
           
      
            <div>
   
    
    
                  <div className="container">
                  

                        <div className="left">
                              <div className="header">
                                    <h2 className="animation a1">Welcome Back</h2>
                                    <h4 className="animation a2">Log in to your account using email and password</h4>
                              </div>

                              <div className="form">

                                    <input type="email" className="form-field animation a3" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                                    <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                                          <p class="font-bold"></p>
                                          <p>   {errors ? <ul> {errors.msg}</ul> : null}</p>
                                    </div>
                                    <input type={visible ? "text" : "password"}  className="form-field animation a4" placeholder="Password" onChange={(e) => setPassWord(e.target.value)} />
                                    <button onClick={Visiblity} className="visible">{visible ? "hide" : "show"}</button>{" "}
                                    <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                                          <p class="font-bold"></p>
                                          <p>   {errors ?  <ul > {errors.msg}</ul> : null}</p>
                                    </div>

                                    <Link to="/signup"> <p className="animation a5">register for free</p></Link>
                                    <button className="animation a6" onClick={login} >LOGIN</button>
                              </div>
                        </div>
                        <div className="right" />
                  </div>
            </div>
      );
}

export default Login



