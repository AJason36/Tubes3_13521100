import React from "react";

const NewChat = () => {
  return (
    <div className="relative w-[17.8rem] h-[2.8rem] shrink-0">
      <div className="absolute top-[0px] left-[0px] w-[17.8rem] h-[45.14px]">
        <button
          className="absolute top-[0px] left-[0px] rounded-[10px] w-[17.813rem] h-11 hover:bg-[#329e5a] bg-[#45DF7D]"
          type="button"
        >
          <div className="absolute top-[0.625rem] left-[6.25rem] font-semibold inline-block h-[1rem]">
            + New Chat
          </div>
        </button>
      </div>
    </div>
  );
};

export default NewChat;
