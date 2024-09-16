import React from "react";
import {Link} from "react-router-dom"
// import IMAGES
import img1 from "../assets/IMG_scroolbar/24.jpeg";

// React Icons
import { HiOutlineHashtag } from "react-icons/hi2";

const Mentors = () => {
  return (
    <div className="bg-purple-600 md:flex pt-3 h-screen overflow-auto">
      {/* Text Bar containig Tags and Text */}
      <div className="h-fit  md:w-1/3 text-white px-3 mt-5 ">
        {/* heading */}
        <p className="font-bold text-3xl mx-auto uppercase ">
          Speak to mentors about all things growth
        </p>
        {/* Question */}
        <p className="mt-2 font-mono font-bold uppercase text-black">
          What would you like to Advance in Today?
        </p>
        {/*Quote or Say someting */}
        <p className="mx-auto  mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          eligendi labore vero molestias veniam soluta, quo ab officiis
          veritatis ipsa eos quaerat expedita exercitationem error voluptate. A
          in amet mollitia.
        </p>

        {/* Hashtags */}
        <div className=" mt-6 flex flex-wrap gap-1 mx-3">
          <Hashtag text="Building a team" />
          <Hashtag text="Product launches" />
          <Hashtag text="Pricing strategy" />
          <Hashtag text="Mindset coaching" />
          <Hashtag text="Venting frustration" />
          <Hashtag text="Imposter syndrome" />
          <Hashtag text="Product management" />
          <Hashtag text="Paid ads" />
          <Hashtag text="Going from 0 to 1" />
          <Hashtag text="Building processes" />
          <div></div>
        </div>
        {/*Button (Explore More) */}
        <button className="bg-black text-white py-2 rounded-xl px-10 mt-3 hover:scale-95 hover:bg-green-500 hover:text-black font-bold">
          Explore More
        </button>
      </div>
      {/* Text Bar ends */}

      {/* Cards */}
      <div className=" mt-5 md:w-2/3 flex flex-wrap gap-2 my-2 max-md:mb-4 overflow-auto">
        {/* upgrade this section more in terms of scrooling */}
        <Card 
          image={img1}
          alter="IMG1"
          Name="Navin Khandare"
          post="CEO and Founder of XYZ company"
          to="/MentorProfile"
        />

        <Card
          image={img1}
          alter="IMG1"
          Name="Navin Khandare"
          post="CEO and Founder of XYZ company"
        />

        <Card
          image={img1}
          alter="IMG1"
          Name="Navin Khandare"
          post="CEO and Founder of XYZ company"
        />

        <Card
          image={img1}
          alter="IMG1"
          Name="Navin Khandare"
          post="CEO and Founder of XYZ company"
        />

        <Card
          image={img1}
          alter="IMG1"
          Name="Navin Khandare"
          post="CEO and Founder of XYZ company"
        />

        <Card
          image={img1}
          alter="IMG1"
          Name="Navin Khandare"
          post="CEO and Founder of XYZ company"
        />

        <Card
          image={img1}
          alter="IMG1"
          Name="Navin Khandare"
          post="CEO and Founder of XYZ company"
        />

        <Card
          image={img1}
          alter="IMG1"
          Name="Navin Khandare"
          post="CEO and Founder of XYZ company"
        />

        <Card
          image={img1}
          alter="IMG1"
          Name="Navin Khandare"
          post="CEO and Founder of XYZ company"
        />
      </div>
      {/* Cards End */}
    </div>
    // Mentors End
  );
};

export default Mentors;

// Templates

// Mentor Card Template
const Card = (props) => {
  return (
    <div className=" max-md:w-52  md:w-1/4 p-2 rounded-xl h-fit bg-white mx-auto ">
      <Link to={props.to}>
        {/* Mentor Image */}
        <img src={props.image} alt={props.alter} className="rounded-md" />
        {/* Mentor Name */}
        <h2 className="font-bold font-sans">{props.Name}</h2>
        {/* Mentor Post  */}
        {/* this will come from the mentors profile page and will go through JS for proper display
              make it look like "CEO and Founder XYZ Com... " format i.e. only one line */}
        <p className="text-ellipsis leading-none">{props.post}</p>
      </Link>
    </div>
  );
};

// Hashtag Template
const Hashtag = (props) => {
  return (
    <p className="flex bg-gray-600 p-1 w-fit rounded-md text-sm px-2">
      {" "}
      <HiOutlineHashtag className="relative top-1" />
      {props.text}
    </p>
  );
};
