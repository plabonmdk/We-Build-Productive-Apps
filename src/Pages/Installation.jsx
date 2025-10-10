import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router"; // ✅ for navigation
import review from "../assets/icon-review.png";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import appsError from "../assets/App-Error.png";
import useProducts from "../Hooks/useProdducts";
import LoadingSpinner from "../Components/LoadingSpinner";

const Installation = () => {
  const {apps, loading, error} = useProducts();
  const [sortOrder, setSortOrder] = useState("none");
  const [installation, setInstallation] = useState([]);

  // ✅ Load installed apps from localStorage
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installation"));
    if (savedList) {
      setInstallation(savedList);
    }
  }, []);

  // ✅ Delete (Uninstall) app with confirmation
  const handleDelete = (id) => {
    const appToDelete = installation.find((itm) => itm.id === id);

    Swal.fire({
      title: "Are you sure?",
      text: `Do you really want to uninstall "${appToDelete.title}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, uninstall it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedList = installation.filter((itm) => itm.id !== id);
        setInstallation(updatedList);
        localStorage.setItem("installation", JSON.stringify(updatedList));

        Swal.fire({
          icon: "success",
          title: "Uninstalled!",
          text: "The app has been successfully removed.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  // ✅ Sort apps when sort order changes
  useEffect(() => {
    if (sortOrder === "mb-asc") {
      const sorted = [...installation].sort((a, b) => a.downloads - b.downloads);
      setInstallation(sorted);
    } else if (sortOrder === "mb-desc") {
      const sorted = [...installation].sort((a, b) => b.downloads - a.downloads);
      setInstallation(sorted);
    }
  }, [sortOrder]); // Re-run when sort order changes

  return (
   <div>
    {
      loading?<LoadingSpinner></LoadingSpinner>: <div className="max-w-[2000px] mx-auto px-4 md:px-8">
      {/* ✅ Header */}
      <div className="text-center my-5">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Your Installed Apps
        </h1>
        <p className="my-3 text-lg text-gray-600">
          Explore all trending apps developed by us.
        </p>
      </div>

      {/* ✅ Sorting Section */}
      <div className="flex items-center my-7 justify-between flex-wrap gap-4">
        <h2 className="text-xl font-bold">
          (<span>{installation.length}</span>) Apps Found
        </h2>

        <label className="form-control w-full sm:w-64">
          <select
            className="select select-bordered w-full"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Downloads</option>
            <option value="mb-asc">Low → High</option>
            <option value="mb-desc">High → Low</option>
          </select>
        </label>
      </div>

      {/* ✅ Installed Apps Section */}
      <div className="flex justify-center items-center">
        <div className="w-full">
          {installation.length === 0 ? (
            // Fallback message when no apps are installed
            <div className="text-center py-20">
              <img
                className="mx-auto mb-5 w-40 md:w-60"
                src={appsError}
                alt="No apps"
              />
              <h2 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Oops! You don’t have any installed apps.
              </h2>
              <p className="text-gray-500 mt-3 max-w-md mx-auto">
                Nothing installed yet! Head over to Apps and grab your favorites
                — they’ll show up here once added.
              </p>
              <Link
                to="/apps"
                className="inline-block px-6 my-6 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-orange-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Apps
              </Link>
            </div>
          ) : (
            // ✅ Render installed apps
            installation.map((app) => (
              <div
                key={app.id}
                className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-lg mt-2 w-full bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-md overflow-hidden">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {app.title}
                    </h2>
                    <div className="flex items-center space-x-3 mt-1 text-sm text-gray-500">
                      <div className="flex items-center text-green-500 gap-1 font-medium">
                        <img className="h-[15px]" src={download} alt="Downloads" />
                        <span>{app.downloads}</span>M
                      </div>

                      <div className="flex items-center text-orange-500 gap-1 font-medium">
                        <img className="h-[20px]" src={rating} alt="Rating" />
                        {app.ratingAvg}
                      </div>

                      <div className="text-gray-700">
                        <span>{app.size}</span> MB
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(app.id)}
                  className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-4 rounded-md mt-3 sm:mt-0"
                >
                  Uninstall
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
    }
   </div>
  );
};

export default Installation;
