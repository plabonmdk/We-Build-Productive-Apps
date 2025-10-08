import { useParams } from "react-router";
import useProducts from "../Hooks/useProdducts";
import downloadsPng from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";

const AppsDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useProducts();
  const app = apps.find((a) => String(a.id) === id);
  if (loading) return <p>Loading.........</p>;

  const {
    companyName,
    title,
    reviews,
    ratings,
    downloads,
    description,
    image,
    size,
    ratingAvg,
  } = app;
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-5 flex flex-col sm:flex-row items-center gap-5">
      {/* App Image */}
      <div className="flex-shrink-0">
        <img
          src={image}
          alt="App Logo"
          className="w-24 h-24 rounded-full object-cover border"
        />
      </div>

      {/* Info */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">
          Developed by{" "}
          <a href="#" className="text-blue-600 hover:underline font-medium">
            {companyName}
          </a>
        </p>
        <p>{description}</p>
        {/* Stats */}
        <div className="flex flex-wrap items-center gap-8 mt-3">
          {/* Downloads */}
          <div className="flex items-center gap-2">
            <img src={downloadsPng} alt="Downloads" className="w-6 h-6" />
            <div>
              <p className="text-sm text-gray-500">Downloads</p>
              <p className="font-bold text-base">{downloads}M</p>
            </div>
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-2">
            <img src={rating} alt="Ratings" className="w-6 h-6" />
            <div>
              <p className="text-sm text-gray-500">Average Ratings</p>
              <p className="font-bold text-base">{ratingAvg}</p>
            </div>
          </div>

          {/* Reviews */}
          <div className="flex items-center gap-2">
            <img src={review} alt="Reviews" className="w-6 h-6" />
            <div>
              <p className="text-sm text-gray-500">Total Reviews</p>
              <p className="font-bold text-base">{reviews}K</p>
            </div>
          </div>
        </div>

        {/* Install Button */}
        <button className="mt-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition">
          Install Now (<span>{size}MB</span>)
        </button>
      </div>
    </div>
  );
};

export default AppsDetails;
