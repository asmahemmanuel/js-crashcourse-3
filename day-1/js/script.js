// let i = 0;


// do {
//     console.log(i);
//     i++;
// } while (i < 10);

// console.log("###########################");

// while (i < 10) {
//     console.log(i);
//     i++;
// }

// break and continue
// for (let i = 0; i < 10; i++) {
//  if (i === 5 ) {
//     console.log("Five");
//     break;
//  }
//     console.log(i);
// }

// function
function mySelf() {
    console.log("My name is John Doe");
    
}

// Function with parameter
function mySelf(name) {
    console.log("My name is", name);
}

mySelf("John Doe");
mySelf("Dean Doe");
mySelf("Gifty Doe");

function add(x, y) {
    let sum = x * y;
    console.log(sum);
    
}

add(5, 6);
add(6, 7);
add(7, 8);

function add(x, y) {
    let sum = x + y;
    console.log(sum);
}

add(5, 6);
add(6, 7);
add(7, 8);

// function with return value
function add(x, y) {
    let sum = x + y;
    return sum;
}
let result = add(10, 15)
let newResult = result * 2
console.log(newResult);

// Arrow Function
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;
let subtract = (a, b) => a - b;
console.log(divide(10, 5));
console.log(multiply(10, 5));
console.log(subtract(10, 5));

// Higher Order Function
// A funcction that takes a function as a PARAMETER

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let double = numbers.map((number) => number + number);
 let squares = numbers.map((number) => number * number);
console.log(double);
console.log(squares);

let evens = numbers.filter((number) => number % 2 === 0);
let odds = numbers.filter((number) => number % 2 === 1);
let odds2 = numbers.filter((number) => number % 2 !== 0);
console.log(evens);
console.log(odds);
console.log(odds2);

let F = numbers.find((numbers) => numbers === 5);
console.log(F);

// Strings
// characters in (" ") are strings

let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.length);
console.log(sentence.charCodeAt(10));
console.log(sentence.charCodeAt(3));
console.log(sentence.charCodeAt(30));
console.log(sentence.charCodeAt(15));
console.log(sentence.concat(" from concatenation"));
console.log(sentence.endsWith("dog"));
console.log(sentence.includes("brown"));
console.log(sentence.indexOf("o"));
console.log(sentence.lastIndexOf("o"));
console.log(sentence.padStart(95));
console.log(sentence.padEnd(100));
console.log(sentence.repeat( 3));
console.log(sentence.replace("lazy", "hardworking"));
console.log(sentence.slice(20, 30));
console.log(sentence.substring(20, 30));

// let email = "kofi@gmail.com";
// console.log(email.split("@"));

console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());




