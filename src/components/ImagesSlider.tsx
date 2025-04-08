import { useIsMobile } from "@/hooks";
import Slider from "react-slick";

type Props = {
  images: string[];
};

const ImageSlider: React.FC<Props> = ({ images }) => {
  const isMobile = useIsMobile();
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: isMobile ? 1 : 5,
    speed: 500,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img) => (
          <div className="p-1 rounded-lg">
            <img src={img} className="rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
