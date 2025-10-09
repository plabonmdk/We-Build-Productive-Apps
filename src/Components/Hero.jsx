import React from "react";
import mobileImg from "../assets/hero.png";

import appStore from "../assets/App_Store_(iOS).svg.png"
import playStore from "../assets/hd-google-play-playstore-logo-symbol-png-701751694777134cuw3jc7voo.png"
import Hero2 from "./Hero2";


const Hero = () => {
  return (
    <section className="max-w-[2000px] mx-auto relative bg-[#f5f5f5] mt-10 md:mt-16">
      <div className="max-w-7xl mx-auto flex  md:flex-row justify-center items-center px-6 md:px-10 py-10 gap-12">
        
        <div className="flex-1 text-center">
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            We Build <br />
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </h1>

          
          <p className="mt-4 text-gray-600 text-center max-w-3xl mx-auto">
            At <span className="font-semibold">HERO.IO</span>, we craft
            innovative apps designed to make everyday life simpler, smarter, and
            more exciting. Our goal is to turn your ideas into digital
            experiences that truly make an impact.
          </p>

         
          <div className="flex items-center gap-4 mt-6 justify-center ">
            <a href="https://play.google.com/store/games?hl=en">
              <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 shadow-sm hover:bg-gray-50 cursor-pointer transition-transform duration-500 hover:scale-105">
                <img src={playStore} alt="Google Play" className="h-4 md:h-10" />{" "}
                <span className="text-md md:text-xl font-semibold">
                  Google Play
                </span>
              </button>
            </a>
            <a href="https://www.apple.com/app-store/">
              <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 shadow-sm hover:bg-gray-50  cursor-pointer transition-transform duration-500 hover:scale-105">
                <img src={appStore} alt="App Store" className="h-4 md:h-10" />{" "}
                <span className="text-md md:text-xl font-semibold">
                  App Store
                </span>
              </button>
            </a>
          </div>
        </div>

        
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src={mobileImg}
          alt="Mobile App"
          className="w-[260px] md:w-[700px] drop-shadow-2xl"
        />
      </div>
      <div >
        <Hero2></Hero2>
      </div>
    </section>
  );
};

export default Hero;
