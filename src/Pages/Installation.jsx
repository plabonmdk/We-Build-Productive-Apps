import React, { useEffect, useState } from "react";
import review from "../assets/icon-review.png";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";

const Installation = () => {
  const [installation, setInstallation] = useState([]);
  // const [sortOrder, setSortOrder] = useState("none")

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installation"));
    if (savedList) {
      setInstallation(savedList);
    }
  }, []);

  return (
    <div className="max-w-[2000px] mx-auto">
      <h2>Installation{installation.length}</h2>

      {installation.map((app) => ( 
        // <div className="hero bg-[#FFFFFF] w-full ">
        //   <div className="flex gap-5 justify-between  flex-col lg:flex-row">
        //     <img
        //       src={app.image}
        //       className="h-[100px] w-[100px] rounded-lg shadow-2xl"
        //     />
        //     <div>
        //       <h1 className="text-xl my-2 font-bold">{app.title}</h1>
        //       <div className="flex items-center justify-between">
        //         <div className="flex items-center">
        //           <img className="h-[20px] mr-2" src={download} alt="" />
        //           <h2>
        //             <span>{app.downloads}</span>M
        //           </h2>
        //         </div>
        //         <div className="flex items-center">
        //           <img className="h-[20px] mr-1" src={rating} alt="" />
        //           <h2>{app.ratingAvg}</h2>
        //         </div>
        //         <div className="flex items-center">
        //           <img className="h-[20px] mr-1" src={review} alt="" />
        //           <h2>
        //             <span>{app.reviews}</span>MB
        //           </h2>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <div className="flex  items-center justify-between p-4 border rounded-lg mt-2  w-full max-w-7xl bg-white">
  
  <div className="flex items-center space-x-4">
    
    <div className="w-16 h-16  rounded-md">
      <img src={app.image} alt="" />
    </div>

    
    <div>
      <h2 className="text-lg font-semibold text-gray-900">{app.title}</h2>
      <div className="flex items-center space-x-3 mt-1 text-sm text-gray-500">
        
        <div className="flex items-center text-green-500 text-xl gap-1 font-medium">
          <img className="h-[15px]" src={download} alt="" />
          <span>{app.downloads}</span>M
        </div>
        
        <div className="flex items-center text-orange-500 text-xl gap-1 font-medium">
          <img className="h-[20px]" src={rating} alt="" />
         {app.ratingAvg}
        </div>
        
        <div className="text-xl"><span>{app.size}</span> MB</div>
      </div>
    </div>
  </div>

  
  <button 
   className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-4 rounded-md">
    Uninstall
  </button>
</div>

      ))}
    </div>
  );
};

export default Installation;
