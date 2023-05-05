import React, { useState } from "react";

const Radio = ({ setMode }: { setMode: React.Dispatch<React.SetStateAction<string | undefined>> }) => {
    const [selectedOption, setSelectedOption] = useState<string>();

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
        setMode(selectedOption);
    };
  
    return (
      <div className="absolute top-[80%] left-[18px] w-[18%] h-[10%]">
        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-radio-1"
            type="radio"
            value="KMP"
            name="bordered-radio"
            className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            checked={selectedOption === "KMP"}
            onChange={handleRadioChange}
          />
          <label htmlFor="bordered-radio-1" className="w-full py-4 ml-2 text-sm font-medium text-white dark:text-gray-300">
            KMP
          </label>
        </div>
        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-radio-2"
            type="radio"
            value="BM"
            name="bordered-radio"
            className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-600 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            checked={selectedOption === "BM"}
            onChange={handleRadioChange}
          />
          <label htmlFor="bordered-radio-2" className="w-full py-4 ml-2 text-sm font-medium text-white dark:text-gray-300">
            BM
          </label>
        </div>
      </div>
    );
};
  
 
export default Radio;