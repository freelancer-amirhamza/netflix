import React from "react";
import { AiFillStar } from "react-icons/ai";





function MovieCard({ medium_cover_image, title_long, year, rating}) {
  return (
    <div className=" md:w-44 w-48  lg:w-44  mr-4 mb-5 cursor-pointer hover:-translate-y-2 transition-all duration-100 mt-5 bg-slate-700 p-3 rounded-md">
      <img
        className="rounded-lg"
        src={medium_cover_image}
        loading="lazy"
        alt=""
      />
      <div className="mt-2">
        <h1 className="text-gray-100 text-md truncate font-medium" title={title_long}> {title_long} </h1>
      </div>
      <div className="flex items-center space-x-2">
      <div className="flex items-center border w-fit
         border-orange-400 text-orange-400 text-xs space-x-1 p-[3px]
      mt-1 rounded-sm ">
        <AiFillStar size={15} />
        <span> {rating} </span>
      </div>
      <span className="text-xs text-gray-500">
        {year}
      </span>
      </div>
    </div>
  );
}

export default MovieCard;
