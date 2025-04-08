import * as React from "react";
import { Range } from "react-range";

type Props = {
  rangeValues: number[];
  maxLabel?: number;
  minLabel?: number;
  onChange: (values: number[]) => void;
  step?: number;
};

const MultiRange: React.FC<Props> = ({
  rangeValues,
  onChange,
  step = 0.1,
  maxLabel = 10,
  minLabel = 0,
}) => {
  const [values, setValues] = React.useState(rangeValues);
  const handleFinalChange = (data: number[]) => {
    onChange(data);
  };
  return (
    <div className="px-2">
      <Range
        onFinalChange={handleFinalChange}
        label="Select your value"
        step={step}
        min={minLabel}
        max={maxLabel}
        values={values}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div {...props} className="h-1 w-full bg-gray-300">
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            key={props.key}
            className="h-5 w-5 bg-gray-400 rounded-full text-black"
          />
        )}
      />
      <output id="output" className="flex my-6 justify-between ">
        <p>{values[0]?.toFixed(1)}</p>
        {values[1] && <p>{values[1]?.toFixed(1)}</p>}
      </output>
    </div>
  );
};

export default MultiRange;
