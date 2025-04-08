import { CaretDown, CaretUp } from "@phosphor-icons/react";
import React, { useState, useEffect, useRef } from "react";

interface DropdownProps {
  items: any[]; // Array of items to display in the dropdown
  onSelect: (item: string) => void; // Callback when an item is selected
  placeholder?: string; // Placeholder for the search input
  className?: string; // Additional Tailwind classes for styling
  defaultValue?: string; // Default selected value
  hideSearch?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  onSelect,
  placeholder = "Search...",
  className = "",
  defaultValue = "",
  hideSearch,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const [selectedItem, setSelectedItem] = useState(defaultValue);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedItem(defaultValue);
  }, [defaultValue]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredItems(
      items.filter((item) =>
        item.english_name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSelect = (item: any) => {
    setSelectedItem(item.english_name);
    onSelect(item.iso_3166_1 ?? item.iso_639_1);
    setSearchTerm("");
    setFilteredItems(items);
    setIsOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={`relative w-full ${className}`}>
      {/* Dropdown Toggle */}
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full px-4 py-2 border text-sm rounded-lg shadow-sm text-left focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {selectedItem || "Select an item"}
        {isOpen ? <CaretUp /> : <CaretDown />}
      </button>

      {/* Dropdown Items */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-gray-800 border rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {/* Search Field */}
          {!hideSearch && (
            <div className="p-2 py-4 border-b">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder={placeholder}
                className="w-full px-3 py-2 border rounded focus:outline-none text-black focus:ring-2 focus:ring-blue-400"
              />
            </div>
          )}

          {/* List Items */}
          <ul>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(item)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-900"
                >
                  {item.english_name}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
