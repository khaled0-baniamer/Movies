import { ProviderResult } from "@/types";

type Props = {
  data: ProviderResult;
};

const Providers: React.FC<Props> = ({ data }) => {
  const { logo_path } = data;
  return (
      <img
        className="p-1 rounded-lg"
        src={`https://image.tmdb.org/t/p/w300/${logo_path}`}
        alt=""
      />
  );
};

export default Providers;
