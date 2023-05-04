export interface Question {
    id: string;
    question: string;
    answer: string;
};

export interface ChatMessage {
    id: string;
    input: string;
    response: string;
    sessionId: string;
    timestamp: string;
};

export interface ChatSession {
    id: string;
    name: string;
};
  