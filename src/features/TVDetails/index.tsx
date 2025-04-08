import { useParams } from "react-router-dom";
import { useGetTVDetails } from "./hooks";
import { Seasons, TVCast, TVHeroCard } from "./Components";
import { Skeleton } from "@/components";
import SimilarTV from "./Components/SimilarTV";
import { useEffect, useState } from "react";

type Props = {};

const TVDetails: React.FC<Props> = ({}) => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetTVDetails(Number(id));

  useEffect(() => {
    document.title = data?.original_name ?? "Loading...";
  }, [data]);
  const seasons = data?.seasons;

  const [showAllSeasons, setShowAllSeasons] = useState(false);

  if (isLoading) {
    return <Skeleton />;
  }

  const handleToggleSeasons = () => {
    setShowAllSeasons((prev) => !prev);
  };

  // Determine which seasons to show
  const visibleSeasons = showAllSeasons ? seasons : seasons?.slice(0, 8);

  return (
    <div>
      {data && <TVHeroCard data={data} />}
      <div className="md:mt-20">
        <p className="text-2xl font-bold">Cast</p>
        {<TVCast id={Number(id)} />}
      </div>

      <div className="border px-4 py-6 rounded-lg my-4">
        <p className="text-2xl font-bold mb-10">Seasons</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleSeasons?.map((season) => (
            <div key={season.id}>
              <Seasons data={season} TVName={data?.name} />
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {seasons && seasons.length > 8 && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleToggleSeasons}
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
              {showAllSeasons ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>

      <div>
        <SimilarTV id={Number(id)} />
      </div>
    </div>
  );
};

export default TVDetails;
