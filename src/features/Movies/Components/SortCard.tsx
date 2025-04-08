import { CollapsibleCard, DropDown } from "@/components";
import { sortoptions } from "@/utils/data";
import { useState } from "react";
import { useGetMoviesList } from "../hooks";
import { useAppDispatch } from "@/store";
import { setSort } from "../slice/movieFilterSlice";

type Props = {};

const SortCard: React.FC<Props> = ({}) => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sort] = useState<string>();
  const dispatch = useAppDispatch();
  useGetMoviesList({ sort_by: sort });

  const handleSelectSort = (item: string) => {
    dispatch(setSort(item));
  };

  return (
    <CollapsibleCard isOpen={isSortOpen} setIsOpen={setIsSortOpen} title="Sort">
      <div className="p-2">
        <p className="my-2 text-gray-300">Sort options go here.</p>
        <DropDown
          items={sortoptions}
          onSelect={handleSelectSort}
          hideSearch={true}
        />
      </div>
    </CollapsibleCard>
  );
};

export default SortCard;
