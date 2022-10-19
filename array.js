let favHolidayDestinations = [            //square brackets denote the start of an array
    "Venice, Italy", "Paris, France", "Barcelona, Spain"      //elements are separated by a comma
]
console.log(favHolidayDestinations)

let favFilms = [
    "Harry Potter and the Prisoner of Azkaban", "Avengers: Infinity War", "Grown Ups"
]
console.log(favFilms)

let favGames = [
    "Ratchet and Clank 3: Up Your Arsenal", "Destiny", "Dog's Life"
]
console.log(favGames)

console.log(favHolidayDestinations[2])    //choosing a specific element at the given index (arrays are zero indexed)
console.log(favFilms[0])

favHolidayDestinations[1] = "Florida, USA"      //updates the array at the given index
console.log(favHolidayDestinations)

favFilms[1] = "Avengers: Endgame"
console.log(favFilms)

console.log(favHolidayDestinations.length)
console.log(favHolidayDestinations.pop())    //removes the last item in the array and stores it in memory


// .map will apply a created function to each element of an array

favGames.splice(1, 0, "I-Ninja") //adds item at position 1
console.log(favGames)
favFilms.splice(2, 1, "Transformers") // removes item at position 2 and adds another in its place
console.log(favFilms)

favHolidayDestinations.unshift("Kerala, India") //adds item(s) to beginning of array
console.log(favHolidayDestinations) // alternatively, shift will remove the first item of an array

newGames = favGames.slice(1, 2) //makes a new array from the items between the specified indexes
console.log(newGames)