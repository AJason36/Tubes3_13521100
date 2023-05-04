"use client";
import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import type { NextPage } from "next";
import Clear from '../../components/button/Clear';
import Radio from '../../components/button/Radio';
import MainPage from '../../components/MainPage';
import HistoryList from '../../components/HistoryList';
import SideBar from '../../components/SideBar';
import React,{useState} from 'react';

const ChatGPT: NextPage = () => {
  return (
    <>
      <div className="relative bg-[#1A1B24] w-full h-screen overflow-hidden text-left text-sm text-white font-inter">
      <SideBar/>
      <MainPage />
      </div>
    </>
  );
};

export default ChatGPT;
