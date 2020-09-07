const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let newExpr = changeArray(expr);
    console.log(newExpr);
    let array = newExpr.map(a => a === "**********" ? " " : MORSE_TABLE[a]);
    return array.join("");
}

function changeArray(expr) {
    let bigArr = expr.match(/.{10}/g);
    let midArr = bigArr.map(a => a.match(/.{2}/g))
    let newMidArr = [];
    for (i = 0; i < midArr.length; i++) {
        for (j = 0; j < 5; j++) {
            if (midArr[i][j] === "00") {
                midArr[i].splice(j, 1);
                j = j - 1;
            }
            if (midArr[i][j] === "10") {midArr[i][j] = "."};
            if (midArr[i][j] === "11") {midArr[i][j] = "-"};
        }
            newMidArr[i] = midArr[i].join("");
    }
    return newMidArr;
}

module.exports = {
    decode
}