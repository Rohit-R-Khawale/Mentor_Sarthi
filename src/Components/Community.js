import React from 'react';
// Import Images
import img from "../assets/IMG_scroolbar/200.png"

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-center">Come for the mentorship, stay for the networking</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* City Squads */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">City Squads</h2>
            <p className="text-gray-400 mb-4">Localized Mastermind Groups connecting community members based on where they live.</p>
            {/* City Cards */}
            <div className="grid grid-cols-3 gap-4">
              {/* City 1 */}
              <Citycard
              image={img}
              City="City 1"
              />   
              {/* City 2 */}
                <Citycard
                image={img}
                City="City 2"
                />  
              {/* City 3 */}
             <Citycard
                image={img}
                City="City 3"
                />  
              {/* City 4 */}
              <Citycard
                image={img}
                City="City 4"
                /> 
              {/* City 5 */}
              <Citycard
                image={img}
                City="City 5"
                /> 
              {/* City 6 */}
              <Citycard
                image={img}
                City="City 6"
                /> 
              {/* City 7 */}
              <Citycard
                image={img}
                City="City 7"
                /> 
              {/* City 8 */}
              <Citycard
                image={img}
                City="City 8"
                /> 
              {/* City 9 */}
              <Citycard
                image={img}
                City="City 9"
                /> 
            </div>
          </div>
          {/* Events */}
          <div className="relative rounded-lg shadow-lg p-6 bg-gray-800">
            <img src="https://via.placeholder.com/600x400" alt="Events" className="rounded-lg w-full h-full object-cover" />
            <div className="absolute bottom-4 right-4 bg-gray-700 text-white p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-2">Events</h2>
              <p className="text-sm">We host monthly in person events around the world.</p>
              <div className="mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
          {/* Join our Slack community */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Join our Slack community</h2>
            <p className="text-gray-400 mb-4">An active community of 3,000+ founders, marketers, and product people from around the world.</p>
            <div className="mt-4">
              <img src="https://via.placeholder.com/200" alt="Slack community" className="rounded-lg" />
            </div>
          </div>
        </div>

        {/* Connection Request For Later Stage */}
        <div className="">
            {/* Connection Requests */}
            {/* <div className="mt-16 bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Connection Requests</h2>
              <p className="text-gray-400 mb-4">Don't leave networking to chance. Invest in networking with the people that match your preferences and criteria.</p> */}
              {/* Connection Request Example */}
              {/* <div className="mt-4 border border-gray-700 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <img src="https://via.placeholder.com/40" alt="Profile picture" className="rounded-full mr-2" />
                  <p className="text-gray-400">Good afternoon, Aleki</p>
                </div>
                <div className="bg-gray-700 text-white px-2 py-1 rounded-lg mb-2">
                  What is your weekly challenge/s?
                </div>
                <div className="bg-gray-700 text-white px-2 py-1 rounded-lg">
                  Weekly challenge: Product Market Fit for my SaaS tool
                </div> */}
                {/* Connection Profiles */}
                {/* <div className="flex items-center mt-4">
                  <img src="https://via.placeholder.com/40" alt="Profile picture" className="rounded-full mr-2" />
                  <p className="text-gray-400">Jane</p>
                </div>
                <div className="flex items-center ml-4">
                  <img src="https://via.placeholder.com/40" alt="Profile picture" className="rounded-full mr-2" />
                  <p className="text-gray-400">Jane</p>
                </div>
                <div className="flex items-center ml-4">
                  <img src="https://via.placeholder.com/40" alt="Profile picture" className="rounded-full mr-2" />
                  <p className="text-gray-400">Jane</p>
                </div>
              </div>
            </div> */}
        </div>


      </div>
    </div>
  );
}

export default App;


const Citycard=(props)=>{
    return(
        <div className="relative">
                <img src={props.image} alt={props.City} className="rounded-lg h-full" />
                <div className="absolute bottom-2 left-2 text-xs bg-gray-700 text-white px-2 py-1 rounded-lg">
                  {props.City}
                </div>
              </div>
    )
}