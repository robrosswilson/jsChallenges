console.log("Hello World")

// Activity 1

let firstName = "John"
let age = 26
let universityStudent = true

console.log(firstName)
console.log(age)
console.log(universityStudent)

firstName = "Henry"
age = 38
universityStudent = false

console.log(firstName)
console.log(age)
console.log(universityStudent)

const lastName = "Wiro"

console.log(lastName)

// Concatenation

let modelOfCar = "Volvo"
console.log("I drive a " + modelOfCar)

// Template literals

let occupation = "Software Developer"

console.log(`Hi, my name is ${firstName}. I'm a ${occupation} and I drive a ${modelOfCar}.`)

// Activity 2

let fullName = "Rob Wilson"
let currentAge = 38
let colour = "Blue"

console.log(`My name is ${fullName}. I am ${currentAge} years old, and my favourite colour is ${colour}.`)


// Activity 3 

let breakfast = "Cereal"
let lunch = "Soup"
let dinner = "Carbonara"

console.log(`For breakfast I had ${breakfast}. Then I had ${lunch} for lunch. Finally, for dinner, I ate ${dinner}.`)

breakfast = "Eggs"
lunch = "Carvery"
dinner = "Curry"

console.log(`For breakfast I had ${breakfast}. Then I had ${lunch} for lunch. Finally, for dinner, I ate ${dinner}.`)

// Operators

let a = 5
a += 3
console.log(a)

// Activity 4

let currentDate = new Date()
let nextBirthday = new Date("07/13/2023")

const difTime = nextBirthday.getTime() - currentDate.getTime() 
const difDays = difTime / (1000*60*60*24)
const roundedDays = Math.round(difDays)

console.log(`The total number of milliseconds between today and your next birthday is ${difTime} milliseconds.`)
console.log(`Hence, the total number of days between today and your next birthday is ${difDays} days.`)
console.log(`So, the total rounded number of days between today and your next birthday is ${roundedDays} days.`)

// Activity 4 Ext.

let today = new Date()
let dob = new Date("07/13/2000")

const changeInTime = today.getTime() - dob.getTime()
const changeInDays = changeInTime / (1000*60*60*24)
const roundedChangeInDays = Math.round(changeInDays)

console.log(`The total number of milliseconds between your date of birth and today is ${changeInTime} milliseconds.`)

console.log(`Hence, the total number of days between your date of birth and today is ${changeInDays} days.`)

console.log(`So, the total rounded number of days between your date of birth and today is ${roundedChangeInDays} days.`)
