// let hunger = "full"

// if (hunger == "hungry") {
//     console.log("Yes please I'm starving!")
// }
// else if (hunger == "full") {
//     console.log("No thanks, I'm stuffed!")
// }
// else {
//     console.log("Oh go on then, why not!")
// }

// let music = "dance"

// if (music == "classical") {
//     console.log("Oh, how relaxing.")
// }
// else if (music == "disco") {
//     console.log("Where are my dancing shoes!")
// }
// else {
//     console.log("Where's the party?")
// }

// if (4 === "4") {
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// let age = 18

// if (age >= 17) {
//     console.log("Yes I can serve you")
// }
// else {
//     console.log("You aren't old enough")
// }

// let food = "anything"
// let hunger = "ravenous"

// if (hunger == "full" && food == "ice cream") {
//     console.log("Of course, who wouldn't")
// }
// else if (hunger == "hungry" && food == "ice cream") {
//     console.log("Yes please I'm starving, could I also have a pizza?")
// }
// else if (hunger == "hungry" && food == "sprouts") {
//     console.log("Actually, I can wait...")
// }
// else {
//     console.log("No thanks, I'm stuffed")
// }

// let num = 57;

// if (num & 1) {
//     console.log("I am odd.");
// } else {
//     console.log("I am even.");
// }

// let pizzaTopping = "Pineapple"
// switch(pizzaTopping) {
//     case "Cheese":
//     case "Pineapple":
//         console.log(`${pizzaTopping} is the most important topping for my pizza!`)
//         break
//     case "Garlic":
//     case "Tomatoes":
//         console.log(`I don't mind having ${pizzaTopping} on my pizza.`)
//         break
//     default: 
//         console.log(`${pizzaTopping} should not be on anybody's pizza!`)
// }

// let password = "pineapple"

// if (password.length < 8) {
//     console.log("Password is too short!")
// }
// else {
//     console.log(password)
// }


// palindrome activity

// let num = 10101
// let reverseNum = 10101

// if (num == reverseNum) {
//     console.log("Woo a palindrome")
// }
// else {
//     console.log("Nope, nevermind")
// }


// let num = 30

// if (num % 3 == 0 && num % 5 == 0) {
//     console.log("fizz buzz")
// }
// else if (num % 3 == 0) {
//     console.log("fizz")
// }
// else if (num % 5 == 0) {
//     console.log("buzz")
// }
// else {
//     console.log(num)
// }

// switch(num) {
//     case (num % 3 == 0):
//         console.log("fizz")
//     case (num % 5 == 0):
//         console.log("buzz")
//     case (num % 3 == 0) && (num % 5 == 0):
//         console.log("fizzbuzz")
//         break
//     default:
//         console.log(num)
// }


// let time = 12
// let placeOfWork = "online"
// let townOfHome = "Chester"

// if (time == 7) {
//     console.log(`At ${time} I am at home.`)
// }
// else if (7 < time && time < 9) {
//     console.log(`At ${time} I'm communting to ${placeOfWork}...so really still at home.`)
// }
// else if (time == 9) {
//     console.log(`At ${time} I'll be at ${placeOfWork} in ${townOfHome}.`)
// }
// else {
//     console.log("Sleeping")
// }


let myString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let vowels = ["a", "e", "i", "o", "u"]
let array = myString.split(""); // split string into array
let vowelIndex = []
for (const letter of vowels) {
    vowelIndex.push(array.lastIndexOf(letter))
}
console.log(Math.max(...vowelIndex)) //... is a spread operator, writes the whole list out without user doing it.


// let word = "strings"
// let first = word[0]
// let last = word.charAt(word.length - 1)
// if (first == last) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }


// let num1 = 3
// let num2 = 6

// if ((num1 + num2) % 2 == 0) {
//     console.log(num1 + num2)
// }
// else {
//     console.log(num1 * num2)
// }