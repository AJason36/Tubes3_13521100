"use client";
import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import type { NextPage } from "next";
import MainPage from '../../components/MainPage';
import SideBar from '../../components/SideBar';
import React, {useState} from 'react';
import { ChatBubbleMessage } from 'types';


const ChatGPT: NextPage = () => {
  const [chatBubbles, setChatBubbles] = useState<ChatBubbleMessage[]>([]);
  const [mode, setMode] = useState<string>();

  return (
    <>
      <div className="relative bg-[#1A1B24] w-full h-screen overflow-hidden text-left text-sm text-white font-inter">
      <SideBar setMode={setMode} />
      <MainPage chatBubbles={chatBubbles} setChatBubbles={setChatBubbles} mode={mode} />
      </div>
    </>
  );
};

export default ChatGPT;
