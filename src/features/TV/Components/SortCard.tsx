import { CollapsibleCard, DropDown } from "@/components";
import { useState } from "react";
import { sortoptions } from "@/utils/data";
import { useAppDispatch } from "@/store";
import { setSort } from "../slices/tvFilterSlice";

type Props = {};

const SortCard: React.FC<Props> = ({}) => {
  const dispatch = useAppDispatch()
  const [isSortOpen, setIsSortOpen] = useState(false);

  const handleSelectSort = (item: string) => {
    dispatch(setSort(item))
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
