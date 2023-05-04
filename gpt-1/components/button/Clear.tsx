import React from "react"

const Clear = () => { 
    return (
        <div className="absolute top-[510px] left-[18px] w-[285px] h-11">
            <button
                className="absolute top-[0px] left-[0px] rounded-[10px] w-[285px] h-11 hover:bg-[#8a1f1f] bg-[#E93131]"
                type="button"
            >
                <div className="absolute top-[13px] left-[114px] font-semibold">
                    Clear All
                </div>
            </button>
        </div>
    )
}

export default Clear;

// raw code
// <div className="absolute top-[619px] left-[18px] w-[285px] h-11">
//         <img
//           className="absolute top-[0px] left-[0px] rounded-[10px] w-[285px] h-11"
//           alt=""
//           src="/rectangle-7803.svg"
//         />
//         <div className="absolute top-[13px] left-[114px] font-semibold">
//           Clear All
//         </div>
//       </div>