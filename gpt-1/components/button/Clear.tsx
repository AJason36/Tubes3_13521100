import React from "react"

const Clear = () => { 
    return (
        <div className="absolute top-[31.875rem] left-[1.125rem] w-[17.8rem] h-11">
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
