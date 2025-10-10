
import { FaStarHalfAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link,  } from "react-router";


const ProductCard = ({ product }) => {
  

  return (
    <Link to={`/appsDetails/${product.id}`}>
      <div className="group bg-white border border-gray-200 rounded-2xl mt-4 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden min-h-[420px]">
        {/* Product Image */}
        <figure className="relative w-full flex items-center justify-center h-64 overflow-hidden p-6 rounded-t-2xl bg-gray-50">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-76 w-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </figure>

        {/* Product Info */}
        <div className="px-5 py-4 flex flex-col justify-between h-[calc(420px-16rem)]">
          <h2 className="text-lg font-semibold text-gray-800 group-hover:text-[#00D390] transition-colors duration-300">
            {product.title}
          </h2>

          <div className="mt-3 flex items-center justify-between">
            {/* Downloads */}
            <span className="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-[#E0FBE2] to-[#F4FFF7] text-[#00D390]">
              <MdOutlineFileDownload className="text-lg" />
              {product.downloads}M
            </span>

            {/* Rating */}
            <span className="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-[#FFF3E0] to-[#FFF9F0] text-[#FF8811]">
              <FaStarHalfAlt className="text-lg" />
              {product.ratingAvg}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
