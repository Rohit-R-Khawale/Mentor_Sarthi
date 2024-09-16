import React from 'react'
// import Images
import img1 from "../assets/IMG_scroolbar/mentor1.jpg"
import img2 from "../assets/IMG_scroolbar/marketing.webp"
import img3 from "../assets/IMG_scroolbar/Product.jpg"
const Quote = () => {
  return (
    <div className='md:mt-40 bg-black flex max-lg:flex-col gap-10  py-4 relative'>
      {/* Quote Text */}
      <div className="">
        <p className=' text-3xl w-2/3 text-white mx-auto '>
        “Advice is like snow; the softer it falls, the longer it dwells upon, and the deeper it sinks into the mind."<br/> — Samuel Taylor Coleridge
        </p>
      </div>

      {/* Founders/marketing/Product Cards */}
      <div className="flex max-md:flex-col gap-3">
        {/* Founders Card */}
        <Card
        heading="Founders"
        text="If you want sparring partners to talk through strategy, tactics, and how to deal with the utter chaos of growing a startup."
        image={img1}
        alter="Founders"
        />

        {/* Marketing */}
        <Card
        heading="Marketing"
        text="If you are looking to develop the skills and confidence to improve career prospects, transition to new roles, or hit growth targets."
        image={img2}
        alter="Marketing"
        />

        {/* Products */}
        <Card
        heading="Products"
        text="If you need a sounding board to brainstorm strategies, sharpen tactics, and master the unpredictable world of product management."
        image={img3}
        alter="Products"
        />

        
      </div>
    </div> 
  )
}

export default Quote

const Card=(props)=>{
  return(
  <div className=" mx-2  p-3 rounded-md md:w-1/3 max-md:mx-12 text-white  bg-purple-600 h-fit  max-md:text-center cursor-pointer">
            <h1 className='text-3xl mb-3'>{props.heading}</h1>
            <p className='text-sm'>{props.text}</p>
            <img src={props.image} alt={props.alter} className='rounded-md mt-2'/>
  </div>
  )
}
