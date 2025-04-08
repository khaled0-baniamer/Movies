import { useState } from "react";

type Props = {
  value?: string;
  handleClickSearch: (value: string) => void;
};

const SearchForm: React.FC<Props> = ({ value = "", handleClickSearch }) => {
  const [enteredValue, setEnteredValue] = useState(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };
  return (
    <div className=" mx-auto max-w-xl py-2 px-4 rounded-lg bg-gray-50 border flex focus-within:border-gray-300">
      <input
        type="text"
        placeholder="Keywords..."
        className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0 text-black"
        value={enteredValue}
        onChange={handleChange}
      />
      <button
        onClick={() => handleClickSearch(enteredValue)}
        className="flex flex-row items-center justify-center min-w-[70px] px-2 rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent  h-[34px] -mr-3"
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;
