import { useGetGenreTv, useGetLanguages } from "@/hooks";
import { useEffect, useState } from "react";
import { CollapsibleCard, DropDown, RelaseDate } from "@/components";
import { useAppDispatch } from "@/store";
import { setGenres, setLanguage } from "../slices/tvFilterSlice";
import {
  useTVMinUserVoteFilter,
  useTVReleaseDateFilter,
  useTVRuntimeFilter,
  useTVVoteAverageFilter,
} from "../hooks";
import MultiRange from "@/components/MultiRange";

type Props = {};

const FilterTVCard: React.FC<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  const { data: languages, isLoading: languageLoading } = useGetLanguages();
  const { data: genre } = useGetGenreTv();

  const { handleChangeMinUserVote, minUserVote } = useTVMinUserVoteFilter();
  const { endDate, handleChangeDate, startDate } = useTVReleaseDateFilter();
  const { maxRuntime, handleChangeRuntime, minRuntime } = useTVRuntimeFilter();
  const { handleChangeAverageVote, max, min } = useTVVoteAverageFilter();

  const handleSelectLanguage = (item: string) => {
    dispatch(setLanguage(item));
  };

  const toggleGenre = (id: number) => {
    setSelectedGenres((prev) =>
      prev.includes(id)
        ? prev.filter((genreId) => genreId !== id)
        : [...prev, id]
    );
  };

  useEffect(() => {
    dispatch(setGenres(selectedGenres));
  }, [selectedGenres]);

  return (
    <CollapsibleCard
      isOpen={isFilterOpen}
      setIsOpen={setIsFilterOpen}
      title="Filter"
    >
      <div className="max-h-80 sm:max-h-full overflow-y-scroll sm:overflow-y-hidden">
        <div className="p-2">
          <p className="text-sm my-2">Language</p>
          {!languageLoading && (
            <DropDown
              items={languages ? languages : []}
              onSelect={handleSelectLanguage}
              hideSearch={true}
            />
          )}
        </div>
        <div className="border-t mt-3"></div>

        <div className="p-2">
          <p className="text-sm my-2">Release Date</p>
          <RelaseDate
            endDate={{ endDate: endDate, startDate: endDate }}
            startDate={{ endDate: startDate, startDate: startDate }}
            handleValue={handleChangeDate}
          />
        </div>

        <div className="p-2">
          <p className="text-sm my-2">Genre</p>
          <div className="flex flex-wrap gap-2 px-2">
            {genre &&
              genre?.map((gen) => (
                <button
                  key={gen.id}
                  onClick={() => toggleGenre(gen.id)}
                  className={`px-2 py-1 border rounded-md text-xs ${
                    selectedGenres.includes(gen.id)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {gen.name}
                </button>
              ))}
          </div>
        </div>

        <div className="border-t my-4"></div>

        <div className="px-2">
          <p className="text-sm my-2">Vote Average</p>
          <div className="mb-6 mt-4">
            <MultiRange
              rangeValues={[min, max]}
              onChange={handleChangeAverageVote}
            />
          </div>
        </div>
        <div className="border-t mt-3"></div>
        <div className="px-2">
          <p className="text-sm my-2">Minimum User Votes </p>
          <div className="mb-6 mt-4">
            <MultiRange
              maxLabel={500}
              minLabel={0}
              step={50}
              rangeValues={[minUserVote]}
              onChange={handleChangeMinUserVote}
            />
          </div>
        </div>

        <div className="border-t mt-3"></div>
        <div className="px-2">
          <p className="text-sm my-2">Runtime</p>
          <div className="mb-6 mt-4">
            <MultiRange
              step={30}
              maxLabel={400}
              minLabel={0}
              rangeValues={[minRuntime, maxRuntime]}
              onChange={handleChangeRuntime}
            />
          </div>
        </div>

        <div className="border-t my-4"></div>
      </div>
    </CollapsibleCard>
  );
};

export default FilterTVCard;
