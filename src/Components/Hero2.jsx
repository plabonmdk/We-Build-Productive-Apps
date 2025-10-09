import React from 'react';

const Hero2 = () => {
    return (
         <section className="bg-gradient-to-r from-[#5B2EFF] via-[#7A42F4] to-[#B366FF] text-white py-16 px-6 md:px-16 rounded-3xl shadow-lg ">
      <div className=" text-center">
        
        <h1 className="text-3xl md:text-5xl font-bold mb-12">
          Trusted by Millions, Built for You
        </h1>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
         
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition duration-300">
            <h2 className="text-lg font-semibold mb-2">Total Downloads</h2>
            <h1 className="text-4xl md:text-5xl font-bold">29.6M</h1>
            <p className="text-sm text-gray-200 mt-2">
              <span className="text-green-300 font-medium">+21%</span> more than
              last month
            </p>
          </div>

          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition duration-300">
            <h2 className="text-lg font-semibold mb-2">Total Reviews</h2>
            <h1 className="text-4xl md:text-5xl font-bold">906K</h1>
            <p className="text-sm text-gray-200 mt-2">
              <span className="text-green-300 font-medium">+46%</span> more than
              last month
            </p>
          </div>

          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition duration-300">
            <h2 className="text-lg font-semibold mb-2">Active Apps</h2>
            <h1 className="text-4xl md:text-5xl font-bold">132+</h1>
            <p className="text-sm text-gray-200 mt-2">
              <span className="text-yellow-300 font-medium">31</span> more will
              launch soon
            </p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Hero2;