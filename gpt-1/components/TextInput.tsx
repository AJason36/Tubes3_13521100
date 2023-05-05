import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChatBubbleMessage, ChatSession } from "types";
import { classifyInputMessage } from "lib/queryClassifier";
import getMostSimilarString from "lib/utilities";
import { createNewChat, updateChatBubbles } from "lib/pageHelper";


const TextInput = (
  { 
    setSessions,
    sessionId,
    setSessionId,
    chatBubbles,
    setChatBubbles, 
    mode 
  }: { 
    setSessions: React.Dispatch<React.SetStateAction<ChatSession[]>>,
    sessionId: string | undefined,
    setSessionId: React.Dispatch<React.SetStateAction<string | undefined>>,
    chatBubbles: ChatBubbleMessage[],
    setChatBubbles: React.Dispatch<React.SetStateAction<ChatBubbleMessage[]>>, 
    mode: string | undefined 
  },
) => {
  const handleSubmit = async (e: any)=> {
    e.preventDefault();
    const query = Object.fromEntries(new FormData(e.target)).question.toString();
    const arrMessage = query.split("?");
    
    var answer = "";
    for (var message of arrMessage) {
      if (message == "") continue;
      var classifierResponse = classifyInputMessage(message);
      
      var response;
      switch (classifierResponse.type) {
        case "addQuestion":
          response = await fetch("/api/question", {
            method: "POST",
            body: JSON.stringify({ question: classifierResponse.question, answer: classifierResponse.answer }),
          })
          break;
        case "deleteQuestion":
          response = await fetch(`/api/question/${encodeURIComponent(classifierResponse.question)}`, {
            method: "DELETE",
          })
          break;
        case "date":
        case "falseDate":
        case "math":
        case "falseMath":
          response = new Response(JSON.stringify({ message: classifierResponse.answer }));
          break;
        default:
          try {
            if (mode === undefined) throw new Error("Mode is undefined");
            
            const dbResponse = await fetch("/api/question", {
              method: "GET",
            });
            const data = await dbResponse.json();
  
            const funcResponse = getMostSimilarString(message, data.map((q: any) => q.question), mode);
            if (funcResponse[1]) {
              response = new Response(JSON.stringify({ message: data.find((d: any) => d.question === funcResponse[0][0]).answer }));
            } else {
              if (funcResponse[0].length > 0) {
                let respMessage = "Pertanyaan tidak ada di database.\nApakah yang anda maksud adalah:\n";
                for (let i = 0; i < funcResponse[0].length; i++) {
                  respMessage += `${i + 1}. ${funcResponse[0][i]}\n`;
                }
                response = new Response(JSON.stringify({ message: respMessage }));
              } else {
                response = new Response(JSON.stringify({ message: "Question Data is Empty or No Similar Question" }));
              }
            }
          } catch (e: any) {
            response = new Response(JSON.stringify({ message: e.message }));
          }
      }
  
      const responseBody = await response.json();
      answer += responseBody.message + ".\n";
    }

    if (sessionId === undefined) {
      response = await createNewChat(setSessions, setSessionId);
      sessionId = response;
    }

    response = await fetch(`/api/session/${encodeURIComponent(sessionId)}`, {
      method: 'POST',
      body: JSON.stringify({ input: query, response: answer }),
    });

    updateChatBubbles(sessionId, setChatBubbles);
    setQuestion("");
  }

  const [question, setQuestion] = useState("");

  return (
    <div className="absolute top-[87%] left-[3%] w-11/12 h-auto text-silver ">
      <form
        className="flex flex-col top-[0px] left-[0px] rounded-[10px] bg-darkslategray-200 h-[4.25rem]  "
        onSubmit={handleSubmit}
      >
        <div className="mb-4 w-[100%]">
          <textarea
            className="shadow bg-[#2A3446] appearance-none border rounded w-[93%] h-[4.25rem] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="question"
            name="question"
            typeof="text"
            placeholder="Type your question.."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        {/* <Send />  */}
        <div className="absolute top-3 left-[95%] w-[3.75rem] h-[3.75rem] items-center justify-center ">
          <button
            className="relative rounded-[10px] top-[0px] left-[0px] w-[2.5rem] h-[2.5rem] hover:bg-gray-600"
            type="submit"
          >
            <Image
              src="/assets/enter-button.svg"
              alt="enter button"
              width={40}
              height={40}
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default TextInput;
