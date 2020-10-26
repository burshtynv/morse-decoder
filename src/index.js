  
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
    let dot = '10';
    let dash = '11';

    let arr = [];
    for (let i = 0; i < expr.length; i += 10) {
        let tmp = expr.slice(i, i + 10);
        if (tmp.startsWith('*')) {
            arr.push(' ');
        } else {
            let letter = '';
            for (let j = 0; j < tmp.length; j += 2) {
                let token = tmp.slice(j, j + 2);
                if (token === dot) {
                    letter += '.';
                } else if (token === dash) {
                    letter += '-';
                }
            }
            arr.push(letter);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== ' ') {
            arr[i] = MORSE_TABLE[arr[i]];
        }
    }

    return arr.join('');
}

module.exports = {
    decode
}