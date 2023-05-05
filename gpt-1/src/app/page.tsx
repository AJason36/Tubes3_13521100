"use client";
import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import type { NextPage } from "next";
import MainPage from '../../components/MainPage';
import SideBar from '../../components/SideBar';
import React, {useState} from 'react';
import { ChatSession, ChatBubbleMessage } from 'types';


export const createNewChat = async (
  setSessions: React.Dispatch<React.SetStateAction<ChatSession[]>>,
  setSessionId: React.Dispatch<React.SetStateAction<string | undefined>>
) => {
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
  console.log(newSessions);
  setSessions(newSessions);
  setSessionId(newSessions[newSessions.length - 1].id);

  return newSessions[newSessions.length - 1].id;
};

export const updateChatBubbles = async (
  sessionId: string | undefined,
  setChatBubbles: React.Dispatch<React.SetStateAction<ChatBubbleMessage[]>>
) => {
  if (sessionId === undefined) {
    setChatBubbles([]);
    return;
  }

  const response = await fetch(`/api/session/${encodeURIComponent(sessionId)}`, {
    method: "GET",
  });
  const data = await response.json();
  const newChatBubbles: ChatBubbleMessage[] = [];

  let lastId = 0;
  for (let i = 0; i < data.length; i++) {
    newChatBubbles.push({
      id: lastId + 1,
      name: "User",
      message: data[i].input,
    }, {
      id: lastId + 2,
      name: "GPT-(-1)",
      message: data[i].response,
    });
    lastId += 2;
  }

  setChatBubbles(newChatBubbles);
}

const ChatGPT: NextPage = () => {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [sessionId, setSessionId] = useState<string>();
  const [chatBubbles, setChatBubbles] = useState<ChatBubbleMessage[]>([]);
  const [mode, setMode] = useState<string>();

  return (
    <>
      <div className="relative bg-[#1A1B24] w-full h-screen overflow-hidden text-left text-sm text-white font-inter">
      <SideBar setMode={setMode} sessions={sessions} setSessions={setSessions} setSessionId={setSessionId} setChatBubbles={setChatBubbles} />
      <MainPage setSessions={setSessions} sessionId={sessionId} setSessionId={setSessionId} chatBubbles={chatBubbles} setChatBubbles={setChatBubbles} mode={mode} />
      </div>
    </>
  );
};

export default ChatGPT;
