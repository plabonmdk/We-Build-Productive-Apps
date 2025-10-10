import React from "react";

const Hero2 = () => {
  return (
    <section className="bg-gradient-to-r from-[#5B2EFF] via-[#7A42F4] to-[#B366FF] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 rounded-3xl shadow-lg mx-3 sm:mx-6 md:mx-12">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 sm:mb-12 leading-snug">
          Trusted by Millions, Built for You
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {/* Total Downloads */}
          <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-white/20 transition duration-300">
            <h2 className="text-base sm:text-lg font-semibold mb-2">
              Total Downloads
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">29.6M</h1>
            <p className="text-xs sm:text-sm text-gray-200 mt-2">
              <span className="text-green-300 font-medium">+21%</span> more than last month
            </p>
          </div>

          {/* Total Reviews */}
          <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-white/20 transition duration-300">
            <h2 className="text-base sm:text-lg font-semibold mb-2">
              Total Reviews
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">906K</h1>
            <p className="text-xs sm:text-sm text-gray-200 mt-2">
              <span className="text-green-300 font-medium">+46%</span> more than last month
            </p>
          </div>

          {/* Active Apps */}
          <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-white/20 transition duration-300">
            <h2 className="text-base sm:text-lg font-semibold mb-2">
              Active Apps
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">132+</h1>
            <p className="text-xs sm:text-sm text-gray-200 mt-2">
              <span className="text-yellow-300 font-medium">31</span> more will launch soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
