import React from "react";
import { ChatSession } from "types";

const NewChat = ({ setSessions }: { setSessions: React.Dispatch<React.SetStateAction<ChatSession[]>> }) => {
  const newChatButtonAction = async () => {
    var response = await fetch("/api/session", {
      method: "GET",
    });

    const data: ChatSession[] = await response.json();
    var newChatNumber : number;

    if (data.length === 0) {
      newChatNumber = 1;
    } else {
      newChatNumber = parseInt(data[data.length - 1].name.split(" ")[1]) + 1;
    }

    await fetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({ num: newChatNumber }),
    })

    response = await fetch("/api/session", {
      method: "GET",
    });

    const newSessions: ChatSession[] = await response.json();
    setSessions(newSessions);
  };

  return (
    <div className="relative w-[17.8rem] h-[2.8rem] shrink-0">
      <div className="absolute top-[0px] left-[0px] w-[17.8rem] h-[45.14px]">
        <button
          className="absolute top-[0px] left-[0px] rounded-[10px] w-[17.813rem] h-11 hover:bg-[#329e5a] bg-[#45DF7D]"
          type="button"
          onClick={newChatButtonAction}
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
