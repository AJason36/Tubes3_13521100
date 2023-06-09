import { Stack } from 'stack-typescript'

/**
 * Parse math expression (string) to a number.
 * @param expr 
 * @returns result of expr
 * @throws Error - invalid math expr
 * 
 */
const mathParser = function (expr: string): number {
    /**
     * Details:
     * whitespace are ignored
     * dot as comma
     * Operation order: 
     * | Operation | Predecence | Association |   
     * |    +      |     1      |    Left     |   
     * |    -      |     1      |    Left     |   
     * |    *      |     2      |    Left     |   
     * |    /      |     2      |    Left     |   
     * |    ^      |     3      |    Right    |
     */
    let predecence: Map<string, number> = new Map([
        ["+", 1],
        ["-", 1],
        ["*", 2],
        ["/", 2],
        ["^", 3] 
    ]);
    let association: Map<string, string> = new Map([
        ["+", "L"],
        ["-", "L"],
        ["*", "L"],
        ["/", "L"],
        ["^", "R"] 
    ]);
    
    /**
     * States mainly used for number processing
     * - 0: after operator
     * - 1: processing integer
     * - 2: decimal point
     * - 3: processing number after decimal point
     * - 4: sign before number
     * - 5: leading dot (current number . or -.)
     * - 20: after closing brace
     * - -1: error
     */
    let state = 0;

    /**
     * types are used to simplify transition
     * - 0: number
     * - 1: dot
     * - 2: operation except negative
     * - 3: open brace
     * - 4: close brace
     * - 5: negative
     */
    const getType = function(c: string): number {
        if (c.length !== 1) throw Error("getType argument must have length of 1")
        if (c === '.') return 1
        if (c === '*' || c === '/' || c === '^') return 2;
        if (c === '(') return 3;
        if (c === ')') return 4;
        if (c === '+' || c === '-') return 5;
        if ('0'.charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= '9'.charCodeAt(0)) return 0;
        throw Error("Character " + c + " unknown")
    }

    let transition = new Map([
        [0, new Map([
            [0, 1],
            [1, 5],
            [3, 0],
            [5, 4]
        ])],
        [1, new Map([
            [0, 1],
            [1, 2],
            [2, 0],
            [3, 0],
            [4, 20],
            [5, 0]
        ])],
        [2, new Map([
            [0, 3],
            [2, 0],
            [3, 0],
            [4, 20],
            [5, 0]
        ])],
        [3, new Map([
            [0, 3],
            [2, 0],
            [3, 0],
            [4, 20],
            [5, 0]
        ])],
        [4, new Map([
            [0, 1],
            [1, 5],
        ])],
        [5, new Map([
            [0, 3]
        ])],
        [20, new Map([
            [2, 0],
            [3, 0],
            [4, 20],
            [5, 0]
        ])]
    ]);
    
    // turn infix to postfix
    let postfix: (string|number)[] = []
    let operatorStack: Stack<string> = new Stack<string>()
    let currentVal: string = ""

    for (let i = 0; i < expr.length; i++) {
        let c = expr.charAt(i)
        if (c.trim() === "") continue

        let newState = transition.get(state)?.get(getType(c))
        if (newState === undefined) 
            throw Error("Error while parsing expr (symbol " + c + ", index " + i + ")") 
        
        if (newState === 0 || newState === 20) {
            /* Masukkan data */

            /* Number */
            if (currentVal.length)
                postfix.push(Number.parseFloat(currentVal))
            currentVal = ""
            
            if (getType(c) === 2 || getType(c) === 5) {
                /* Operator */
                let currentPred = predecence.get(c)
                if (currentPred === undefined) throw Error("Unknown error")

                while (operatorStack.size && operatorStack.top !== "(") {
                    let stackTopPred = predecence.get(operatorStack.top)
                    if (stackTopPred === undefined) throw Error("Unknown error")

                    if (currentPred > stackTopPred) break
                    if (currentPred === stackTopPred && association.get(c) === "R") break

                    postfix.push(operatorStack.top)
                    operatorStack.pop()
                }
                operatorStack.push(c)
            }
            else if (getType(c) === 3) {
                if ((1 <= state && state <= 3) || state === 20) {
                    // implicit multiplication
                    operatorStack.push("*");
                }
                operatorStack.push("(")
            }
            else if (getType(c) === 4) {
                while (operatorStack.size && operatorStack.top !== "(") {
                    postfix.push(operatorStack.top)
                    operatorStack.pop()
                }
                if (operatorStack.size === 0) throw Error("Wrong brace placement")
                operatorStack.pop()
            }
        }
        else {
            currentVal += c
        }

        state = newState
    }

    // remaining number
    if (1 <= state && state <= 3) {
        postfix.push(Number.parseFloat(currentVal))
    }

    // remaining operator
    while (operatorStack.size) {
        if (operatorStack.top === "(")
            throw Error("Wrong brace placement")
        if (![2,5].includes(getType(operatorStack.top)))
            throw Error("Wrong format")
        postfix.push(operatorStack.top)
        operatorStack.pop()
    }

    // console.log(postfix)

    // postfix parsing
    let numberStack = new Stack<number>
    
    for (let i = 0; i < postfix.length; i++) {
        if (typeof(postfix[i]) === "number") {
            // typecast done to suppress warning
            numberStack.push(Number(postfix[i]))
        }
        else if (typeof(postfix[i]) === "string") {
            let b = numberStack.top
            numberStack.pop()
            let a = numberStack.top
            numberStack.pop()
            if (postfix[i] === '+') numberStack.push(a + b)
            if (postfix[i] === '-') numberStack.push(a - b)
            if (postfix[i] === '*') numberStack.push(a * b)
            if (postfix[i] === '/') numberStack.push(a / b)
            if (postfix[i] === '^') numberStack.push(a ** b)
        }
    }

    return numberStack.top;
};

// console.log(mathParser("3+2*3+3"))
// console.log(mathParser("5*(5+5)"))
// console.log(mathParser("5/(3+1)"))
// console.log(mathParser("5-3-1-1"))
// console.log(mathParser("2^(12-3*3)"))
// console.log(mathParser("2 ^ (12-3*3)"))
// console.log(mathParser("2 ^ (-2)"))
// console.log(mathParser("3(3+1/3)"))
// console.log(mathParser("(5^2)(2--3)"))
// console.log(mathParser("0-+5"))
// console.log(mathParser("5"))
export default mathParser