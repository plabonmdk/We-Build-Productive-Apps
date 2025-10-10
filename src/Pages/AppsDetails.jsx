import { useState, useEffect } from "react";
import { useParams } from "react-router";
import useProducts from "../Hooks/useProdducts";
import downloadsPng from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import RatingChart from "./RatingChart";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import LoadingSpinner from "../Components/LoadingSpinner";

const AppsDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useProducts();
  const app = apps?.find((a) => String(a.id) === id);

  const { companyName, title, reviews, downloads, image, size, ratingAvg } = app || {};
  const [isInstalled, setIsInstalled] = useState(false);

  // Check installation
  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem("installation")) || [];
    const alreadyInstalled = existingList.some((a) => a.id === app?.id);
    setIsInstalled(alreadyInstalled);
  }, [app]);

  // Handle install button
  const handleAddToInstallation = () => {
    if (!app) return;
    const existingList = JSON.parse(localStorage.getItem("installation")) || [];
    const isDuplicate = existingList.some((a) => a.id === app.id);

    if (isDuplicate) {
      setIsInstalled(true);
      Swal.fire({
        icon: "warning",
        title: "Already Installed!",
        text: "This app is already installed on your device.",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });
      return;
    }

    const updatedList = [...existingList, app];
    localStorage.setItem("installation", JSON.stringify(updatedList));
    setIsInstalled(true);

    Swal.fire({
      icon: "success",
      title: "Installed Successfully!",
      text: `${app.title} has been installed.`,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  };

  if (loading) return <LoadingSpinner />;
  if (!app) return <p>App not found</p>;

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-10">
      {/* ============== App Details Card ============== */}
      <div className="bg-white shadow-lg hover:shadow-2xl rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row items-center lg:items-start gap-10 transition-all duration-300">

        {/* ===== App Image ===== */}
        <div className="flex-shrink-0 w-full sm:w-[320px] flex justify-center">
          <img
            src={image}
            alt="App Logo"
            className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-2xl object-cover border border-gray-200 shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* ===== App Info ===== */}
        <div className="flex-1 w-full text-center lg:text-left flex flex-col gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight break-words">
              {title}
            </h2>
            <p className="text-gray-500 text-base sm:text-lg mt-2">
              Developed by{" "}
              <span className="text-blue-600 hover:underline font-semibold cursor-pointer">
                {companyName}
              </span>
            </p>
          </div>

          {/* ===== Info Cards ===== */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 mt-4 justify-items-center lg:justify-start">
            <div className="flex items-center gap-3">
              <img src={downloadsPng} alt="Downloads" className="w-6 sm:w-7 h-6 sm:h-7" />
              <div>
                <p className="text-gray-400 text-sm sm:text-base">Downloads</p>
                <p className="text-gray-900 font-semibold text-base sm:text-xl">{downloads}M</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img src={rating} alt="Ratings" className="w-6 sm:w-7 h-6 sm:h-7" />
              <div>
                <p className="text-gray-400 text-sm sm:text-base">Average Rating</p>
                <p className="text-gray-900 font-semibold text-base sm:text-xl">{ratingAvg}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img src={review} alt="Reviews" className="w-6 sm:w-7 h-6 sm:h-7" />
              <div>
                <p className="text-gray-400 text-sm sm:text-base">Total Reviews</p>
                <p className="text-gray-900 font-semibold text-base sm:text-xl">{reviews}K</p>
              </div>
            </div>
          </div>

          {/* ===== Install Button ===== */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
            <button
              onClick={handleAddToInstallation}
              className={`w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center whitespace-nowrap ${
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
          </div>
        </div>
      </div>

      {/* ===== Rating Chart ===== */}
      <div className="mt-10">
        <RatingChart key={app.id} rating={app.ratings} />
      </div>

      {/* ===== Description Section ===== */}
      <div className="mt-10 bg-gray-100 rounded-xl p-6 sm:p-10 shadow-inner">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Description</h1>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
};

export default AppsDetails;
