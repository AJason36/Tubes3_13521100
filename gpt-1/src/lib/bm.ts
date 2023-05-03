const lastOccurence = function(pattern: string): number[] {
    let retval: number[] = []

    // initialize retval
    for (let i = 0; i < 128; i++) {
        retval.push(-1);
    }

    // fill retval with last occurence
    for (let i = 0; i < pattern.length; i++) {
        retval[pattern.charCodeAt(i)] = i
    }

    return retval
}

const bm = function(pattern: string, questions: string[]): string[] {
    let ret: string[] = []
    pattern = pattern.toLowerCase()
    let lastOcc = lastOccurence(pattern)

    for (let question of questions) {
        question = question.toLowerCase()

        let i = pattern.length - 1
        let j = i
        while (i < question.length) {
            console.log(i  + " " + j)
            if (pattern.charAt(j) === question.charAt(i)) {
                if (j == 0) {
                    ret.push(question)
                    break
                }
                i--
                j--
            }
            else {
                i += pattern.length - j - 2 + pattern.length - lastOcc[question.charCodeAt(i)]
                j = pattern.length - 1
            }
        }
    }
    return ret
}

console.log(bm("abc", ["abdabcd", "ababab", "abc", "cab"]))