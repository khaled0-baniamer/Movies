import { TV } from "@/types";
import { Star } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

type Props = {
  data: TV;
};

const TVCard: React.FC<Props> = ({ data }) => {
  const {
    name,
    backdrop_path,
    vote_average,
    vote_count,
    first_air_date,
    original_language,
    id
  } = data;
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate(`/tv/${id}`)
  }
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col cursor-pointer" onClick={handleClick}>
      {/* Image Section */}
        <img
          className="rounded-t-lg w-full h-[280px] object-cover"
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
          alt={name}
        />

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
          <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
            {name}
          </h6>

        {/* Rating and Reviews */}
        <div className="flex items-center my-4">
          <Star weight="fill" className="text-yellow-300" />
          <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
            {vote_average}
          </p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <div
            className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
          >
            {vote_count} reviews
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] opacity-50 bg-gray-300 dark:bg-gray-700"></div>

        {/* Details Section */}
        <div className="flex flex-col gap-3 mt-4 flex-grow">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Release Date
            </p>
            <p className="text-sm text-gray-900 dark:text-white">
              {new Date(first_air_date).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-300">Language</p>
            <p className="text-sm text-gray-900 dark:text-white">
              {original_language}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVCard;
