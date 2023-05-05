import React, { useState } from "react";
import ChatHistory from "./button/ChatHistory";
import NewChat from "./button/NewChat";
import { ChatSession, ChatBubbleMessage } from "types";


const HistoryList = (
  {
    sessions, 
    setSessions,
    setSessionId,
    setChatBubbles,
  }: { 
    sessions: ChatSession[], 
    setSessions: React.Dispatch<React.SetStateAction<ChatSession[]>>,
    setSessionId: React.Dispatch<React.SetStateAction<string | undefined>>,
    setChatBubbles: React.Dispatch<React.SetStateAction<ChatBubbleMessage[]>>,
  }
) => {
  return (  
    <>
      <div className="relative top-[7%] left-[1rem] flex flex-col gap-[1.25rem] w-[90%] ">
      <NewChat setSessions={setSessions} setSessionId={setSessionId} setChatBubbles={setChatBubbles} />
      <div className="flex flex-col items-start justify-start gap-[10px] text-[1.5rem]">
        <div className="relative font-medium">Chat List</div>
        <div className="flex flex-col items-start w-[100%] max-h-[55%] justify-start gap-[2rem] text-[0.75rem] text-lightgray-200 overflow-y-auto space-y-1 scrollbar-hide">
          {sessions.map((session, index) => (
            <ChatHistory key={index} id={session.id} title={session.name} setSessions={setSessions} setSessionId={setSessionId} setChatBubbles={setChatBubbles} />
          ))}
        </div>
      </div>
      </div>
      </>
  );
};

export default HistoryList;