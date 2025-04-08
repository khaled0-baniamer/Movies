import { createArray } from "@/utils/functions";
import { useGetTVCredits } from "../hooks";
import { CastCard, Skeleton } from "@/components";
import Slider from "react-slick";
import { useIsMobile } from "@/hooks";

type Props = {
  id: number;
};

const Cast: React.FC<Props> = ({ id }) => {
  const { data, isLoading } = useGetTVCredits(id);
  const isMobile = useIsMobile();
  const dumpArray = createArray(10);
  const cast = data?.cast;
  console.log("🚀 ~ cast:", cast);

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
    <div className="slider-container">
      <Slider {...settings}>
        {cast?.map((item) => (
          <div key={item.id} className="p-2">
            <CastCard
              name={item.name}
              url={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                  : "https://fakeimg.pl/200x300"
              }
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cast;
