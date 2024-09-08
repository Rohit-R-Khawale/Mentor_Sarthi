import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";
// Images import
import img1 from "../assets/IMG_scroolbar/24.jpeg"
const start = () => {
  return (
    <main className='grid md:grid-cols-2 '>
     <div className="max-sm:m-10 max-sm:text-center sm:ml-20 flex flex-col gap-6">
       <p
       className='text-3xl md:w-2/3 sm:text-4xl  font-bold text-[#761DCC] m-4 leading-snug font-sans mt-12 relative '>
       If you cannot see where you are going, ask someone who has been there before. <br/> -J Loren Norris
       </p>
       <p className='font-bold text-md md:text-xl sm:ml-3 m-1relative md:w-2/3'>
       "If you're serious about growth, you need more than “thought leadership” blog posts, courses, and podcasts."
       </p>

       <button className='hover:scale-90 hover:bg-purple-500 border-2 border-yellow-400 hover:border-green-500 font-semibold relative bg-purple-800 w-fit p-2 rounded-xl text-white max-sm:mx-auto'>Book Your First appointment</button>

       <div className="font-semibold text-purple-800 max-sm:text-sm">
        {/* Feature 1 */}
        <p className='flex gap-2 align-middle relative'>
          <IoIosCheckmarkCircle  className='relative top-1'/>
          Your growth has stalled due to economic downturn</p>
        
        {/* Feature 2 */}
        <p className='flex gap-2 align-middle relative'>
          <IoIosCheckmarkCircle  className='relative top-1'/>
          You have nobody to discuss your growth strategy with</p>
        
        {/* Feature 3 */}
        <p className='flex gap-2 align-middle relative'>
          <IoIosCheckmarkCircle  className='relative top-1'/>
          You've got ideas but want validation before executing</p>
        
        {/* Feature 4 */}
        <p className='flex gap-2 align-middle relative'>
          <IoIosCheckmarkCircle  className='relative top-1'/>
          You are burned out and need to vent your frustrations</p>
       </div>

       <div className="flex gap-3 text-center ">
        <div className="">
          <p className='font-bold relative text-xl'>42000+</p>
          <p className='text-sm font-semibold relative'>Sessions Booked</p>
        </div>

        <div className="">
          <p className='font-bold relative text-xl'>700+</p>
          <p className='text-sm font-semibold relative'>Vetted mentors</p>
        </div>

        <div className="">
          <p className='font-bold relative text-xl'>4.8/5</p>
          <p className='text-sm font-semibold relative'>Average session rating</p>
        </div>
       </div>
       
     </div>
     <div className="">
      <img src={img1} alt="img1" className='mt-5 p-5 relative'/>
     </div>
 
    </main>
  )
}

export default start
