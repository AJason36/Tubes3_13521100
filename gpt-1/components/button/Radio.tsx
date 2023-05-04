import React from "react";

const Radio = () => {
    return (  
        <div className="absolute top-[580px] left-[18px] w-[280px] h-[113.69px]">
        {/* <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start gap-[30.9px]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[40.2px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[107.22px] h-[21.21px] shrink-0">
                  <div className="absolute top-[0px] left-[36.5px] text-[15.63px] font-semibold font-inter text-whitesmoke-200 text-left inline-block w-[70.72px] h-[18.58px]">
                    KMP
                  </div>
                  <div className="absolute top-[0px] left-[0px] rounded-[8.84px] w-[21.21px] h-[21.21px]">
                    <div className="absolute top-[1.77px] left-[1.77px] rounded-[8.84px] box-border w-[17.68px] h-[17.68px] overflow-hidden border-[1.8px] border-solid border-system-grey-sg-l-1">
                      <div className="absolute top-[calc(50%_-_4.42px)] left-[calc(50%_-_4.42px)] rounded-[4.42px] bg-system-grey-sg-l-1 w-[8.84px] h-[8.84px]" />
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[104.61px] h-[21.38px] shrink-0">
                  <div className="absolute top-[2.8px] left-[38.45px] text-[15.63px] font-semibold font-inter text-whitesmoke-200 text-left inline-block w-[66.15px] h-[18.58px]">
                    BM
                  </div>
                  <div className="absolute h-[99.23%] w-[20.28%] top-[0%] right-[79.72%] bottom-[0.77%] left-[0%] rounded-[8.84px] flex flex-row items-center justify-center">
                    <div className="relative rounded-[8.84px] box-border w-[17.68px] h-[17.68px] shrink-0 overflow-hidden border-[1.8px] border-solid border-system-grey-sg-l-1" />
                  </div>
                </button>
              </div>
            </div>
            <div className="relative box-border w-[230.8px] h-[0.97px] shrink-0 border-t-[1px] border-solid border-darkslategray-100" />
          </div>
        </div> */}
            <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="bordered-radio"
                    className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label
                    htmlFor="bordered-radio-1"
                    className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    KMP
                </label>
            </div>
            <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <input
                    checked id="bordered-radio-2"
                    type="radio"
                    value=""
                    name="bordered-radio"
                    className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-600 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label
                    htmlFor="bordered-radio-2"
                    className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    BM</label>
            </div>
      </div>
    );
}
 
export default Radio;