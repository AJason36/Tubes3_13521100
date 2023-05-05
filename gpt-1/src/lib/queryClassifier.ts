import { ClassifierResponse } from "types";
import { getDayFromDate } from "./date";
import mathParser from "./math-string";

export const classifyInputMessage = function(message: string): ClassifierResponse {
    const addQuestionPattern: RegExp = /^tambahkan pertanyaan (.+) dengan jawaban (.+)$/i;
    const deleteQuestionPattern: RegExp = /^hapus pertanyaan (.+)$/i;
    const datePattern: RegExp = /(.*)(\d+)[-\/](\d+)[-\/](\d+)(.*)/;
    const mathPattern: RegExp = /[0-9+\-*/^()]/;
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
        try {
            return {
                type: "date",
                question: "",
                answer: getDayFromDate(arr),
            };
        } catch (e: any) {
            // Do nothing, try next feature
        };
    };

    arr = message.match(mathPattern);
    if (arr) {
        try {
            const answer = mathParser(message);
            return {
                type: "math",
                question: "",
                answer: answer.toString(),
            };
        } catch (e: any) {
            // Do nothing, try next feature
        }
    }

    return {
        type: "unknown",
        question: "",
        answer: "",
    };
}
