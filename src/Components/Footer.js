import React from 'react';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 md:flex">
        {/* News Letter */}
        <div className=" mb-12 md:w-1/3">
          <h1 className="text-4xl font-bold mb-4">Join our weekly newsletter with roundups, video resources and upcoming event.</h1>
          <p className="text-lg mb-8">Be part of a 1000+ growth community</p>

          <input type="email" placeholder="Enter your email to subscribe..." className="w-full max-w-md px-4 py-3 text-black rounded-md border border-gray-700 focus:outline-none focus:border-blue-500 mb-4" />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200">Subscribe</button>
        </div>

        {/* Footer Bars */}
        <div className=" flex max-sm:flex-col gap-8">
          <div className="w-3/4 sm:grid sm:grid-cols-2 max-sm:flex max-sm:flex-col gap-3">
              <div className='h-fit w-fit'>
                <h2 className="text-2xl font-bold mb-4">GET STARTED</h2>
                <ul className="list-disc ml-6">
                  <li>For individuals</li>
                  <li>For teams</li>
                  <li>For venture capital</li>
                  <li>Become a Mentor</li>
                  <li>Self-Guided Tour</li>
                  <li>Request Demo</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 w-1/3">PLATFORM</h2>
                <ul className="list-disc ml-6">
                  <li>Overview</li>
                  <li>Help Requests</li>
                  <li>Networking</li>
                  <li>Video Room</li>
                  <li>Scheduling</li>
                  <li>Calendar Sync</li>
                </ul>
              </div>
              <div className=''>
                <h2 className="text-2xl font-bold mb-4 ">COMPANY</h2>
                <ul className="list-disc ml-6">
                  <li>About Us</li>
                  <li>Hall of Love</li>
                  <li>Customer Stories</li>
                  <li>IRL Events</li>
                </ul>
              </div>
              <div className=''>
                <h2 className="text-2xl font-bold mb-4 ">RESOURCES</h2>
                <ul className="list-disc ml-6">
                  <li>Blog</li>
                  <li>Video Library</li>
                  <li>Case Studies</li>
                  <li>Glossary</li>
                  <li>Partner Deals</li>
                  <li>Startup Accelerator Reviews</li>
                </ul>
              </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 w-full">POPULAR MENTORS FOR:</h2>
            <ul className="list-disc ml-6">
              <li>Startup Founders</li>
              <li>Growth Marketers</li>
              <li>Product Managers</li>
              <li>Facebook Ads</li>
              <li>eCommerce</li>
              <li>SaaS</li>
              <li>CEOs</li>
              <li>CMOs</li>
              <li>Content Marketing</li>
              <li>Heads of Growth</li>
              <li>SEO</li>
              <li>Social Media</li>
              <li>Go to Market Strategy</li>
              <li>Idea Validation</li>
              <li>Pricing Strategy</li>
              <li>Product Marketing</li>
            </ul>
          </div>
         
        </div>
        
      </div>
      <footer className="bg-gray-800 text-center py-4">
        <div className="container mx-auto">
          <p className="text-sm text-gray-500">© 2024 Mentor Sarthi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
