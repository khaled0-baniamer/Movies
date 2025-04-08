import { ImageSlider, Skeleton } from "@/components";
import { useGetPopularMovie } from "../hooks";
import { useNavigate } from "react-router-dom";

type Props = {};

const PopularMovies: React.FC<Props> = ({}) => {
  const { data, isLoading } = useGetPopularMovie();
  const navigate = useNavigate();

  const images = data?.results.map(
    (ele) => `https://image.tmdb.org/t/p/w500/${ele.poster_path}`
  );
  if (isLoading) return <Skeleton />;
  return (
    <div>
      <div className="flex justify-between my-4 text-lg font-semibold mx-4">
        <div>Movies</div>
        <div
          className="underline cursor-pointer"
          onClick={() => navigate("/search/movies")}
        >
          see all
        </div>
      </div>
      {images && <ImageSlider images={images} />}
    </div>
  );
};

export default PopularMovies;
