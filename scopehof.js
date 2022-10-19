// let globalVar = "globalVar";
// console.log(`Global Scope: ${globalVar}`);

// const callVar = () => {
//     let localVar = "localVar";

//     console.log(`Inside function: ${globalVar}`);
//     console.log(`Inside function: ${localVar}`);
// }
// callVar();

// console.log(`Global scope with local variable: ${localVar}`);
// // ReferenceError: localVar is not defined


// let stringLet = "let string";
// var stringVar = "var string";
// const newString = () => {
//     let stringLet = "new let string";
//     var stringVar = "new var string";

//     console.log(`Inside function: ${stringLet}`); //new
//     console.log(`Inside function: ${stringVar}`); //new
// }
// newString();

// console.log(`Outside function: ${stringLet}`); //old
// console.log(`Outside function: ${stringVar}`); //old


// function startLet(){
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log(i); //ReferenceError: i is not defined
// }

// function startVar(){
//     for (var i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log(i); //Output: 5  var behaves differently to let in thus case
// }

// console.log("Running with let");
// startLet();
// console.log("Running with var");
// startVar(); 


//----------------------------------Higher Order Functions-----------------


const whichGreeting = (timeOfDay) => {
    console.log(`Good ${timeOfDay}`);
}

const greet = (time, fn) => {
    if (time < 1200) {
        fn("Morning");
    }
    else if (time >= 1200 && time < 1800) {
        fn("Afternoon");
    }
    else {
        fn("Evening");
    }
}

greet(1900, whichGreeting);


const add = (num1) => {
    return (num2) => {        //anonymous function
        return num1 + num2;
    }
}
console.log(add(2)(5));



// activity 1
// Write a simple function which logs “Hello Code Nation”
// to the console.
// Then write a higher order function which will run our
// simple function five times, even though you only call it
// one time.

const sayHello = (num) => {
    for (let i = 0; i < num; i++) {
    console.log("Hello Code Nation");
    }
}

const nTimes = (fn, num) => {
    {
        fn(num);
    }
}
nTimes(sayHello, 5);

//activity 2
// The array method .map is an example of a higher
// order function.
// Declare a variable with five numbers, then use .map
// to iterate through the array and multiply each array
// item by 3.

let array = [2, 4, 6, 8, 10];

const timesThree = (fn) => {
    return fn * 3;
}
let newArray = array.map(timesThree);
console.log(newArray)