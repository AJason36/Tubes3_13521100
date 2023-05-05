
const border = function(pattern: string): number[] {
    let ret: number[] = []
    let last = 0
    for (let i = 0; i < pattern.length; i++) {
        while(last && pattern[i] != pattern[last]) {
            last = ret[last-1];
        }
        ret.push(last++);
    }
    return ret;
}

/**
 * 
 * @param pattern 
 * @param questions 
 * 
 * @returns array of questions which contain pattern
 */
const kmp = function(pattern: string, questions: string[]): string[] {
    let ret: string[] = []
    pattern = pattern.toLowerCase()
    
    const borderArray = border(pattern)
    for (let question of questions) {
        question = question.toLowerCase()

        let j = 0
        for (let i = 0; i - j <= question.length - pattern.length && i < question.length; i++) {
            if (question[i] === pattern[j]) {
                if (j === pattern.length - 1) {
                    ret.push(question)
                    break
                }
            }
            else {
                while(j && question[i] !== pattern[j]) {
                    j = borderArray[j-1]
                }
            }
            j++
        }
    }

    return ret
};

export default kmp;