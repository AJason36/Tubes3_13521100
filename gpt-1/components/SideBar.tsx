import React from "react";
import HistoryList from "./HistoryList";
import ChatHistory from "./button/ChatHistory";
import Clear from "./button/Clear";
import Radio from "./button/Radio";
const SideBar = () => {
    return (  
        <div className="p-2 flex flex-col w-[340px] h-screen bg-[#1E1E1E]">
            <div className="w-[8.25rem] h-[2rem] text-[1.4rem] text-mediumseagreen">
                <img
                className="absolute top-[1.875rem] left-[1.25] w-[2rem] h-[2rem] object-cover"
                alt=""
                src="/assets/gpt-logo.svg"
                />
                <b className="absolute text-[#64BD64] top-[1.875rem] left-[3.75rem]">GPT-(-1)</b>
            </div>
            <Clear />
            <HistoryList />
            <Radio/>
        </div>
    );
}
 
export default SideBar;