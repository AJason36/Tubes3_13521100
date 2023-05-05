import React from "react";
import ChatBubble from "./ChatBubble";
import TextInput from "./TextInput";
import { ChatBubbleMessage, ChatSession } from "types";

const MainPage = ({
  setSessions,
  sessionId,
  setSessionId,
  chatBubbles,
  setChatBubbles,
  mode,
}: {
  setSessions: React.Dispatch<React.SetStateAction<ChatSession[]>>,
  sessionId: string | undefined,
  setSessionId: React.Dispatch<React.SetStateAction<string | undefined>>,
  chatBubbles: ChatBubbleMessage[],
  setChatBubbles: React.Dispatch<React.SetStateAction<ChatBubbleMessage[]>>,
  mode: string | undefined,
}) => {
  return (
    <div className="absolute items-center justify-center bg-[#1C1E32] top-[0%] left-[20%] rounded-[25px] w-[80%] h-screen">
      {chatBubbles.length === 0 ? (
        <div className="relative top-[10%] flex flex-col items-center justify-center gap-10">
          <div className="text-[300%] text-center">Welcome to GPT-(-1)</div>
          {/* FEATURES */}
          <div className="relative w-[40vw] h-[10vh] shrink-0">
            <div className="p-3 relative flex flex-row bg-[#24284F] rounded-[5px] gap-2">
              <div className="relative top-[5%] w-[5%] h-[5%]">
                <img
                  className="relative object-cover"
                  alt=""
                  src="/assets/text.svg"
                />
              </div>
              <div className="flex flex-col relative w-[100%] h-[100%]">
                <div className="relative top-[0px] left-[0px]">
                  <b>Fitur Pertanyaan Text</b>
                </div>
                <div className="relative left-[0px] text-dimgray inline-block">
                  Mencocokkan pertanyaan dari input pengguna ke pertanyaan di
                  database menggunakan algoritma KMP atau BM.
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[40vw] h-[10vh] shrink-0 m-3">
            <div className="p-3 relative flex flex-row bg-[#24284F] rounded-[5px] gap-2">
              <div className="relative top-[5%] w-[5%] h-[5%]">
                <img
                  className="relative object-cover"
                  alt=""
                  src="/assets/calculator.svg"
                />
              </div>
              <div className="flex flex-col relative w-[100%] h-[100%]">
                <div className="relative top-[0px] left-[0px]">
                  <b>Fitur Kalkulator</b>
                </div>
                <div className="relative left-[0px] text-dimgray inline-block">
                Pengguna memasukkan input query berupa persamaan matematika. Contohnya adalah 2*5 atau 5+9*(2+4). Operasi cukup Tambah, kurang, kali, bagi, pangkat, kurung.
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[40vw] h-[10vh] shrink-0 m-3">
            <div className="p-3 relative flex flex-row bg-[#24284F] rounded-[5px] gap-2">
              <div className="relative top-[5%] w-[5%] h-[5%]">
                <img
                  className="relative object-cover"
                  alt=""
                  src="/assets/calendar-days.svg"
                />
              </div>
              <div className="flex flex-col relative w-[100%] h-[100%]">
                <div className="relative top-[0px] left-[0px]">
                  <b>Fitur Tanggal</b>
                </div>
                <div className="relative left-[0px] text-dimgray inline-block">
                Pengguna memasukkan input berupa tanggal, lalu chatbot akan merespon dengan hari apa di tanggal tersebut. Contohnya adalah 25/08/2023 maka chatbot akan menjawab dengan hari senin. 
                </div>
              </div>
            </div>
          </div>
        </div>
        
      ) : (
        <div>
          <div className="absolute top-[0px] left-[0px] max-h-[85%] w-full overflow-y-auto space-y-1 scrollbar-hide">
            {chatBubbles.map((chat, index) => (
              <ChatBubble key={index} name={chat.name} text={chat.message} />
            ))}
          </div>
          <div className="absolute top-[85%] left-[0px] w-[100%] h-[7rem]">
            <div className="absolute box-border w-[100%] h-[1px] shrink-0 border-t-[1px] border-solid border-darkslategray-100" />
          </div>
        </div>
      )}
      {/* TEXT BOX */}
      <TextInput
        setSessions={setSessions}
        sessionId={sessionId}
        setSessionId={setSessionId}
        chatBubbles={chatBubbles}
        setChatBubbles={setChatBubbles}
        mode={mode}
      />
    </div>
  );
};

export default MainPage;
