import React, { useState, useEffect } from "react";
import Send from "./button/Send";

const TextInput = () => {
//   const [question, setQuestion] = useState("");
  return (
    <>
      <div className="absolute top-[620px] left-[43px] text-silver">
        <form className="absolute top-[0px] left-[0px] rounded-[10.38px] bg-darkslategray-200 w-[1060px] h-[68px] ">
          <div className="mb-4">
            <input
              className="shadow bg-[#2A3446] appearance-none border rounded w-full h-[67.44px] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="question"
              type="text"
              placeholder="Type your question.."
            //   value={question}
            //               onChange={(e) => setQuestion(e.target.value)
            // }
            />
          </div>
        </form>
      </div>
      <Send />
    </>
  );
};

export default TextInput;
