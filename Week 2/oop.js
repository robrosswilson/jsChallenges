// Object Orientated Programming

// // classes (uses a capital letter when defining, see 'Pet')

// class Pet {
//     constructor(name, age, type, breed, colour, time){
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.breed = breed;
//         this.colour = colour;
//         this.lastFed = time;
//     }
//     feedPet (time) {
//         this.lastFed = time;
//         return `Last feed updated to: ${this.lastFed} for ${this.name}`;
//     }
// }

// const Bella = new Pet("Bella", 2, "Dog", "GS", "B&T", "08:00");
// const Georgie = new Pet("Georgie", 8, "Dog", "Cockapoo", "Brown", "10:00");
// console.log(Bella.feedPet("15:00"));
// console.log(Georgie)


// // Creating a sub-class
// // extends: signifies the sub-class extension
// // contructor: relates to the sub-class. mimics the parent constructor, but includes any new data
// // super: refers to the class, and brings the information down to the sub-class. It pulls in data for the inherited properties, and assigns the values

// class PetMeds extends Pet {
//     constructor(name, age, type, breed, colour, time, mtime){
//         super(name, age, type, breed, colour, time);
//         this.lastMeds = mtime;
//     }
//     giveMeds (time) {
//         this.lastMeds = time;
//         return `Last meds updated to ${this.lastMeds} for ${this.name}`;
//     }
// }

// const Barney = new PetMeds("Barney", 4, "Cat", "Dom-Short", "B&G", "10:00", "13:00");



// // Getters (get)
// // Key benefit of a getter is that the data can be kept private


// class Pet {
//     constructor(name, age, type, breed, colour, time){
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.breed = breed;
//         this.colour = colour;
//         this.lastFed = time;
//     }
//     get petInfo(){
//         return `${this.name} is a ${this.type}, ${this.age} year(s) old`
//     }
//     feedPet (time) {
//         this.lastFed = time;
//         return `Last feed updated to: ${this.lastFed} for ${this.name}`;
//     }
// }

// const Bella = new Pet("Bella", 2, "Dog", "GS", "B&T", "08:00");
// console.log(Bella.petInfo);




// Setters (set)

class Pet {
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
   
   const Bella = new Pet("Bella", "", 2, "Dog", "GS", "B&T", "08:00");
   console.log(Bella);
   Bella.fullName = "Bella Crompton"
   console.log(Bella);
   console.log(Bella.fullName)



// // Activity 1 
// // Note: We are after a list of movies, therefore will be an array

// class Rental {
//     constructor(name, address, contactNumber, movies){
//         this.name = name;
//         this.address = address;
//         this.contactNumber = contactNumber;
//         this.movies = movies;
//     }
// }

// const test = new Rental("Blockbuster", "Hazel Grove", "01610161016", ["Toy Story 1", "Toy Story 2", "Toy Story 3"]);
// const newTest = new Rental("Grove Movies", "Stockport", "0203040506", ["Finding Nemo", "Finding Dory", "Die Hard"]);
// console.log(test);
// console.log(newTest)



// // Activity 2

// const availableMovies = (Rental) => {
//     console.log(`The movies available at ${Rental.name} in ${Rental.address} are: ${Rental.movies}`);
// }

// availableMovies(test);
// availableMovies(newTest);


// const addMovie = (Rental, movie) => {
//     Rental.movies.push(movie);
// }

// addMovie (test, "Toy Story 4");
// availableMovies(test);


// Activity 3

class Rental {
    constructor(name, address, contactNumber, movies){
        this.name = name;
        this.address = address;
        this.contactNumber = contactNumber;
        this.movies = movies;
    }
}

const test = new Rental("Blockbuster", "Hazel Grove", "01610161016", [
    ["Toy Story 1", 1.99],
    ["Toy Story 2", 2.49],
    ["Toy Story 3", 2.99]
]);

const newTest = new Rental("Grove Movies", "Stockport", "0203040506", [
    ["Finding Nemo", 1.49],
    ["Finding Dory", 3.29],
    ["Die Hard", 2.79]
]);


const availableMovies = (Rental) => {
    
    console.log(`The movies available at ${Rental.name} in ${Rental.address} are:`);

    for (let i = 0; i < Rental.movies.length; i++) {
        const movie = Rental.movies[i];
        console.log(`- ${movie[0]} = £${movie[1]}`);
    }
}

availableMovies(test);
availableMovies(newTest);


const addMovie = (Rental, movie) => {
    Rental.movies.push(movie);
}

addMovie (test, ["Toy Story 4", 3.99]);
availableMovies(test);

addMovie (newTest, ["Home Alone", 2.99])
availableMovies(newTest);