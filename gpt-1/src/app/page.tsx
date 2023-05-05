"use client";
import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import type { NextPage } from "next";
import MainPage from '../../components/MainPage';
import SideBar from '../../components/SideBar';
import React, {useState} from 'react';
import { ChatSession, ChatBubbleMessage } from 'types';


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
