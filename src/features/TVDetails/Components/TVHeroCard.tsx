import { TVDetails } from "@/types";
import { Star } from "@phosphor-icons/react";

type Props = {
  data: TVDetails;
};

const TVHeroCard: React.FC<Props> = ({ data }) => {
  const {
    poster_path,
    overview,
    vote_average,
    vote_count,
    tagline,
    genres,
    status,
    backdrop_path,
    first_air_date,
    last_air_date,
    name,
    number_of_episodes,
    number_of_seasons,
  } = data;

  const groupGenres = genres?.map((ele) => ele.name).join(" , ");
  const releaseDate =
    first_air_date && last_air_date
      ? ` ${new Date(first_air_date).getFullYear()} - ${new Date(
          last_air_date
        ).getFullYear()}`
      : "";

  return (
    <div className="relative flex flex-col lg:flex-row items-center w-full shadow-lg rounded-lg overflow-hidden justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 transform scale-100 opacity-10 bg-center bg-cover"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full">
        {/* Main Image */}
        <div className="w-full lg:w-1/3 p-4">
          <img
            src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
            alt={name}
            className="object-cover w-full h-auto rounded-lg border"
          />
        </div>
        {/* Details */}
        <div className="flex flex-col justify-center w-full lg:max-w-screen-sm p-4 lg:p-6 gap-6">
          <div>
            <h4 className="text-2xl lg:text-4xl font-bold">{name}</h4>
            <div className="flex flex-wrap gap-2 text-sm lg:text-base">
              <p className="italic opacity-50">{releaseDate}</p>
              <p>.</p>
              <p className="italic opacity-50">{groupGenres}</p>
              <p>.</p>
              <p className="italic opacity-50 font-bold">
                {number_of_seasons} Seasons
              </p>
              <p>.</p>
              <p className="italic opacity-50 font-bold">
                {number_of_episodes} Episodes
              </p>
            </div>
          </div>
          <div>
            <p className="font-bold">Overview</p>
            <p className="italic opacity-50">{tagline}</p>
            <p className="mt-2">{overview}</p>
          </div>
          <div>
            <div className="flex items-center">
              <Star weight="fill" className="text-yellow-300" />
              <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                {vote_average}
              </p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <div className="text-sm lg:text-md font-medium text-gray-900 underline hover:no-underline dark:text-white">
                {vote_count} reviews
              </div>
            </div>
            <div className="flex italic opacity-50">
              <p>Status: </p>
              <p className="ml-1">{status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVHeroCard;
