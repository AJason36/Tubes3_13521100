import { getDayFromDate } from "./date";

export const classifyInputMessage = function(message: String) {
    const addQuestionPattern: RegExp = /^tambahkan pertanyaan (.+) dengan jawaban (.+)$/i;
    const deleteQuestionPattern: RegExp = /^hapus pertanyaan (.+)$/i;
    const datePattern: RegExp = /(\d+)[-\/](\d+)[-\/](\d+)/;
    var arr;

    arr = message.match(addQuestionPattern);
    if (arr) {
        return {
            type: "addQuestion",
            question: arr[1],
            answer: arr[2],
        };
    };

    arr = message.match(deleteQuestionPattern);
    if (arr) {
        return {
            type: "deleteQuestion",
            question: arr[1],
            answer: "",
        };
    };

    arr = message.match(datePattern);
    if (arr) {
        return {
            type: "date",
            question: "",
            answer: getDayFromDate(arr),
        };
    };

    return {
        type: "unknown",
        question: "",
        answer: "",
    };
}
