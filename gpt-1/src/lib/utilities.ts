import { MaxPriorityQueue } from "@datastructures-js/priority-queue";
import { compareTwoStrings } from "string-similarity";

type PQItem = {
    // Container for the priority queue item
    string: string;
    similarity: number;
}

function getMostSimilarString(input: string, data: string[]) {
/* 
    Function to get the most similar string from an array of strings
    Output format: Array of length 2
    [0]: Array of strings (1 if similarity >= 0.9, otherwise maximum of 5 strings)
    [1]: Boolean, true if the most similar string is >= 0.9, otherwise false
*/

    // If there is no data, return empty array
    if (data.length === 0) return [];

    // Create a priority queue to sort the strings by similarity
    const pq = new MaxPriorityQueue<PQItem>();
    for (const string of data) {
        // Ganti line ini kalau udah jadi string comparenya
        var similarity: number = compareTwoStrings(input.toLowerCase(), string.toLowerCase());
        pq.enqueue({ string, similarity });
    }

    // Return based on the function description
    var ret: [string[], boolean] = [[], false];
    if (pq.front().similarity >= 0.9) {
        ret[0].push(pq.dequeue().string);
        ret[1] = true;
    } else {
        for (let index = 0; index < 5; index++) {
            if (pq.size() === 0) break;
            ret[0].push(pq.dequeue().string);
        }
    }

    return ret;
}

export default getMostSimilarString;
