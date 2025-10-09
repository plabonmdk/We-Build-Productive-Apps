import { useState, useEffect } from "react";
import { useParams } from "react-router";
import useProducts from "../Hooks/useProdducts";
import downloadsPng from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import RatingChart from "./RatingChart";

const AppsDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useProducts();
  const app = apps?.find((a) => String(a.id) === id);

  const {
    companyName,
    title,
    reviews,
    downloads,
    
    image,
    size,
    ratingAvg,
  } = app || {};

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem("installation")) || [];
    const alreadyInstalled = existingList.some((a) => a.id === app?.id);
    setIsInstalled(alreadyInstalled);
  }, [app]);

  const handleAddToInstallation = () => {
    if (!app) return;

    const existingList = JSON.parse(localStorage.getItem("installation")) || [];
    const isDuplicate = existingList.some((a) => a.id === app.id);

    if (isDuplicate) {
      alert("⚠️ This app is already installed.");
      setIsInstalled(true);
      return;
    }

    const updatedList = [...existingList, app];
    localStorage.setItem("installation", JSON.stringify(updatedList));
    setIsInstalled(true);
    alert("✅ App installed successfully!");
  };

  if (loading) return <p>Loading.........</p>;
  if (!app) return <p>App not found </p>;

  return (
    <>
     <div className="max-w-[1700px] mx-auto bg-white shadow-lg hover:shadow-2xl rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row items-center lg:items-start gap-10 transition-all duration-300">
  {/* App Image */}
  <div className="flex-shrink-0 w-full sm:w-[300px] flex justify-center">
    <img
      src={image}
      alt="App Logo"
      className="w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] rounded-2xl object-cover border border-gray-200 shadow-md transition-transform duration-300 hover:scale-105"
    />
  </div>

  {/* App Details */}
  <div className="flex-1 w-full text-center lg:text-left flex flex-col gap-6">
    {/* Title & Company */}
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>
      <p className="text-gray-500 text-base sm:text-lg mt-2">
        Developed by{" "}
        <span className="text-blue-600 hover:underline font-semibold cursor-pointer">
          {companyName}
        </span>
      </p>
    </div>

    {/* Stats Section */}
    <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10 mt-4">
      {/* Downloads */}
      <div className="flex items-center gap-3">
        <img src={downloadsPng} alt="Downloads" className="w-7 h-7" />
        <div>
          <p className="text-gray-400 text-sm sm:text-base">Downloads</p>
          <p className="text-gray-900 font-semibold text-lg sm:text-xl">
            {downloads}M
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-3">
        <img src={rating} alt="Ratings" className="w-7 h-7" />
        <div>
          <p className="text-gray-400 text-sm sm:text-base">Average Rating</p>
          <p className="text-gray-900 font-semibold text-lg sm:text-xl">
            {ratingAvg}
          </p>
        </div>
      </div>

      {/* Reviews */}
      <div className="flex items-center gap-3">
        <img src={review} alt="Reviews" className="w-7 h-7" />
        <div>
          <p className="text-gray-400 text-sm sm:text-base">Total Reviews</p>
          <p className="text-gray-900 font-semibold text-lg sm:text-xl">
            {reviews}K
          </p>
        </div>
      </div>
    </div>

    {/* Install Button & Chart */}
    <div className="mt-6 flex flex-col lg:flex-row lg:items-center gap-6">
      <button
        onClick={handleAddToInstallation}
        className={`w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 flex items-center justify-center whitespace-nowrap ${
          isInstalled
            ? "bg-gray-200 text-gray-600 cursor-not-allowed"
            : "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg hover:scale-105"
        }`}
      >
        {isInstalled ? (
          "Installed ✅"
        ) : (
          <>
            Install Now <span className="font-normal ml-1">({size}MB)</span>
          </>
        )}
      </button>

      {/* Placeholder for Chart */}
      
    </div>
  </div>
</div>
<RatingChart key={app.id} rating={app.ratings}></RatingChart>
</>
    
  );
};

export default AppsDetails;
