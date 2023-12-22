
// Задание 1 
function multiply(a, b) {
    console.log(a*b);
}

// Задание 2 
function getRandom(num) {
    return Math.floor(Math.random() * num);
}

// Задание 3 

function convertToString(num) {
    if (num === 42) {
        return 'the meaning of life and the universe'
    };
    return String(num)
}

// Задание 4 
function reverse(text) {
    return text.split('').reverse().join('')
}

// Задание 5 
function countSyllables(text) {
    if (text.includes('-') === false) {
        return text = 0
    }
    return text.match(/-/g).length
}
