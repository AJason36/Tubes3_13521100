import React from "react";

const ChatHistory = (Content :any) => {
    return (  
        <div className="relative w-[280px] h-[30px] shrink-0">
              <button className="absolute top-[0%] left-[35.24px] text-base text-lightgray-100">
                {Content.title}
              </button>
              <div className="absolute top-[30.42px] left-[35.24px] font-light">
                {Content.date}
              </div>
              <img
                className="absolute h-[50%] w-[8%] top-[8%] right-[0%] bottom-[55.82%] left-[94.79%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/assets/delete-icon.svg"
              />
              <img
                className="absolute h-[50%] w-[8%] top-[10%] right-[93.63%] bottom-[51.4%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/assets/chat.svg"
              />
        </div>
    );
}
 
export default ChatHistory;