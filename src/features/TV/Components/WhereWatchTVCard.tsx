import { useGetCountries } from "@/hooks";
import { useState } from "react";
import { useGetTvProvider } from "../hooks";
import { CollapsibleCard, DropDown } from "@/components";
import { Providers } from "@/features/Movies/Components";

type Props = {};

const WhereWatchTVCard: React.FC<Props> = ({}) => {
  const [isWhereOpen, setIsWhereOpen] = useState(false);
  const [region, setRegion] = useState<string>("JO");

  const { data: countries } = useGetCountries();
  const { data: providers, isLoading } = useGetTvProvider(region);
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
        <DropDown
          items={countries ? countries : []}
          onSelect={handleSelectProvider}
          defaultValue="Jordan"
        />
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

export default WhereWatchTVCard;
