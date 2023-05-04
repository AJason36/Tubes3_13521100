import React, { useState } from "react";
import ChatHistory from "./button/ChatHistory";
import NewChat from "./button/NewChat";
import { ChatSession } from "types";

const HistoryList = ({sessions, setSessions}: { sessions: ChatSession[], setSessions: React.Dispatch<React.SetStateAction<ChatSession[]>> }) => {
  return (  
      <div className="absolute top-[5rem] left-[1rem] flex flex-col items-start justify-start gap-[1.25rem] ">
      <NewChat setSessions={setSessions} />
      <div className="flex flex-col items-start justify-start gap-[10px] text-[1.5rem]">
        <div className="relative font-medium">Chat List</div>
        <div className="flex flex-col items-start max-h-[20rem] justify-start gap-[2rem] text-[0.75rem] text-lightgray-200 overflow-y-auto space-y-1 scrollbar-hide">
          {sessions.map((session) => (
            <ChatHistory key={session.id} id={session.id} title={session.name} setSessions={setSessions} />
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default HistoryList;