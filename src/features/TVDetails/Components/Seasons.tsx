import { Season } from "@/types";
import { Star } from "@phosphor-icons/react";

type Props = {
  data: Season;
  TVName:string|undefined;
};

const Seasons: React.FC<Props> = ({ data ,TVName}) => {
  const { name,  vote_average, poster_path, air_date, episode_count } =
    data;

  return (
    <div className="w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      {/* Image Section */}
      <img
        className="rounded-t-lg w-full h-[280px] object-cover"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={name}
      />

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
         {TVName} - {name}
        </h6>

        {/* Rating and Reviews */}
        <div className="flex items-center my-4">
          <Star weight="fill" className="text-yellow-300" />
          <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
            {vote_average}
          </p>
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
              {new Date(air_date).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Episode Count
            </p>
            <p className="text-sm text-gray-900 dark:text-white">
              {episode_count}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seasons;
