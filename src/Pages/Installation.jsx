import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import review from "../assets/icon-review.png";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";

const Installation = () => {
  const [sortOrder, setSortOrder] = useState("none");
  const [installation, setInstallation] = useState([]);

  // Load installed apps from localStorage
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installation"));
    if (savedList) {
      setInstallation(savedList);
    }
  }, []);

  // Delete (Uninstall) app with confirmation
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
        const removedItem = installation.filter((itm) => itm.id !== id);
        setInstallation(removedItem);
        localStorage.setItem("installation", JSON.stringify(removedItem));

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

  // Sort apps by downloads
  const sortedItem = () => {
    if (sortOrder === "mb-asc") {
      const sortArr = [...installation].sort((a, b) => a.downloads - b.downloads);
      setInstallation(sortArr);
    } else if (sortOrder === "mb-desc") {
      const sortArr = [...installation].sort((a, b) => b.downloads - a.downloads);
      setInstallation(sortArr);
    }
  };

  return (
    <div className="max-w-[2000px] mx-auto">
      {/* Header */}
      <div className="text-center my-5">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Your Installed Apps
        </h1>
        <p className="my-3 text-lg">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Sorting Section */}
      <div className="flex items-center my-7 justify-between">
        <h2 className="text-xl font-bold">
          (<span>{installation.length}</span>) Apps Found
        </h2>

        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onClick={sortedItem}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Mb</option>
            <option value="mb-asc">Low-&gt;High</option>
            <option value="mb-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>

      {/* Installed Apps Section */}
      <div className="flex justify-center items-center">
        <div className="w-full">
          {installation.length === 0 ? (
            // Fallback message when no apps are installed
            <div className="text-center py-20">
              <h2 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Oops! You don’t have any installed apps.
              </h2>
              <p className="text-gray-500 mt-3">
                Nothing installed yet! Head over to Apps and grab your favorites —
                they’ll show up here once added.
              </p>
              <button className="px-6 my-4 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-orange-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl">
                App
              </button>
            </div>
          ) : (
            // Render installed apps
            installation.map((app) => (
              <div
                key={app.id}
                className="flex items-center justify-between p-4 border rounded-lg mt-2 w-full bg-white shadow-sm hover:shadow-md transition"
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
                      <div className="flex items-center text-green-500 text-xl gap-1 font-medium">
                        <img className="h-[15px]" src={download} alt="" />
                        <span>{app.downloads}</span>M
                      </div>

                      <div className="flex items-center text-orange-500 text-xl gap-1 font-medium">
                        <img className="h-[20px]" src={rating} alt="" />
                        {app.ratingAvg}
                      </div>

                      <div className="text-xl">
                        <span>{app.size}</span> MB
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(app.id)}
                  className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-4 rounded-md"
                >
                  Uninstall
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Installation;
