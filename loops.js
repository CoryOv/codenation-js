let favHolidayDestinations = [
    "Venice, Italy", "Paris, France", "Barcelona, Spain", "Kerala, India", "Pyongyang, North Korea"
]
for (let i = 2; i < favHolidayDestinations.length; i++){
    console.log(favHolidayDestinations[i])
}

for (i = 0; i <= 10; i++){
    console.log(i += 2)
}

let evenNumbers = []

for (let n = 0; n < 20; n++){
    if (n % 2 == 0) {
        evenNumbers.push(n)
    }
}
console.log(`The even numbers between 0 and 20 are: ${evenNumbers}`)

let lives = 3

while (lives > 0) {
    console.log("Well done! You're still in the game")
    lives--
}
console.log("GAME OVER")

let currentDiceRoll = "3"

while (currentDiceRoll != 1){
    console.log(currentDiceRoll)
    currentDiceRoll = Math.floor(Math.random() * 6) + 1
}
console.log(currentDiceRoll)