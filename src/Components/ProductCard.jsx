import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const ProductCard = ({product}) => {
    return (
        <div className="card bg-base-100 border mt-3 shadow-lg hover:scale-105 transition ease-in-out">
  <figure className='h-[150px] overflow-hidden p-4 bg-gray-300'>
    <img className='w-full object-cover p-2'
      src={product.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product.title}</h2>
    
    <div className="card-actions justify-between">
      <span className="flex items-center bg-[#F1F5E8] p-1 rounded text-[#00D390]">< MdOutlineFileDownload className='mr-2' /> {product.downloads}<span>M</span></span>
      <span className="flex items-center bg-[#F1F5E8] p-1 rounded text-[#FF8811]"><FaStarHalfAlt  className='mr-2' />{product.ratingAvg}</span>
    </div>
  </div>
</div>
    );
};

export default ProductCard;