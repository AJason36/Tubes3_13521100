
const hammingDistance = function(str1: string, str2: string): number {
    let dist = str1.length - str2.length
    if (dist < 0) dist = -dist
    for (let i = 0; i < str1.length && i < str2.length; i++) {
        if (str1.charAt(i) !== str2.charAt(i)) dist++
    }
    return dist
}

const hammingSimilarity = function(str1: string, str2: string): number {
    let len = str1.length > str2.length ? str1.length : str2.length;
    return (len - hammingDistance(str1, str2)) / len
}

const levenshteinSimilarity = function(str1: string, str2: string): number {
    let memo: number[][] = new Array(str1.length + 1)
    // memo.forEach(x => x = new Array(str2.length + 1))
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(str2.length + 1)
        for (let j = 0; j < memo[i].length; j++) {
            memo[i][j] = -1
        }
    }

    const levenshteinDP = function(str1: string, str2: string): number {
        if (memo[str1.length][str2.length] != -1) {
            return memo[str1.length][str2.length]
        }
        if (str1 === "") {
            return str2.length
        }
        if (str2 === "") {
            return str1.length
        }

        if (str1.charAt(0) === str2.charAt(0)) {
            return memo[str1.length][str2.length] = levenshteinDP(str1.slice(1), str2.slice(1))
        }

        return memo[str1.length][str2.length] = 1 +
            Math.min(
                levenshteinDP(str1.slice(1), str2),
                levenshteinDP(str1, str2.slice(1)),
                levenshteinDP(str1.slice(1), str2.slice(1))
            );
    }
    
    let len = str1.length > str2.length ? str1.length : str2.length;
    return (len - levenshteinDP(str1, str2)) / len

}

const lcsSimilarity = function(str1: string, str2: string): number {
    let memo: number[][] = new Array(str1.length + 2)
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(str2.length + 1)
        for (let j = 0; j < memo[i].length; j++) {
            memo[i][j] = -1
        }
    }

    const lcsDP = function(str1: string, str2: string): number {
        if (memo[str1.length][str2.length] != -1) {
            return memo[str1.length][str2.length]
        }

        if (str1 === "" || str2 === "") return 0;

        if (str1.charAt(0) === str2.charAt(0)) 
            return memo[str1.length][str2.length] = 1 + lcsDP(str1.slice(1), str2.slice(1))
        return memo[str1.length][str2.length] = Math.max(
            lcsDP(str1.slice(1), str2),
            lcsDP(str1, str2.slice(1))
        );
    }

    let len = str1.length > str2.length ? str1.length : str2.length;
    return lcsDP(str1, str2) / len
}

export {hammingSimilarity, levenshteinSimilarity, lcsSimilarity};


// const testsim = function(str1: string, str2: string): void {
//     console.log("hamming:", hammingSimilarity(str1, str2))
//     console.log("lev: ", levenshteinSimilarity(str1, str2))
//     console.log("lcs: ", lcsSimilarity(str1, str2))
// }
// testsim("halo", "halo")
// testsim("siapa presiden indonesia", "saha presiden indonesa")