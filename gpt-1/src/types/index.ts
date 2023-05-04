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

export interface ChatBubbleMessage {
    id: number;
    name: string;
    message: string;
}

export interface ClassifierResponse {
    type: string;
    question: string;
    answer: string;
}

export interface ChatSession {
    id: string;
    name: string;
};
  