import FilterTVCard from "./FilterTVCard";
import SortCard from "./SortCard";
import WhereWatchTVCard from "./WhereWatchTVCard";

type Props = {};

const TVSearchBar: React.FC<Props> = ({}) => {
  return (
    <div>
      <SortCard />
      <WhereWatchTVCard />

      <FilterTVCard />
    </div>
  );
};

export default TVSearchBar;
