import React from "react";
import Image from "next/image";

const Send = () => {
    return (  
        <div className="absolute top-3 left-[68rem] w-[3.75rem] h-[3.75rem] ">
          <button className="absolute rounded-[10px] top-[0px] left-[0px] w-[2.5rem] h-[2.5rem] hover:bg-gray-600"
                  type="submit">
                <Image src="/assets/enter-button.svg" alt="enter button" width={40} height={40} />
              </button>
        </div>
    );
}
 
export default Send;