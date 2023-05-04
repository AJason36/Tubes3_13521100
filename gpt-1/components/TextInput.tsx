import React, { useState, useEffect } from "react";
import Send from "./button/Send";
import Image from "next/image";

const TextInput = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);
    console.log("form values", form_values);
    e.value = "";
  };
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
        <div className="absolute top-3 left-[95%] w-[3.75rem] h-[3.75rem] ">
          <button
            className="absolute rounded-[10px] top-[0px] left-[0px] w-[2.5rem] h-[2.5rem] hover:bg-gray-600"
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
