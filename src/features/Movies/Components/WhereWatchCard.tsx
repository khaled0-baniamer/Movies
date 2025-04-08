import { CollapsibleCard, DropDown } from "@/components";
import Providers from "./Providers";
import { useState } from "react";
import { useGetMovieProvider } from "../hooks";
import { useGetCountries } from "@/hooks";

type Props = {};

const WhereWatchCard: React.FC<Props> = ({}) => {
  const [isWhereOpen, setIsWhereOpen] = useState(false);
  const [region, setRegion] = useState<string>("JO");

  const { data: countries, isLoading: isCountryLoading } = useGetCountries();
  const { data: providers, isLoading } = useGetMovieProvider(region);
  const handleSelectProvider = (item: string) => {
    setRegion(item);
  };
  return (
    <CollapsibleCard
      isOpen={isWhereOpen}
      setIsOpen={setIsWhereOpen}
      title="Where to Watch"
    >
      <div className="p-2">
        {isCountryLoading ? (
          <div>loading...</div>
        ) : (
          <DropDown
            items={countries ? countries : []}
            onSelect={handleSelectProvider}
            defaultValue="Jordan"
          />
        )}
        {isLoading && <div className="flex justify-center ">loading...</div>}
        {!providers?.results?.length && !isLoading && (
          <div className="flex justify-center mt-4">There are no Providers</div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-2">
          {providers?.results?.slice(0, 24)?.map((prov) => (
            <Providers key={prov.provider_id} data={prov} />
          ))}
        </div>
      </div>
    </CollapsibleCard>
  );
};

export default WhereWatchCard;
