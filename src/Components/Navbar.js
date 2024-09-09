import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { TfiFacebook } from "react-icons/tfi";
import { FiAlignJustify } from "react-icons/fi";
import "../index.css"

const navbar = () => {
  return (
    <nav className="flex align-middle justify-between px-3 font-semibold bg-black text-white py-2">
      {/* Heading or Orgainzation Name */}
      <p className='my-auto text-2xl relative cursor-pointer'>Mentor Sarthi</p>

      {/* Middle Options */}
      <div className="flex gap-4 h-fit my-auto uppercase relative top-3 max-lg:hidden">
        {/* Home */}
        <div className="show-drop-down" id='drop'>
            <p className='hover:text-[#E9CBC1] cursor-pointer pb-4 text-white'>Home</p>
            
        </div>

        {/* About */}
        <div className="show-drop-down">
          <p className='hover:text-[#E9CBC1] cursor-pointer pb-4 text-white'>About</p>
          <ol className=' hidden absolute z-50'>{/* add "drop-down" class here when you add list elements" */}
            <div className="relative right-14 text-center bg-sky-400 p-2 rounded-md text-black">
              {/* Add DD Items here */}
            </div>
          </ol>
        </div>

        {/* Features */}
        <div className="show-drop-down">
            <p className='hover:text-[#E9CBC1] pb-4 cursor-pointer text-white'>Features</p>
            {/* Drop down */}
                <ol className='drop-down hidden absolute z-50 text-black'>
                    <div className="relative  text-sm bg-sky-400 p-3 rounded-md">
                      {/* item 1 */}
                      <li className=' hover:scale-95 hover:text-gray-600 cursor-pointer '>Featurte 1</li><hr />
                      <li className=' hover:scale-95 hover:text-gray-600 cursor-pointer '>Featurte 2</li><hr />
                      <li className=' hover:scale-95 hover:text-gray-600 cursor-pointer '>Featurte 3</li><hr />
                      <li className=' hover:scale-95 hover:text-gray-600 cursor-pointer '>Featurte 4</li><hr />
                      {/* you can add more items */}
                    </div>
                </ol>
        </div>

        {/* CONTACT */}
        <p className='hover:text-[#E9CBC1] pb-4 cursor-pointer text-white'>CONTACT</p>

        {/* BLOG */}
        <p className='hover:text-[#E9CBC1] pb-4 cursor-pointer text-white'>BLOG</p>
      </div>
      

      {/* Social Media */}
      <div className="flex gap-3 align-middle h-fit my-auto max-lg:hidden hover:cursor-pointer relative ">
      {/* cart */}
      <FiShoppingCart  className='hover:scale-90 relative'/>
      {/* Instagram */}
      <IoLogoInstagram  className='hover:scale-90 relative'/>
      {/* facebook */}
      <TfiFacebook className='hover:scale-90 relative' />
     
      </div>


        {/* More Options on SMall Screen */}
      <FiAlignJustify className='lg:hidden h-fit my-auto text-xl relative' />


    </nav>
  )
}

export default navbar
