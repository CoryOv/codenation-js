console.log("Hello world")
console.log("hello World".length)
console.log("hello world".toUpperCase())

let i = 10    //let is a variable that can be changed.
console.log(i)

const j =10    //const is a variable that cannot be changed.
console.log(j)


let firstName = "Bernard"
let age = 5000
let universityStudent = true

console.log(firstName + age + universityStudent) //no concatanation means each element is squashed together

firstName = "John"
age = 20
universityStudent = false

console.log(firstName + " " + age + " " + universityStudent) //concatanation creates an easier way to read the output

let modelOfCar = "Lambo"
let personName = "Dave"
let occupation = "Dentist"
console.log("Hi, my name is " + personName + ". I am a " + occupation + " and I drive a " + modelOfCar + ".")
console.log(`Hi, my name is ${personName}. I am a ${occupation} and I drive a ${modelOfCar}`) //easier way of injecting variables into a sentence 

const name = "Cory"
const myAge = 26
const faveColour = "Blue"
console.log(`Hello, my name is ${name}, I am ${myAge} years old and my favourite colour is ${faveColour}.`)

let breakfast = "Granola"
let lunch = "Beans on toast"
let dinner = "Pasta and garlic bread"
console.log(`For breakfast, I'm gonna have ${breakfast}. Then for lunch, I might have ${lunch}. For dinner, I will have ${dinner}.`)

breakfast = "Pancakes"
lunch = "Leek and potato soup"
dinner = "Pizza"
console.log(`For breakfast, I'm gonna have ${breakfast}. Then for lunch, I might have ${lunch}. For dinner, I will have ${dinner}.`) //showcasing how variables declared using 'let' can be updated


let a = 5
a += 3      //shorthand for using mathematical operators
console.log(a) 