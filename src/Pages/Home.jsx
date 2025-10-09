import React from "react";
import { Link, useLoaderData } from "react-router";
import ProductCard from "../Components/ProductCard";
import Hero from "../Components/Hero";




const Home = () => {
  const products = useLoaderData();


  
  
  const featuredProducts = products.slice(0, 8);

  return (
    <>
    <Hero></Hero>
    
    
    <div className="max-w-[2000px] mx-auto">
      
      <div className="text-center my-5">
        <h1 className="text-4xl font-bold">Trending Apps</h1>
        <p className="my-3 text-lg">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
      <div className="text-center my-10">
        <Link to="/apps">
          <button
            className="text-lg p-2 rounded-lg font-semibold text-white bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] hover:from-[#9F62F2] hover:to-[#632EE3] 
                     transition-all duration-300"
          >
            Show All
          </button>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Home;
