type Props = {
  url: string;
  name: string;
};

const CastCard: React.FC<Props> = ({ name, url }) => {
  return (
    <div className="w-full  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col cursor-pointer">
      {/* Image Section */}
      <img className="rounded-t-lg  object-cover" src={url} alt={name} />

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default CastCard;
