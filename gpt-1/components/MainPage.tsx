import React from "react";
import ChatBubble from "./ChatBubble";
import TextInput from "./TextInput";
import { ChatBubbleMessage } from "types";


const MainPage = (
  { chatBubbles, setChatBubbles }: { chatBubbles: ChatBubbleMessage[]; setChatBubbles: React.Dispatch<React.SetStateAction<ChatBubbleMessage[]>>}
) => {
  return (
    <div className="absolute items-center justify-center bg-[#1C1E32] top-[0%] left-[20%] rounded-[25px] w-[80%] h-screen">
      {chatBubbles.length === 0 ? (
        <div className="relative top-[10%] text-[300%] text-center">
          Welcome to GPT-(-1)!
        </div>
      ) : (
        <div>
          <div className="absolute top-[0px] left-[0px] max-h-[85%] w-full overflow-y-auto space-y-1 scrollbar-hide">
            {chatBubbles.map((chat, index) => (
              <ChatBubble key={index} name={chat.name} text={chat.message} />
            ))}
          </div>
          <div className="absolute top-[85%] left-[0px] w-[100%] h-[7rem]">
            <div className="absolute box-border w-[100%] h-[1px] shrink-0 border-t-[1px] border-solid border-darkslategray-100" />
          </div>
        </div>
      )}
      {/* TEXT BOX */}
      <TextInput setChatBubbles={setChatBubbles} />
    </div>
  );
};

export default MainPage;
