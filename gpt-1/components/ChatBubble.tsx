/* eslint-disable @next/next/no-img-element */
import React from "react";

const ChatBubble = (message: any) => {
    const isChatGPT = message.name == "GPT-1";
    
    var avatar;
    if (isChatGPT) {
        avatar = "/assets/gpt-logo.svg";
    } else {
        avatar = "/assets/user-circle.svg";
    }
    
    return (  
        <div className={`py-5 text-white ${!isChatGPT && "bg-[#24284F]"}`}>
            <div className="flex space-x-3 px-1 max-w-[80%] mx-auto">
                <img src={avatar}
                    alt="" className="h-8 w-8 rounded-sm" />
                <p className="pt-1 text-md font-medium">{message.text}</p>
            </div>
        </div>
    );
}
 
export default ChatBubble;