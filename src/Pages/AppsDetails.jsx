import { useState, useEffect } from "react";
import { useParams } from "react-router";
import useProducts from "../Hooks/useProdducts";
import downloadsPng from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";

const AppsDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useProducts();
  const app = apps?.find((a) => String(a.id) === id);

  const {
    companyName,
    title,
    reviews,
    downloads,
    description,
    image,
    size,
    ratingAvg,
  } = app || {};

  // ✅ ইনস্টল স্ট্যাটাস ট্র্যাক
  const [isInstalled, setIsInstalled] = useState(false);

  // ✅ পেজ লোডে চেক করবো ইনস্টল করা আছে কিনা
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
      // ✅ আগে থেকে ইনস্টল থাকলে নতুন alert
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
  if (!app) return <p>App not found ❌</p>;

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-5 flex flex-col sm:flex-row items-center gap-5">
      <div className="flex-shrink-0">
        <img
          src={image}
          alt="App Logo"
          className="w-24 h-24 rounded-full object-cover border"
        />
      </div>

      <div className="flex-1">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">
          Developed by{" "}
          <span className="text-blue-600 hover:underline font-medium">
            {companyName}
          </span>
        </p>
        <p className="mt-1">{description}</p>

        <div className="flex flex-wrap items-center gap-8 mt-3">
          <div className="flex items-center gap-2">
            <img src={downloadsPng} alt="Downloads" className="w-6 h-6" />
            <div>
              <p className="text-sm text-gray-500">Downloads</p>
              <p className="font-bold text-base">{downloads}M</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img src={rating} alt="Ratings" className="w-6 h-6" />
            <div>
              <p className="text-sm text-gray-500">Average Ratings</p>
              <p className="font-bold text-base">{ratingAvg}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img src={review} alt="Reviews" className="w-6 h-6" />
            <div>
              <p className="text-sm text-gray-500">Total Reviews</p>
              <p className="font-bold text-base">{reviews}K</p>
            </div>
          </div>
        </div>

        <button
          onClick={handleAddToInstallation}
          className={`mt-4 font-semibold px-5 py-2 rounded-lg transition ${
            isInstalled
              ? "bg-gray-300 text-gray-600"
              : "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:opacity-90"
          }`}
        >
          {isInstalled ? "Installed ✅" : <>Install Now (<span>{size}MB</span>)</>}
        </button>
      </div>
    </div>
  );
};

export default AppsDetails;
