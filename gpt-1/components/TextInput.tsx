import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChatBubbleMessage } from "types";
import { classifyInputMessage } from "lib/queryClassifier";


const TextInput = (
  { setChatBubbles }: { setChatBubbles: React.Dispatch<React.SetStateAction<ChatBubbleMessage[]>> }
) => {
  const handleSubmit = async (e: any)=> {
    e.preventDefault();
    const message = Object.fromEntries(new FormData(e.target)).question.toString();

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
        response = new Response(JSON.stringify({ message: "Pertanyaan tidak dapat diproses" }))
    }

    console.log(await response.json());
  }

  const [question, setQuestion] = useState("");

  return (
    <>
      <div className="absolute top-[38.75rem] left-[3rem] text-silver">
        <form className="absolute top-[0px] left-[0px] rounded-[10px] bg-darkslategray-200 w-[66.25rem] h-[4.25rem] "
              onSubmit={handleSubmit}>
          <div className="mb-4">
            <textarea
              className="shadow bg-[#2A3446] appearance-none border rounded w-full h-[4.25rem] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="question"
              name="question"
              typeof="text"
              placeholder="Type your question.."
              value={question}
              onChange={(e) => setQuestion(e.target.value)
            }
            />
          </div>
          <div className="absolute top-3 left-[68rem] w-[3.75rem] h-[3.75rem] ">
          <button className="absolute rounded-[10px] top-[0px] left-[0px] w-[2.5rem] h-[2.5rem] hover:bg-gray-600"
                  type="submit">
                <Image src="/assets/enter-button.svg" alt="enter button" width={40} height={40} />
              </button>
        </div>
        </form>
      </div>
    </>
  );
};

export default TextInput;
