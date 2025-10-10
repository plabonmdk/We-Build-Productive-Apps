import { useState, useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import useProducts from "../Hooks/useProdducts";
import notImage from "../assets/App-Error.png";
import LoadingSpinner from "../Components/LoadingSpinner";
import { Link } from "react-router";
import Swal from "sweetalert2"; // ✅ import SweetAlert2

const Apps = () => {
  const { apps } = useProducts();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (apps.length > 0) {
      setLoading(false);
    }
  }, [apps]);

  const term = search.trim().toLowerCase();
  const searchedProducts = term
    ? apps.filter((product) => product.title.toLowerCase().includes(term))
    : apps;

  // ✅ SweetAlert replaces toastify notification
  useEffect(() => {
    if (!loading && term && searchedProducts.length === 0) {
      Swal.fire({
        icon: "info",
        title: "No Apps Found!",
        text: "No apps match your search. Try another name.",
        confirmButtonColor: "#7C3AED", // purple button
      });
    }
  }, [term, searchedProducts, loading]);

  return (
    <div className="max-w-[2000px] mx-auto">
      <div className="text-center my-5">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Our All Applications
        </h1>
        <p className="my-3 text-lg">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex items-center justify-between mb-5">
        <h2>
          <span>({searchedProducts.length})</span> Apps Found
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
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search"
            />
          </label>
        </div>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : searchedProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <img src={notImage} alt="No Result" className="w-60 md:w-80 mb-5" />
          <h1 className="text-gray-700 font-bold text-2xl md:text-4xl mb-3">
            Oops!! App Not Found
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-md">
            The app you are requesting is not found on our system. Please try
            searching for another app.
          </p>
          <div className="mt-8">
            <Link
              to={"/"}
              className="px-6 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg shadow-lg hover:shadow-xl transition"
            >
              Go Back!
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {searchedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
