// const person = {
//     firstName: "Sally",
//     lastName: "Evans",
//     age: 27,
//     occupation: "Sales Assistant",
//     married: false,
//     homeOwner: false,
//     hobbies: ["tennis", "gardening", "bungee jumping"],
//     marketingOp () {
//         if (this.homeOwner == false && this.age > 25) {
//             return "Send mortgage offer email."
//         }
//         else if (this.homeOwner == false && this.age < 25) {
//             return "Send summer holiday fun credit card offer."
//         }
//         else if (this.homeOwner == true && this.age > 25) {
//             return "Pension investment offer."
//         }
//         else {
//             return "Send sensible savings offer."
//         }
//     }
// }

// console.log(person.marketingOp())

// console.log(person.occupation)
// console.log(person["married"])
// person.homeOwner = "true"
// console.log(person)


// const pet = {
//     name: "Samuel Theodore Wellington III",
//     age: 12,
//     breed: "Springer Spaniel",
//     colour: "Liver and White",
//     features: ["just loads of fluff on his noggin", "loads of fluff on his paws too", "massive dump truck booty", "loves fetch"],
//     eat () {
//         return `${this.name} is eating.`
//     },
//     drink () {
//         return `${this.name} is drinking.`
//     }
// }
// console.log("My dog is called " + pet.name + ". He is " + pet.age + " years old and is a " + pet.colour + " " + pet.breed + ".")
// console.log(`My dog is called ${pet["name"]}. He is ${pet["age"]} years old and is a ${pet["colour"]} ${pet["breed"]}.`)



// pet.colour = "Aquamarine and Cyan"
// console.log(pet.eat())
// console.log(pet.drink())



// Activity 5: Create an object called coffee shop with key values of branch,
// drinks with prices and food with prices. Add methods called
// drinksOrdered and foodOrdered. They should return a string
// saying [Your order] is … with all items chosen with costs, and the
// total cost.

const coffeeShop = {
    branch: "Costarbucks",
    drinks: [["Tea", 2], ["Coffee", 3], ["Expensive water", 540.29]],
    food: [["Cake", 2.99], ["Fruit", 1.25], ["Doughnut", 5]],
    drinksOrdered (i) {
        return `Welcome to ${this.branch}! Your order is: ${this.drinks[i][0]}. That will be £${this.drinks[i][1]} please!`
    },
    foodOrdered (j) {
        return `Welcome to ${this.branch}! Your order is: ${this.food[j][0]}. That will be £${this.food[j][1]} please!`
    }
}
console.log(coffeeShop.drinksOrdered(1))
console.log(coffeeShop.foodOrdered(2))