class Pet {
    constructor(name, age, type, breed, colour, time) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.colour = colour;
        this.lastFed = time;
    }
    feedPet (time) {
        this.lastFed =time;
        return `Last feed updated to: ${this.lastFed} for ${this.name}.`;
    }
}

class PetMeds extends Pet {
    constructor(name, age, type, breed, colour, time, mtime) {
    super(name, age, type, breed, colour, time);
    this.lastMeds = mtime;
    }
giveMeds (mtime) {
        this.lastMeds = mtime;
        return `Last meds updated to: ${this.lastMeds} for ${this.name}.`
    }
}

const sammy = new Pet("Sammy", 12, "dog", "Springer", "L&W", "0800");
console.log(sammy.feedPet("1800"));

const alfie = new Pet("Alfie", 12, "dog", "Springer", "L&W", "0800");
console.log(alfie.feedPet("1759"));

const kato = new PetMeds("Kato", 9, "dog", "Husky", "B&W", "0900", "0900")

console.log(sammy)
console.log(alfie)
console.log(kato)
console.log(kato.giveMeds("1730"))


// getters and setters

class Pets {
    constructor(firstname, surname, age, type, breed, colour, time) {
        this.firstname = firstname;
        this.surname = surname;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.colour = colour;
        this.lastFed = time;
    }
    get petInfo () {
        return `${this.firstname} is a ${this.type}, ${this.age} year(s) old`;
    }
    set fullName (name) {
        const array = name.split(' ');
        this.firstname = array[0];
        this.surname = array[1];
    }
    get fullName() {
        return `${this.firstname} ${this.surname}`
    }
    feedPet (time) {
        this.lastFed = time;
        return `Last feed updated to: ${this.lastFed} for ${this.firstname}`;
    }
}

const bella = new Pets("Bella", "", 2, "Dog", "GS", "B&T", "08:00");
console.log(bella);
bella.fullName = "Bella Crompton"
console.log(bella);
console.log(bella.fullName)