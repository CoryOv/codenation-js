// class Pet {
//     constructor(name, age, type, breed, colour, time) {
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.breed = breed;
//         this.colour = colour;
//         this.lastFed = time;
//     }
//     feedPet (time) {
//         this.lastFed = time;
//         return `Last feed updated to: ${this.lastFed} for ${this.name}.`;
//     }
// }

// class PetMeds extends Pet {
//     constructor(name, age, type, breed, colour, time, mtime) {
//     super(name, age, type, breed, colour, time);
//     this.lastMeds = mtime;
//     }
// giveMeds (mtime) {
//         this.lastMeds = mtime;
//         return `Last meds updated to: ${this.lastMeds} for ${this.name}.`
//     }
// }

// const sammy = new Pet("Sammy", 12, "dog", "Springer", "L&W", "0800");
// console.log(sammy.feedPet("1800"));

// const alfie = new Pet("Alfie", 12, "dog", "Springer", "L&W", "0800");
// console.log(alfie.feedPet("1759"));

// const kato = new PetMeds("Kato", 9, "dog", "Husky", "B&W", "0900", "0900")

// console.log(sammy)
// console.log(alfie)
// console.log(kato)
// console.log(kato.giveMeds("1730"))


// // getters and setters

// class Pets {
//     constructor(firstname, surname, age, type, breed, colour, time) {
//         this.firstname = firstname;
//         this.surname = surname;
//         this.age = age;
//         this.type = type;
//         this.breed = breed;
//         this.colour = colour;
//         this.lastFed = time;
//     }
//     get petInfo () {
//         return `${this.firstname} is a ${this.type}, ${this.age} year(s) old`;
//     }
//     set fullName (name) {
//         const array = name.split(' ');
//         this.firstname = array[0];
//         this.surname = array[1];
//     }
//     get fullName() {
//         return `${this.firstname} ${this.surname}`
//     }
//     feedPet (time) {
//         this.lastFed = time;
//         return `Last feed updated to: ${this.lastFed} for ${this.firstname}`;
//     }
// }

// const bella = new Pets("Bella", "", 2, "Dog", "GS", "B&T", "08:00");
// console.log(bella);
// bella.fullName = "Bella Crompton"
// console.log(bella);
// console.log(bella.fullName)



// activity 1
// Create a class called “Rental”.
// This class should have at least the name of the store, the store
// address, the store contact number, and a list of available movies
// for rental within the constructor.
// Create an object instance called “test” from your class and output
// it to the console to ensure it’s free from errors.

// activity 2
// Write a function that can get all of the available
// movies and output them to the console.
// Write a function which can add a new movie to
// the list of available movies.

// activity 3
// Movies also have prices, refactor your code so
// that each movie also has an associated price
// attached.
// Output a list of all movies, including their prices,
// to the console when queried.


class Rental {
    constructor(storeName, storeAddress, storePhone, availableMovies) {
    this.storeName = storeName;
    this.storeAddress = storeAddress;
    this.storePhone = storePhone;
    this.availableMovies = availableMovies;
    }
    get movies () {
        return `Here is a list of all our available movies: ${this.availableMovies}`
    }
    set movies (movie) {
        this.availableMovies.push(movie)
    }
}

const test = new Rental("BrickBasher", "123 Fake Street", "01234567890", ["Star Wars: Phantom Menace: £2.50", "Kick Ass: £3.99", "Eat Pray Love: £101.72", "Green Mile: £0.99"]);

test.movies = "Treasure Planet: £546"
console.log(test)
console.log(test.movies)