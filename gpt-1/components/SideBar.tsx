/* eslint-disable @next/next/no-img-element */

import React, { useLayoutEffect, useState } from "react";
import Clear from "./button/Clear";
import HistoryList from "./HistoryList";
import Radio from "./button/Radio";
import { ChatBubbleMessage, ChatSession } from "types";

const SideBar = (
    {
        setMode,
        sessions,
        setSessions,
        setSessionId,
        setChatBubbles,
    } : { 
        setMode: React.Dispatch<React.SetStateAction<string | undefined>>,
        sessions: ChatSession[],
        setSessions: React.Dispatch<React.SetStateAction<ChatSession[]>>,
        setSessionId: React.Dispatch<React.SetStateAction<string | undefined>>,
        setChatBubbles: React.Dispatch<React.SetStateAction<ChatBubbleMessage[]>>,
    }
) => {
    useLayoutEffect(() => {
        const initSessions = async () => {
            const response = await fetch("/api/session", {
                method: "GET",
            });

            setSessions(await response.json());
        };

        initSessions();
    }, [setSessions]);

    return (  
        <div className="p-2 flex flex-col w-[20%] h-screen bg-[#1E1E1E]">
            <div className="w-[10%] h-[2rem] text-[100%] text-mediumseagreen">
                <img
                className="absolute top-[2%] left-[1.25] w-[2rem] h-[2rem] object-cover"
                alt=""
                src="/assets/gpt-logo.svg"
                />
                <b className="absolute text-[#64BD64] top-[2.5%] left-[3.75rem]">GPT-(-1)</b>
            </div>
            <HistoryList sessions={sessions} setSessions={setSessions} setSessionId={setSessionId} setChatBubbles={setChatBubbles} />
            <>
            <Clear setSessions={setSessions} setSessionId={setSessionId} setChatBubbles={setChatBubbles} />
            </>
            <Radio setMode={setMode}/>
        </div>
    );
}
 
export default SideBar;