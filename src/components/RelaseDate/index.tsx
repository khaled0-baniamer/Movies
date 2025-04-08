import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

type Props = {
  startDate: DateValueType;
  endDate: DateValueType;
  handleValue: (name: "START" | "END", date: DateValueType) => void;
};

const RelaseDateFilter: React.FC<Props> = ({
  startDate,
  endDate,
  handleValue,
}) => {
  return (
    <div>
      <div className="my-2 border rounded-lg">
        <Datepicker
          placeholder="Date From"
          useRange={false}
          asSingle={true}
          value={startDate}
          onChange={(newValue) => handleValue("START", newValue)}
        />
      </div>

      <div className="my-2 border rounded-lg">
        <Datepicker
          placeholder="Date To"
          useRange={false}
          asSingle={true}
          value={endDate}
          onChange={(newValue) => handleValue("END", newValue)}
        />
      </div>
    </div>
  );
};

export default RelaseDateFilter;
