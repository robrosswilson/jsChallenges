let hunger = "full"

if (hunger == "hungry"){
    console.log("Yes please I'm starving!")
}
else if (hunger == "full"){
    console.log("No thanks, I'm stuffed!")
}
else {
    console.log("Oh go on then, why not!")
}


// Activity 1

let music = "DnB"

if (music == "Classical"){
    console.log("Oh, how relexing.")
}
else if (music == "Disco"){
    console.log("Where are my dancing shoes!")
}
else if (music == "Dance"){
    console.log("Where's the party?")
}
else {
    console.log("Turn it down!")
}


// Activity 2

let age = 21

if (age > 17){
    console.log("Yes I can serve you.")
}
else {
    console.log("You aren't old enough.")
}


// Activity 3: And statement

let newAge = 24
let country = "Ireland"

if (newAge > 17 && country == "UK"){
    console.log("You are 18 and over, and from the UK")
}
else if (newAge > 17 && country != "UK"){
    console.log("You are over 18, but not from the UK")
}
else {
    console.log("You are under 18!")
}

// Activity 4a: Or statement

let day = "Saturday"

if (day == "Saturday" || day == "Sunday"){
    console.log("Yay it's the weekend!!")
}
else {
    console.log("Oh no, work again!")
}


// Switch statements
// Switch statements are used to perform different actions based on different conditions
// Example:

let food = "sprouts"

switch(food){
    case "ice cream":
    case "pizza":
        console.log("Yay, let's eat")
        break
    case "sprouts":
    case "broccoli":
        console.log("Ugh, no thanks!")
        break
    default:
        console.log("Okay, go on then, why not.")
}

// Activity 4b: Switch statement

let pizzaTopping = "Pineapple"

switch(pizzaTopping){
    case "Chicken":
    case "Bacon":
        console.log("These are important ingredients for my pizza!")
        break
    case "Peppers":
    case "Pepperoni":
    case "Mushrooms":
        console.log(`I don't mind having ${pizzaTopping} on my pizza.`)
        break
    default:
        console.log(`${pizzaTopping} should not be on a pizza`)
}

// Activity 5

let password = "QwertyKeyboard"

if (password.length < 8){
    console.log("Your password is too short.")
}
else {
    console.log(`Your password is ${password}`)
}

// Activity 6

let num = 19

if (num % 3 == 0 && num % 5 == 0){
    console.log("fizz buzz")
}
else if (num % 3 == 0){
    console.log("fizz")
}
else if (num % 5 == 0){
    console.log("buzz")
}
else {
    console.log(`The number ${num} is not divisible by 3 or 5.`)
}


// Activity 7

let time = 18
let placeOfWork = "Barclays bank"
let townOfHome = "Stockport"


if (time <= 7 || time >= 19){
    console.log(`At ${time} hours I am at home in ${townOfHome}.`)
}
else if (time >= 9 && time <= 17){
    console.log(`At ${time} hours I am in the city, working at ${placeOfWork}.`)
}
else {
    console.log(`At ${time} hours I am commuting.`)
}

// Activity 8

let longString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

let vowelA = longString.lastIndexOf("a")
let vowelE = longString.lastIndexOf("e")
let vowelI = longString.lastIndexOf("i")
let vowelO = longString.lastIndexOf("o")
let vowelU = longString.lastIndexOf("u")

if (
    vowelA > vowelE
    && vowelA > vowelI
    && vowelA > vowelO
    && vowelA > vowelU 
    ){
        console.log(vowelA)
    }
else if (
    vowelE > vowelI
    && vowelE > vowelO
    && vowelE > vowelU
){
    console.log(vowelE)
}
else if (
    vowelI > vowelO
    && vowelI > vowelU
){
    console.log(vowelI)
}
else if (
    vowelO > vowelU
){
    console.log(vowelO)
}
else {
    console.log(vowelU)
}


// Activity 9 (Why does return true/false not work?)

let varWord = "this is a string"

let firstLetter = varWord[0]
let lastLetter = varWord[varWord.length - 1]

if (firstLetter == lastLetter){
    console.log("True")
}
else {
    console.log("False")
}

// Activity 10

num1 = 3
num2 = 9

if (num1 + num2 % 2 == 0){
    console.log(num1 + num2)
}
else {
    console.log(num1 * num2)
}


// Activity 11
// Note: Reverse method overwrites the original array, hence need numJoin before numReverseSplit.

let newNum = 10101

let numString = newNum.toString()
let numSplit = numString.split("")

let numJoin = numSplit.join()

let numReverseSplit = numSplit.reverse()
let numReverseJoin = numReverseSplit.join()

if (numJoin == numReverseJoin){
  console.log(`The number ${newNum} is a palindrome.`)
}
else {
  console.log(`The number ${newNum} is not a palindrome.`)
}
