import React from 'react'
import "./index.css"
// Import Components
import Navbar from "./Components/Navbar"
import Start from "./Components/start"
import Quote from './Components/Quote'
import Mentors from './Components/Mentors'
import Community from './Components/Community'
import Text from "./Components/Footbanner"
import Footer from "./Components/Footer"
// images imports 
import img1 from "./assets/background-clouds.png"
const Home = () => {
    return (
      <>
      <div className="opacity-50 blur-md fixec">
        <img src={img1} alt="img1" className='-z-10  absolute w-screen h-screen overflow-hidden'/>
      </div>
      
      <Navbar />
      <Start/>
      <Quote/>
      <Mentors/>
      <Community/>
      <Text/>
      <Footer/>
      </>
    )
  }
  
  export default Home
  