import { ImageSlider, Skeleton } from "@/components";
import { useGetTopRatedTv } from "../hooks";
import { useNavigate } from "react-router-dom";

type Props = {};

const TopRatedTv: React.FC<Props> = ({}) => {
  const { data, isLoading } = useGetTopRatedTv();
  const navigate = useNavigate();
  const images = data?.results.map(
    (ele) => `https://image.tmdb.org/t/p/w500/${ele.poster_path}`
  );

  if (isLoading) return <Skeleton />;

  return (
    <div>
      <div className="flex justify-between my-4 text-lg font-semibold mx-4">
        <div>TV</div>
        <div
          className="underline cursor-pointer"
          onClick={() => navigate("/search/tv")}
        >
          see all
        </div>
      </div>
      {images && <ImageSlider images={images} />}
    </div>
  );
};

export default TopRatedTv;
