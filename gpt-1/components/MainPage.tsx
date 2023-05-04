import React from "react";
import Image from "next/image";
import Send from "./button/Send";
import ChatBubble from "./ChatBubble";
import TextInput from "./TextInput";
const chatData = [
  {
    id: 1,
    name: "GPT-1",
    message: "Hello, I'm GPT-1. How can I help you?Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam dolor, condimentum vel facilisis vitae, euismod pharetra libero. Curabitur sit amet cursus eros. Mauris egestas, elit semper rutrum congue, leo orci condimentum odio, eget vehicula velit felis sit amet mi. Vestibulum vestibulum nisl in tortor viverra varius. Vivamus eget enim eleifend, congue diam eget, tincidunt nisi. Duis rutrum quis mauris et fermentum. Nullam vehicula ante arcu, quis egestas magna euismod sed. Mauris augue diam, consequat eu ipsum in, pretium sollicitudin velit. Morbi fermentum a justo sit amet placerat. In ultrices mauris non metus iaculis, eget elementum justo posuere. Quisque non semper ante. Nulla eget vulputate orci, vitae ultrices nulla. Nullam ullamcorper dolor vel orci pretium malesuada.",
  
  },
  {
    id: 2,
    name: "User",
    message: "I want to know about GPT-1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam dolor, condimentum vel facilisis vitae, euismod pharetra libero. Curabitur sit amet cursus eros. Mauris egestas, elit semper rutrum congue, leo orci condimentum odio, eget vehicula velit felis sit amet mi. Vestibulum vestibulum nisl in tortor viverra varius. Vivamus eget enim eleifend, congue diam eget, tincidunt nisi. Duis rutrum quis mauris et fermentum. Nullam vehicula ante arcu, quis egestas magna euismod sed. Mauris augue diam, consequat eu ipsum in, pretium sollicitudin velit. Morbi fermentum a justo sit amet placerat. In ultrices mauris non metus iaculis, eget elementum justo posuere. Quisque non semper ante. Nulla eget vulputate orci, vitae ultrices nulla. Nullam ullamcorper dolor vel orci pretium malesuada.",
  },
  {
    id: 3,
    name: "GPT-1",
    message: "GPT-1 is a chatbot that can help you to answer your question",
  }, {
    id: 4,
    name: "User",
    message: "How can I use GPT-1?Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam dolor, condimentum vel facilisis vitae, euismod pharetra libero. Curabitur sit amet cursus eros. Mauris egestas, elit semper rutrum congue, leo orci condimentum odio, eget vehicula velit felis sit amet mi. Vestibulum vestibulum nisl in tortor viverra varius. Vivamus eget enim eleifend, congue diam eget, tincidunt nisi. Duis rutrum quis mauris et fermentum. Nullam vehicula ante arcu, quis egestas magna euismod sed. Mauris augue diam, consequat eu ipsum in, pretium sollicitudin velit. Morbi fermentum a justo sit amet placerat. In ultrices mauris non metus iaculis, eget elementum justo posuere. Quisque non semper ante. Nulla eget vulputate orci, vitae ultrices nulla. Nullam ullamcorper dolor vel orci pretium malesuada.",
  }
];
const MainPage = () => {
  return (
    <div className="absolute items-center justify-center bg-[#1C1E32] top-[0%] left-[20rem] rounded-[25px] w-[80rem] h-screen">
      {/* {chatData.empty ? && (
        <div className="absolute top-[10%] left-[330px] text-[48px] text-right">
        Welcome to GPT-(-1)!
      </div>
      )} */}
      
      {/* Chat Area */}
      <div className="absolute top-[0px] left-[0px] max-h-[85%] w-full overflow-y-auto space-y-1">
        {chatData.map((chat, id) => (
          <ChatBubble key={id} name={chat.name} text={chat.message} />
        ))}
      </div>
      <div className="absolute top-[38rem] left-[0px] w-[80rem] h-[7rem]">
        <div className="absolute box-border w-[80rem] h-[1px] shrink-0 border-t-[1px] border-solid border-darkslategray-100" />
      </div>
      {/* TEXT BOX */}
      <TextInput/>
    </div>
  );
};

export default MainPage;
