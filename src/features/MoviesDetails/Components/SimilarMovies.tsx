import { createArray } from "@/utils/functions";
import { useGetMovieSimilar } from "../hooks";
import Slider from "react-slick";
import { Skeleton } from "@/components";
import { MovieCard } from "@/features/Movies/Components";
import { useIsMobile } from "@/hooks";

type Props = {
  id: number;
};

const SimilarMovies: React.FC<Props> = ({ id }) => {
  const { data, isLoading } = useGetMovieSimilar(id);
  const isMobile = useIsMobile();
  const dumpArray = createArray(10);
  const similar = data?.results;

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: isMobile ? 1 : 6,
    speed: 500,
  };

  if (isLoading) {
    return (
      <div className="overflow-scroll">
        {dumpArray.map((ele) => (
          <div key={ele}>
            <Skeleton />
          </div>
        ))}
      </div>
    );
  }

  return (
    similar?.length != 0 && (
      <div className="slider-container my-6">
        <p>Similar</p>
        <Slider {...settings}>
          {similar?.map((item) => (
            <div key={item.id} className="p-2">
              <MovieCard data={item} />
            </div>
          ))}
        </Slider>
      </div>
    )
  );
};

export default SimilarMovies;
