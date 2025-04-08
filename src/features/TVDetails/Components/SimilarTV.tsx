import { createArray } from "@/utils/functions";
import { useGetTVSimilar } from "../hooks";
import { Skeleton } from "@/components";
import Slider from "react-slick";
import { TVCard } from "@/features/TV/Components";
import { useIsMobile } from "@/hooks";

type Props = {
  id: number;
};

const SimilarTV: React.FC<Props> = ({ id }) => {
  const { data, isLoading } = useGetTVSimilar(id);
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
              <TVCard data={item} />
            </div>
          ))}
        </Slider>
      </div>
    )
  );
};

export default SimilarTV;
