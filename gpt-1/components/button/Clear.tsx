import React from "react";
import { ChatSession } from "types";

const Clear = ({ setSessions }: { setSessions: React.Dispatch<React.SetStateAction<ChatSession[]>> }) => {
    const clearAllButtonAction = async () => {
        var response = await fetch('/api/session', {
            method: 'DELETE',
        });

        response = await fetch("/api/session", {
            method: "GET",
        });
    
        const newSessions: ChatSession[] = await response.json();
        setSessions(newSessions);
    };
    
    return (
        <div className="absolute top-[70%] left-[1.5%] w-[95%] h-11 items-center justify-center">
            <button
                className="relative top-[0px] left-[0px] rounded-[10px] w-[18%] h-11 hover:bg-[#8a1f1f] bg-[#E93131]"
                type="button"
                onClick={clearAllButtonAction}
            >
                <div className="relative font-semibold">
                    Clear All
                </div>
            </button>
        </div>
    )
}

export default Clear;
