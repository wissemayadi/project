import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'


import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import {getProfile} from "../JS/Action/actionUser";



function Home() {
 
  // const users=useSelector((state)=>state.userReducer.users)
  // const isAuth=useSelector((state)=>state.userReducer.isAuth)
  // const id=useSelector((state)=>state.userReducer.users._id)
  // const dispatch = useDispatch()
  //   useEffect(() => {
  //     dispatch(getProfile(users))
  //   }, [isAuth]);




  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;