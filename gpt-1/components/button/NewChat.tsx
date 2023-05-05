import { createNewChat, updateChatBubbles } from "lib/pageHelper";
import React from "react";
import { ChatSession, ChatBubbleMessage } from "types";

const NewChat = (
  { 
    setSessions,
    setSessionId,
    setChatBubbles,
  }: { 
    setSessions: React.Dispatch<React.SetStateAction<ChatSession[]>>,
    setSessionId: React.Dispatch<React.SetStateAction<string | undefined>>,
    setChatBubbles: React.Dispatch<React.SetStateAction<ChatBubbleMessage[]>>,
  }
) => {
  const newChatButtonAction = async () => {
    const response = createNewChat(setSessions, setSessionId);
    updateChatBubbles(await response, setChatBubbles);
  };

  return (
    <div className="relative w-[100%] h-[2.8rem] shrink-0 items-center justify-center">
      <div className="absolute top-[0px] left-[0px] w-[100%] h-11 items-center justify-center">
        <button
          className="absolute top-[0px] left-[0px] rounded-[10px] w-[100%] h-11 hover:bg-[#329e5a] bg-[#45DF7D]"
          type="button"
          onClick={newChatButtonAction}
        >
          <div className="relative font-semibold inline-block h-[1rem]">
            + New Chat
          </div>
        </button>
      </div>
    </div>
  );
};

export default NewChat;
