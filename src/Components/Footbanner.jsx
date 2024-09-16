import React from 'react';

function FootBanner() {
  return (
    <div className="bg1 backdrop-blur-x; p-10 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold ">It's never been easier to</h1>
          <h2 className="text-3xl font-semibold text-white">get a second opinion</h2>
          <button className="bg-black hover:bg-[#F16AD1] text-white font-bold py-2 px-4 rounded-full mt-4">Explore Membership</button>
        </div>
        </div>
    </div>
  );
}

export default FootBanner;