import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import useProducts from "../Hooks/useProdducts";

const Apps = () => {
    const { apps, } = useProducts();
    const [search, setSearch] = useState("")
    const term = search.trim().toLocaleLowerCase()
    const searchedProducts = term
    ? apps.filter((product) =>
        product.title.toLowerCase().includes(term)
      )
    : apps;
  
    

  return (
    <div className="max-w-[2000px] mx-auto">
      <div className="text-center my-5">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="my-3 text-lg">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex items-center justify-between">
        <h2>
          <span className="">({searchedProducts.length})</span>Apps Found
        </h2>
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input value={search} onChange={(e)=> setSearch(e.target.value)} type="search" required placeholder="Search" />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {searchedProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
