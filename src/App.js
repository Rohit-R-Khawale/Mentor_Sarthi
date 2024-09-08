import React from 'react'
import Navbar from "./Components/Navbar"
import "./index.css"
// import Components
import Start from "./Components/start"
import Quote from './Components/Quote'
import Mentors from './Components/Mentors'
import Community from './Components/Community'
import Text from "./Components/Footbanner"
// images imports 
import img1 from "./assets/IMG_scroolbar/84.jpeg"
import Footer from "./Components/Footer"

const App = () => {
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

export default App
