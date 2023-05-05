/* eslint-disable @next/next/no-img-element */
import { updateChatBubbles } from "app/page";
import React from "react";

const ChatHistory = (Content: any) => {
  const deleteChatButtonAction = async () => {    
    var response = await fetch(`/api/session/${encodeURIComponent(Content.id)}`, {
      method: 'DELETE',
    });

    response = await fetch("/api/session", {
      method: "GET",
    });

    Content.setSessions(await response.json());
    Content.setSessionId(undefined);
    updateChatBubbles(undefined, Content.setChatBubbles);
  };

  const openChatButtonAction = async () => {
    Content.setSessionId(Content.id);
    updateChatBubbles(Content.id, Content.setChatBubbles);
  };

  return (
    <div className="relative w-[90%] h-[1.875rem] shrink-0">
      <button
        className="absolute top-[0%] left-[2.2rem] text-base text-lightgray-100"
        onClick={openChatButtonAction}
      >
        {Content.title}
      </button>
      <div className="absolute top-[2rem] left-[2.2rem] font-light">
        {Content.date}
      </div>
      {/* delete button */}
      <button
        className="absolute h-[50%] w-[8%] top-[8%] right-[0%] bottom-[55.82%] left-[94.79%]"
        onClick={deleteChatButtonAction}
      >
        <img
          className="max-w-full overflow-hidden max-h-full"
          alt=""
          src="/assets/delete-icon.svg"
        />
      </button>
      <img
        className="absolute h-[50%] w-[8%] top-[10%] right-[93.63%] bottom-[51.4%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/assets/chat.svg"
      />
    </div>
  );
};

export default ChatHistory;
