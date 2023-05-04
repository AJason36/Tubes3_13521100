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
        <div className="absolute top-[31.875rem] left-[1.125rem] w-[17.8rem] h-11">
            <button
                className="absolute top-[0px] left-[0px] rounded-[10px] w-[285px] h-11 hover:bg-[#8a1f1f] bg-[#E93131]"
                type="button"
                onClick={clearAllButtonAction}
            >
                <div className="absolute top-[13px] left-[114px] font-semibold">
                    Clear All
                </div>
            </button>
        </div>
    )
}

export default Clear;
