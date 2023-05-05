import { MaxPriorityQueue } from "@datastructures-js/priority-queue";
import { levenshteinSimilarity } from "./string-similarity";
import kmp from "./kmp";
import bm from "./bm";

type PQItem = {
    // Container for the priority queue item
    string: string;
    similarity: number;
}

function getMostSimilarString(input: string, data: string[], mode: string): [string[], boolean] {
/* 
    Function to get the most similar string from an array of strings
    Output format: Array of length 2
    [0]: Array of strings (1 if similarity >= 0.9, otherwise maximum of 3 strings)
    [1]: Boolean, true if the most similar string is >= 0.9, otherwise false
*/

    // If there is no data, return empty array
    if (data.length === 0) return [[], false];

    // Check with exact pattern match
    let exactResult: string[]
    if (mode.toLowerCase() === "kmp") {
        exactResult = kmp(input, data)
    }
    else if (mode.toLowerCase() === "bm") {
        exactResult = bm(input, data)
    }
    else throw Error("mode unknown, possible values are \"kmp\", \"bm\"")

    // If only one exact match: return value
    if (exactResult.length === 1) 
        return [exactResult, true]

    // Create a priority queue to sort the strings by similarity
    const pq = new MaxPriorityQueue<PQItem>((value) => value.similarity);
    for (const string of data) {
        var similarity: number = levenshteinSimilarity(input.toLowerCase(), string.toLowerCase());
        pq.enqueue({ string, similarity });
    }

    // Return based on the function description
    var ret: [string[], boolean] = [[], false];
    if (pq.front().similarity >= 0.9) {
        ret[0].push(pq.dequeue().string);
        ret[1] = true;
    } else {
        for (let index = 0; index < 3; index++) {
            if (pq.size() === 0 || pq.front().similarity < 0.6) break;
            ret[0].push(pq.dequeue().string);
        }
    }

    return ret;
}

export default getMostSimilarString;
