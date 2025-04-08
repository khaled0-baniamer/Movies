import { CaretDown, CaretRight } from "@phosphor-icons/react";
import React, { Dispatch } from "react";

type CollapsibleCardProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

const CollapsibleCard: React.FC<CollapsibleCardProps> = ({
  title,
  children,
  isOpen,
  setIsOpen,
}) => {
  return (
    <div className="mb-4 shadow bg-gray-800 rounded-lg">
      <div
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-900 hover:rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        <span className="text-white">
          {isOpen ? <CaretDown /> : <CaretRight />}
        </span>
      </div>
      {isOpen && (
        <div>
          <div className="border-t"></div>
          <div >{children}</div>
        </div>
      )}
    </div>
  );
};

export default CollapsibleCard;
