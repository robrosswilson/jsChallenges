// // Example
// // Objects are containers that can store data and functions
// // We store data inside the object using key-value pairs
// // e.g. firstName is a key, "Sally" is a value.

// const person = {
//     firstName: "Sally",
//     lastName: "Evans",
//     age: 27,
//     occupation: "Sales assistant",
//     married: false,
//     homeOwner: false
// }

// // We can access the data in an object using either dot.notation or bracket notation
// // dot.notation generalisation: object.property

// person.firstName
// console.log(person.firstName)

// // bracket notation generalisation: object[property]

// person["firstName"]
// console.log(person["firstName"])

// // objects are mutable (you can change them):

// person.homeOwner = true
// console.log(person)

// // values can be any data type, such as arrays:

// person.hobbies = ["tennis", "gardening", "bungee jumping"]
// console.log(person.hobbies)


// // Activity 1 (Create an object)

// const pet = {
//     petName: "Georgie",
//     typeOfPet: "cockapoo",
//     age: 8,
//     colour: "Brown"
// }

// console.log(`My pet is a ${pet.typeOfPet}. They are called ${pet.petName} and they are ${pet.age} years old. They are also ${pet.colour} in colour.`)


// // Activity 2 (change colour of pet)

// pet.colour = "Black"
// console.log(pet)


// // Activity 3 (add a key value called petFeatures)

// pet.petFeatures = ["friendly", "playful", "cute"]
// console.log(pet)


// // Example

// let day = "Monday"

// const person = {
//     firstName: "Sally",
//     lastName: "Evans",
//     age: 27,
//     occupation: "Sales assistant",
//     married: false,
//     homeOwner: false,
//     hobbies: ["tennis", "gardening", "bungee jumping"]
// }

// if (day === "Saturday" || day === "Sunday"){
//     console.log(`Great it's ${day}, let's play ${person.hobbies[0]}!`)
// }
// else {
//     console.log(`Oh no! It's ${day}. I hate being a ${person.occupation}.`)
// }


// // We can add a method (function) to an object
// // Notice how we have to use this.homeOwner (instead of just homeOwner) 
// // Same goes for this.age (instead of just age)
// // this is needed as homeOwner and age is outside the functions scope (need to definitively say where it is)

// const person = {
//     firstName: "Sally",
//     lastName: "Evans",
//     age: 40,
//     occupation: "Sales assistant",
//     married: false,
//     homeOwner: true,
//     hobbies: ["tennis", "gardening", "bungee jumping"],
//     marketingOp () {
//         if (this.homeOwner == false && this.age > 25){
//             return "Send mortgage offer email."
//         }
//         else if (this.homeOwner == false && this.age < 25){
//             return "Send summer holiday fun credit card offer."
//         }
//         else if (this.homeOwner == true && this.age > 25){
//             return "Pension investment offer."
//         }
//         else{
//             return "Send sensible savings offer."
//         }
//     }
// }

// console.log(person.marketingOp())


// // Activity 4 (adding methods)

// const pet = {
//     petName: "Georgie",
//     typeOfPet: "cockapoo",
//     age: 8,
//     colour: "Black",
//     petFeatures: ["friendly", "playful", "cute"],
//     eat: true,
//     drink: true,
//     describe () {
//         if (this.eat == true && this.drink == true){
//             return `${pet.petName} is eating and drinking.`
//         }
//         else if (this.eat == true && this.drink == false){
//             return `${pet.petName} is eating.`
//         }
//         else if (this.eat == false && this.drink == true){
//             return `${pet.petName} is drinking.`
//         }
//         else {
//             return `${pet.petName} is not currently eating and drinking.`
//         }
//     }
// }

// console.log(pet.describe())



// Activity 5 (you can have an array of arrays)

const coffeeShop = {
    branch: "Our flagship store",
    drinks: [
      ["Espresso", 1.50],
      ["Latte", 2.50],
      ["Mocha", 3.00],
      ["Americano", 2.00]
    ],
    food: [
      ["Croissant", 2.00],
      ["Muffin", 1.50],
      ["Bagel", 2.50],
      ["Cake", 3.00],
      ["Toastie", 3.50]
    ],
    drinksOrdered (drinkIndices) {
        let order = `Your drinks order is: \n`;
        let total = 0;

        for (let i=0; i < drinkIndices.length; i++){
            let drinkIndex = drinkIndices[i];
            order += `- ${this.drinks[drinkIndex][0]} \n`;
            total += this.drinks[drinkIndex][1];
        }

        order += `Total: £${total} \n`;
        return order;
    },
    foodOrdered (foodIndices) {
        let order = `Your food order is: \n`;
        let total = 0;

        for (let i=0; i < foodIndices.length; i++){
            let foodIndex = foodIndices[i];
            order += `- ${this.food[foodIndex][0]} \n`;
            total += this.food[foodIndex][1];
        }

        order += `Total: £${total} \n`;
        return order;
    },
    totalOrdered (drinkIndices, foodIndices) {
        let order = `Your complete order is: \n`;
        let total = 0;

        for (let i=0; i < drinkIndices.length; i++){
            let drinkIndex = drinkIndices[i];
            order += `- ${this.drinks[drinkIndex][0]} \n`;
            total += this.drinks[drinkIndex][1];
        }

        for (let i=0; i < foodIndices.length; i++){
            let foodIndex = foodIndices[i];
            order += `- ${this.food[foodIndex][0]} \n`;
            total += this.food[foodIndex][1];
        }

        order += `Total: £${total} \n`;
        return order;
    }
}

// Example Drinks order:
console.log(coffeeShop.drinksOrdered([0, 0, 2])); 

// Example Food order:
console.log(coffeeShop.foodOrdered([1, 2]));

// Combined Drinks and Food order: 
// (Note: due to the function built above, drinks must be inputted first before food.)
console.log(coffeeShop.totalOrdered([0,0,2],[1,2]));

