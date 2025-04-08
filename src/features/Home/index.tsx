import {
  HeroSearch,
  PopularMovies,
  TopRatedMovies,
  UpcomingMovies,
} from "./Components";
import PopularTv from "./Components/PopularTv";
import TopRatedTv from "./Components/TopRatedTv";

type Props = {};

const HomeScreen: React.FC<Props> = () => {
  return (
    <div >
      <HeroSearch />
      <div className="text-4xl my-10">Top Rated</div>
      <TopRatedMovies />
      <TopRatedTv />
      <div className="text-4xl my-10">Popular</div>
      <PopularMovies />
      <PopularTv />
      <UpcomingMovies />
    </div>
  );
};

export default HomeScreen;
