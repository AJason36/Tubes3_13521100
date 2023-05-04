import React from "react";
import HistoryList from "./HistoryList";
import ChatHistory from "./button/ChatHistory";
import Clear from "./button/Clear";
import Radio from "./button/Radio";
const SideBar = () => {
    return (  
        <div className="p-2 flex flex-col w-[340px] h-screen bg-[#1E1E1E]">
            <div className="w-[132px] h-[33px] text-[22px] text-mediumseagreen">
                <img
                className="absolute top-[30px] left-[20px] w-[33px] h-[33px] object-cover"
                alt=""
                src="/assets/gpt-logo.svg"
                />
                <b className="absolute text-[#64BD64] top-[30px] left-[60px]">GPT-(-1)</b>
            </div>
            <Clear />
            <HistoryList />
            <Radio/>
        </div>
    );
}
 
export default SideBar;