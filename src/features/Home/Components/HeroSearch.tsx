import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const HeroSearch: React.FC<Props> = () => {
  const [selectedOption, setSelectedOption] = useState<"Movie" | "TV">("Movie");
  const navigate = useNavigate();
  const handleSearch = () => {
    let url = selectedOption == "TV" ? `/search/tv` : `/search/movies`;
    navigate(url);
  };

  return (
    <div
      className="py-52 px-1 md:px-8 text-center relative text-white font-bold text-2xl md:text-3xl overflow-auto 
    bg-gradient-to-b from-black/50 to-black/50 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/heroMovies.jpg')",
      }}
    >
      <div className="w-11/12 md:w-3/4 lg:max-w-3xl mx-auto">
        <div className="relative z-30 text-base text-black">
          {/* Search Section */}
          <div className="bg-transparent rounded-lg p-5 ">
            <div className="flex flex-col md:flex-row  items-center gap-4 my-3">
              {/* Toggle Buttons for Radio */}
              <div className="flex justify-between items-center gap-2 border rounded-lg p-2 bg-gray-200 w-full ">
                <div className=" gap-3 flex">
                  <button
                    onClick={() => setSelectedOption("Movie")}
                    className={`px-4 py-2 rounded-lg font-medium border border-gray-400 ${
                      selectedOption === "Movie"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    Movie
                  </button>
                  <button
                    onClick={() => setSelectedOption("TV")}
                    className={`px-4 py-2 rounded-lg font-medium border border-gray-400 ${
                      selectedOption === "TV"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    TV
                  </button>
                </div>

                <div className=" basis-3/4">
                  <button
                    onClick={handleSearch}
                    className="px-4 py-2 w-full bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none"
                  >
                    Search
                  </button>
                </div>
              </div>

              {/* Search Input with Button */}
            </div>
            {/* <div className="flex items-center w-full">
              <input
                type="text"
                placeholder={`Search for ${selectedOption}`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-4 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSearch}
                className="px-4 py-4 bg-black text-white rounded-r-lg hover:bg-blue-600 focus:outline-none"
              >
                Search
              </button>
            </div> */}
          </div>

          {/* Dropdown or Autocomplete suggestions */}
          <div className="absolute top-full left-0 mt-2 rounded-b-2xl shadow bg-white divide-y w-full max-h-40 overflow-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
