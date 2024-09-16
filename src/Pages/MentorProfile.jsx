import React from "react";
// import react icons
import { MdOutlineLocationOn } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { BsLightningChargeFill } from "react-icons/bs";
import { LuMessagesSquare } from "react-icons/lu";
import { RiUserAddFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { CiLink } from "react-icons/ci";
import { SiGooglehome } from "react-icons/si";
import { AiOutlineTeam } from "react-icons/ai";
import { PiStrategyFill } from "react-icons/pi";
import { VscLightbulbSparkle } from "react-icons/vsc";
import { MdDesignServices } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { RiOrganizationChart } from "react-icons/ri";

// importing Components
import Navbar from "../Components/Navbar";
// images import
import profileIMG from "../assets/IMG_scroolbar/200.png";
import Zapire from "../assets/Zapire.webp";
import zohoLogo from "../assets/LOGOS/zoho-logo.png";
import ITG from "../assets/LOGOS/itg-logo-512x512 (1).png";
import smile from "../assets/LOGOS/smile-logo.png"
import ProductPH from "../assets/LOGOS/Product PH.png"
import DXCTechnology from "../assets/LOGOS/DXC Technology.png"
import Salarium from "../assets/LOGOS/Salarium.jpeg"
import oracle from "../assets/LOGOS/Oracle.png"

const MentorProfile = () => {
  return (
    <div className=" ">
      <Navbar />
      <Profile id="Profile" />
      <hr />
      {/* Page Navbar */}
      <div className="w-3/5 px-3 text-blue-500 text-xl mx-auto flex gap-3 justify-between py-1">
        <span className="flex gap-3">
          <a href="#Profile" className=" hover-underline-animation">
            {" "}
            Profile{" "}
          </a>
          <a href="#expertise " className="hover-underline-animation">
            {" "}
            Expertise{" "}
          </a>
          <a href="#toolkit " className="hover-underline-animation">
            Toolkit
          </a>
          <a href="#reviews " className="hover-underline-animation">
            Reviews
          </a>
        </span>
        <p className="flex gap-2 cursor-pointer">
          <CiLink className="relative top-1 " />
          <span className="hover-underline-animation">Copy Profile Link!</span>
        </p>
      </div>
      <hr />
      {/* Page Navbar Ends */}

      {/* Bio of the person */}
      <div className="bg-gray-300 pb-12 ">
        <Bio />
        <Expertise />
        <Toolkit />
        <Experience />
        <MyWritten/>
      </div>
    </div>
    // page END
  );
};

export default MentorProfile;

const Profile = () => {
  return (
    <>
      {/*Profile*/}
      <div className=" w-3/5 mx-auto p-2 ">
        <img
          src={profileIMG}
          alt="Name oF Mentor"
          className="w-52 rounded-full mx-auto my-3"
        />
        <p className="text-center text-4xl font-sans">Dr. Navin Khandare </p>
        <p className="text-center">
          Product Management, Fintech, API, SaaS, International Expansion //
          Chief Product Officer @ Smile API
        </p>
        {/*     Location/Language/joining Date  */}
        <div className="text-[#A5AEBC] flex gap-3 w-fit mt-3 mx-auto">
          <p className="flex">
            <MdOutlineLocationOn className="relative top-1" /> Location of the
            Mentor
          </p>
          <p className="flex">
            <GrLanguage className="relative top-1" /> Languages
          </p>
          <p>from , Location</p>
          <p>joining Date/year</p>
        </div>
        {/* Responds in... */}
        <p className="flex text-gray-400 text-sm w-fit mx-auto mt-2 ">
          <BsLightningChargeFill className="relative top-1  text-green-500" />{" "}
          Ususally Responds in 2 Days{" "}
        </p>

        {/* Avaibility and Fees bar */}
        <div className="mt-5">
          {/* Fee Charged/ time slot  bar */}
          <div className="border-2 border-gray-300 rounded-md px-3 py-1 flex justify-between gap-2">
            <span className="grid grid-rows-2">
              <p className="text-3xl font-bold text-green-600">Free</p>
              <p className="text-gray-400 my-auto text-sm">Price per hour</p>
            </span>

            {/* time slots */}
            <div className="text-cente grid grid-rows-2">
              <span className="flex gap-2 text-sm font-semibold text-green-600 my-auto mx-auto">
                <p className="bg-green-100  px-2 py-1 rounded-full ">15min</p>
                <p className="bg-green-100  px-2 py-1 rounded-full ">30min</p>
                <p className="bg-green-100  px-2 py-1 rounded-full ">60min</p>
              </span>
              <p className="text-sm text-gray-400 my-auto text-center">
                Time Blocks Available
              </p>
            </div>

            {/* rating */}
            <div className="text-end grid grid-rows-2">
              <p className="text-2xl font-bold flex gap-2 justify-end">
                ⭐ 4.95
              </p>
              <p className="text-sm text-gray-400 my-auto">
                5 reviews/ 9 sessions
              </p>
            </div>
          </div>
          {/* Availbility  */}
          <div className=" mt-2 border-2 border-gray-300 rounded-md px-3 py-1 flex gap-2">
            {/* Calender */}
            <div className=" text-center w-fit border-2 border-[#D7DEE9] rounded-md overflow-hidden">
              <p className="bg-[#D7DEE9] px-1 font-bold text-gray-500">
                <span className="text-xs   ">WED</span>
              </p>
              <p className="px-1 font-bold ">18</p>
            </div>

            <div className="">
              <p className="font-bold">Next availability</p>
              <p className="text-sm text-gray-400">
                {" "}
                <span className="bg-[#D7DEE9] px-1 rounded-full text-gray-500 ">
                  in 2 days{" "}
                </span>{" "}
                Wednesday, 18 September 7:30 AM Time Zone{" "}
              </p>
            </div>
          </div>
        </div>

        <div className=" mt-3 flex justify-between px-2">
          <div className="flex gap-2">
            <button className="text-md bg-blue-500 hover:bg-blue-300 hover:text-black    p-2 rounded-full text-white">
              Request a Call
            </button>

            <button className="text-md  hover:bg-blue-100 text-blue-500 p-2 rounded-full border-2 border-blue-300 flex gap-2">
              {" "}
              <LuMessagesSquare className="relative top-1" />
              Message Me
            </button>

            <button className="text-md  hover:bg-blue-100  text-blue-500 p-2 rounded-full border-2 border-blue-300 flex gap-2">
              {" "}
              <RiUserAddFill className="relative top-1" />
              Add to List
            </button>
          </div>
          <div className="flex gap-2 h-fit my-auto text-blue-500 text-3xl">
            <a href="" className="hover:scale-90">
              <FaSquareXTwitter />
            </a>
            <a href="" className="hover:scale-90">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const Bio = (props) => {
  return (
    <>
      <div className=" pt-9 rounded-xl">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FPhg_ZjrPtU?si=E3EeS0-hKhhvI9nS"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="mx-auto w-3/5 rounded-t-xl "
        ></iframe>
        {/* Bio Text */}
        <div className=" w-3/5 bg-white mx-auto p-3 rounded-b-xl">
          <p className="text-3xl font-semibold mb-16">Bio</p>
          <p>
            Hi! My name is Jan, and I am based out of Manila in the Philippines.
            I am currently the Chief Product Officer of Smile API, a service to
            allow employees to easily share their employment and income data
            from various platforms and employers, all through a single API. At
            Smile, I am responsible for product and marketing strategy, product
            development, and user experience. <br />
            <br />
            Prior to Smile, I was the Chief Technologist at DXC for Southeast
            Asia, a global Systems Integrator. Previously I was also Director
            for Product Management at Oracle NetSuite where I led international
            product strategy in the Asia Pacific region. I have consulted for,
            and have held, senior management positions at several technology
            startups, software and systems integration and technology consulting
            companies. <br />
            <br />I am a certified Professional Scrum Product Owner and Scrum
            Master, I hold an ITIL Foundation Certificate in IT Service
            Management, a degree in Business Administration and Accounting, and
            a Master's Degree in Entrepreneurship from the Asian Institute of
            Management. I am also a Certified Public Accountant.
          </p>
        </div>
      </div>
    </>
  );
};

const Expertise = () => {
  return (
    <>
      <div className=" w-3/5 mx-auto bg-white mt-3 p-2 rounded-xl h-fit">
        <h2 className="text-3xl mb-2 ml-9 font-bold">Expertise</h2>
        <hr />
        {/* Experience cards */}
        <div className=" flex flex-col gap-2">
          <ExpCard
            Head="Bootstrapping"
            image={SiGooglehome}
            text="Can share my own experience bootstrapping a startup and stretching funds to build and grow a business. I had previously started my own company at 21 with minimal funding, and was able to eventually sell it. I have also built and managed a martech company and was able to grow the business with no outside funding."
          />

          <ExpCard
            Head="Building a team"
            image={AiOutlineTeam}
            text="I have managed my own company, building a team across all functions from scratch. I have also built a team within a large corporation, so can share the similarities and differences between building a team in a startup/small company and a large company."
          />

          <ExpCard
            Head="Design / UX"
            image={MdDesignServices}
            text="I can help give feedback on linking UX with business and product strategy, doing UX research, validating assumptions with users, designing user journeys and others. Can also share some perspective on building the User Experience for niche audiences/users such as vertical-specific or API-only products."
          />

          <ExpCard
            Head="Go to market strategy"
            image={PiStrategyFill}
            text="Can share my personal experience in defining and executing the GTM strategy for my current and previous startups I've worked with. I can share my own personal experience in defining the total addressable market for your business, defining a target market segment, defining an ideal customer profile, acquiring the first set of customers, and factoring in nuances in doing this in different types of markets."
          />

          <ExpCard
            Head="Idea validation"
            image={VscLightbulbSparkle}
            text="Can share my personal experience how we validated our ideas, how we validated our assumptions, and the decision criteria we applied on which ideas to pursue."
          />

          <ExpCard
            Head="No-code"
            image={FaLaptopCode}
            text="I can share my own personal experience using various Low Code/No Code tools to build a product or service. Can share some of the best tools I've found and use, some pitfalls, and some opportunities possible with these types of tools."
          />

          <ExpCard
            Head="Product management"
            image={RiOrganizationChart}
            text="This is my bread and butter: can share my knowledge and experience around the discipline of product management, building a product strategy, defining a roadmap, hiring and managing product managers, and many others. In my previous roles I have been a product manager and have managed other product managers as well, and have trained and mentored other product managers."
          />
        </div>
      </div>
    </>
  );
};

const ExpCard = (props) => {
  return (
    <>
      <div className="grd gap-2 mt-2">
        <props.image className="w-full text-5xl text-purple-500 relative m-3 " />
        <span className="pl-5 border-l-2">
          <h3 className="text-xl font-semibold ">{props.Head}</h3>
          <p className="text-gray-600 mr-12">{props.text}</p>
        </span>
      </div>
      <hr />
    </>
  );
};

const Toolkit = () => {
  return (
    <>
      <div className="w-3/5 mx-auto bg-white mt-3 p-2 rounded-xl h-fit mb-12">
        <h2 className="text-3xl mb-2 ml-9 font-bold">Tool Kit</h2>
        <hr />
        {/* Tool Cards */}
        <div className="flex flex-col gap-2">
          <ToolCard
            Head="Zapier"
            image={Zapire}
            Expyear="6 years"
            text="Have been an active user of Zapier and have built various automation flows using Zapier. Have built automated lead funnels, data integration flows, and various other automations using Zapier."
          />

          <ToolCard
            Head="Zoho"
            image={zohoLogo}
            Expyear="9 years"
            text="Have been a user of Zoho One or almost all of the products in the Zoho Suite including Zoho CRM, Zoho Creator, Zoho Analytics, Zoho Campaigns, Zoho Books and many others."
          />
        </div>
      </div>
    </>
  );
};

const ToolCard = (props) => {
  return (
    <>
      <div className="grd gap-2 mt-2">
        <img src={props.image} alt={props.Head} className="w-4/5 mx-auto" />
        <span className="pl-5 border-l-2">
          <h3 className="text-xl font-semibold ">{props.Head}</h3>
          <p className="text-sm text-gray-500">{props.Expyear} of Experience</p>
          <p className="text-gray-600 mr-12 mt-2">{props.text}</p>
        </span>
      </div>
      <hr />
    </>
  );
};

const Experience = () => {
  return (
    <>
      <div className="w-3/5 mx-auto bg-white mt-3 p-2 rounded-xl h-fit">
        <h2 className="text-3xl mb-2 ml-9 font-bold">Experience</h2>
        <hr />
        {/* Experience Cards */}
        <div className="flex flex-col gap-2">
          <ExperienceCard 
          Head="ITG" 
          img={ITG}
          position="Adviser/Non-executive Director"
          duration="April 2020 - present•itgroupinc.asia"
          l1="ITG Inc, is a regional IT Solutions Integrator with almost 200 employees, with offices in Manila, Jakarta, Singapore and Kuala Lumpur."
          l2="I sit on the board advising the company on strategy and management."
          tag1="B2B"
          tag2="Digital Agencies"
           />

           <ExperienceCard 
           Head="Smile API"
           img={smile}
           position="Chief Product Officer"
           duration="April 2021 - present•getsmileapi.com"
           l1="I am part of the founding team of Smile, a technology company providing employment and income data via API to clients in Asia based in Singapore."
           l2="At Smile I am responsible for product strategy, design, and development, and driving go-to-market strategy. I helped grow the company from zero to 1, working with the other members of the founding team to build the product from scratch, raise seed funding, and acquire our first set of customers."
           tag1="FinTech"
           tag2="SaaS"
           />

           <ExperienceCard
           Head="Product PH"
           img={ProductPH}
           position="Co-organizer"
           duration="November 2018 - December 2021•productph.org"
           l1=" I was a co-organizer for Product PH: a non-profit organization started in 2016 which seeks to create a critical mass of digital product management professionals in the Philippines through education, networking and mentoring."
           l2=":)"
           tag1="Other"
           tag2="Other"
           />

           <ExperienceCard
           Head="DXC Technology"
           img={DXCTechnology}
           position="Chief Technologist for Southeast Asia"
           duration="May 2019 - March 2021•dxc.com"
           l1=" As the Chief Technologist for Southeast Asia at DXC, a global systems integrator, I was the most senior solution consultant/technology advisor role in the region."
           l2="In this role, I worked with the senior IT executives of our clients on their digital transformation journey, developing their transformation roadmap specifically in the areas of Agile Development, Cloud Computing, IoT and Automation."
           tag1="B2B"
           
           />

           <ExperienceCard
           Head="Salarium"
           img={Salarium}
           position="Head of Product"
           duration="October 2018 - March 2019•salarium.com"
           l1=" In this venture funded startup, I oversaw a 20-person team of product managers, product designers and software testers."
           l2="I oversaw the design, documentation, and testing of Salarium's 2 major products: Salarium HR management and payroll software, SALPay e-wallet and app-based banking service. I developed the product roadmap, led user research, and introduced agile delivery methods into the organization."
           tag1="B2B"
           tag2="SaaS"
           />

           <ExperienceCard
           Head="Oracle"
           img={oracle}
           position="Director, Product Management"
           duration="January 2010 - September 2018•oracle.com"
           l1="I led product and go-to-market strategy for Oracle NetSuite in the Asia Pacific region, overseeing all of Asia Pacific region including ANZ, SE Asia, China, India and Japan."
           l2="I also led a team of expert product managers based in China, Japan, India and the Philippines: to drive localization, compliance and certification initiatives for the company in the region. Together we launched 5 new products in the areas of payments, taxation, and financial reporting across the region, and achieved product certification/accreditation for compliance in 4 countries: the Philippines, Singapore, China, and India."
           tag1="SaaS"
           tag2="B2B"
           />
          
        </div>
      </div>
    </>
  );
};

const ExperienceCard = (props) => {
  return (
    <>
    <div className="grd gap-2 mt-2">
      <img src={props.img} alt={props.Head} className="w-2/3 mx-auto my-auto " />
      <span className="">
        <h3 className="text-xl font-semibold mt-2 ">{props.Head}</h3>
        <p className="text-gray-600">{props.position}</p>
        <p className="text-gray-500 text-xs">
          {props.duration}
        </p>
      </span>
    </div>
    {/* Company/Work Description */}
    <ol className="text-gray-600 mr-12 mx-12  list-disc  ">
      <li>{props.l1}</li>
      <li >{props.l2}</li>
    </ol>
    {/* Tags */}
    <ol className="mx-12 mt-2 flex gap-2">
      <li className="px-1 text-xs text-gray-600 bg-gray-300 w-fit rounded-full">{props.tag1}</li>
      <li className="px-1 text-xs text-gray-600 bg-gray-300 w-fit rounded-full">{props.tag2}</li>
    </ol>
    <hr />

    </>
  );
};


const MyWritten=()=>{
  return(
    <>
    <div className=" w-3/5 mx-auto bg-white mt-3 p-4 rounded-xl h-fit">
      <h2 className="text-xl font-semibold my-2  ">My best Written Content</h2>
      <p className="hover-underline-animation font-semibold">https://www.getsmileapi.com/reflections-on-our-product-journey-so-far</p>
    </div>
    </>
  )
}

// remaining
const Reviews=()=>{
  return(
    <>
    </>
  )
}