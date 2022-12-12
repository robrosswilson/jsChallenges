// Example Array

let favHolidayDestinations = [
    "Venice, Italy",
    "Paris, France",
    "Barcelona, Spain"
]

console.log(favHolidayDestinations)

// Activity 1

let favMovies = [
    "The Thing",
    "The Shining",
    "Pulp Fiction"
]

console.log(favMovies)

// Activity 2 

console.log(favMovies[0])

// Activity 3

favMovies[1] = "2001: A space Odyssey"
console.log(favMovies)

// .length returns number of elements in array

console.log(favMovies.length)

// .pop() removes last element from array, and returns that element

console.log(favMovies.pop())
console.log(favMovies)

// Activity 4: more array methods

let favFruits = [
    "orange",
    "apple",
    "tomato",
    "grape",
    "banana",
    "pear",
    "pineapple"
]


favFruits.shift()
console.log(favFruits)

favFruits.slice(1)
console.log(favFruits)

favFruits.splice(2,1,"mango", "kiwi", "grapefruit")
console.log(favFruits)

favFruits.unshift("fruit1", "fruit2")
console.log(favFruits)


let numbers = [1,2,3,4,5,6]
let newNumbers = numbers.map(i => i * 100)
console.log(newNumbers)


// Activity 5

let favSongs = ["Reveiller", "Righteous Minds", "C.R.E.A.M"]
console.log(favSongs)

favSongs.unshift("Head High", "Fields Of Athenry")
console.log(favSongs)

console.log(favSongs.pop())
console.log(favSongs)
