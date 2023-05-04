import React from "react";
import ChatHistory from "./button/ChatHistory";
import NewChat from "./button/NewChat";

const historyData = [
  {
    title: "Chat 1",
    date: "10/12/2021",
  }, {
    title: "Chat 2",
    date: "11/12/2021",
  }, {
    title: "Chat 3",
    date: "12/12/2021",
  }, {
    title: "Chat 4",
    date: "13/12/2021",
  }, {
    title: "Chat 5",
    date: "14/12/2021",
  },{
    title: "Chat 1",
    date: "10/12/2021",
  }, {
    title: "Chat 2",
    date: "11/12/2021",
  }, {
    title: "Chat 3",
    date: "12/12/2021",
  }, {
    title: "Chat 4",
    date: "13/12/2021",
  }, {
    title: "Chat 5",
    date: "14/12/2021",
  }
]

const HistoryList = () => {
    return (  
        <div className="absolute top-[5rem] left-[1rem] flex flex-col items-start justify-start gap-[1.25rem] ">
        <NewChat/>
        <div className="flex flex-col items-start justify-start gap-[10px] text-[1.5rem]">
          <div className="relative font-medium">Chat List</div>
          <div className="flex flex-col items-start max-h-[20rem] justify-start gap-[2rem] text-[0.75rem] text-lightgray-200 overflow-y-auto space-y-1 scrollbar-hide">
            {historyData.map((chat, id) => (
              <ChatHistory key={id} title={chat.title} date={chat.date} />
            ))}
          </div>
        </div>
      </div>
    );
}
 
export default HistoryList;