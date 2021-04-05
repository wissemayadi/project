import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation,Redirect
} from 'react-router-dom';
import { useSelector, useDispatch} from "react-redux"

import './css/style.scss';

import AOS from 'aos';
import { focusHandling } from 'cruip-js-toolkit';

//test 
import Essai from './pages/Essai';
import Home from './pages/Home';

import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import Profil from "./pages/Profil";
import List from "./pages/List";
import Cards from './pages/userCards';
import PrivateRoute from "./pages/PrivateRoute";
import Login from './pages/Login';
import EditProfil from "./pages/editProfil";
import Post from "./pages/Post";
import {getProfile} from "./JS/Action/actionUser";
import {getPostById} from "./JS/Action/actionPost";
import EditPost from "./pages/postUpdate";
function App() {


  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {

    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');

  }, [location.pathname]); // triggered on route change
const users=useSelector((state)=>state.userReducer.users)
const isAuth=useSelector((state)=>state.userReducer.isAuth)
const id=useSelector((state)=>state.userReducer.users._id)
const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProfile(id))
  }, [isAuth]);

  
  return (

    <>
      <Switch >
        <Route exact path="/"render={()=><Home/>}>
      
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
       
        <Route path="/list">
          <List />
        </Route>
        <Route path="/usercards"component={Cards}>
          <Cards/>
        </Route>
        <Route path="/post"component={Post}>
          <Post/>
        </Route>
       
        <Route path="/postUpdate">
          <EditPost />
        </Route>
           <Route path="/editprofil"  >
           <EditProfil />
        </Route>
      
          <PrivateRoute  path="/profil" component={Profil}/>
        
        
        <Route  exact path="/login" render={()=><Login/>}>
     
        
        </Route>

      </Switch>
    </>
  );
}

export default App;
