// For loops with an array

let favColours = [
    "Blue",
    "Black",
    "White"
]

for (let i=0; i < favColours.length; i++){
    console.log(favColours[i])
}



// for loops with numbers
// starts at zero, adds 2, then increments by 1 for next loop
// 1st: 0 + 2 = 2
// 2nd: 2 + 1 = 3, then 3 + 2 = 5
// 3rd: 5 + 1 = 6, then 6 + 2 = 8
// 4th: 8 + 1 = 9, then 9 + 2 = 11

for (let i = 0; i <= 10; i++){
    console.log(i += 2)
}


// % is the modulus
// .push() adds the element to the array (given condition is met)

let evenNumbers = []

for (let n=0; n<20; n++){
    if (n % 2 == 0)[
        (evenNumbers.push(n))
    ]
}
console.log(`The even numbers between 0 and 20 are; ${evenNumbers}`)


// Activity 2

let newEvenNum = []

for (let x=20; x >= 0; x--){
    if (x % 2 == 0)[
        (newEvenNum.push(x))
    ]
}
console.log(`In reverse order, the numbers between 0 and 20 are; ${newEvenNum}`)


// Activity 3

let oddNum = []

for (let y=1; y <= 30; y++){
    if (y % 2 == 1)[
        (oddNum.push(y))
    ]
}
console.log(`The odd numbers between 1 and 30 are; ${oddNum}`)


// While Loops
// Example 1

let lives = 3

while (lives > 0){
    console.log("Well done! You are still in the game.")
    lives--
}
console.log("Game over!")


// Example 2
// Note: "3" is a global variable
// Math.random() gives a random number between 0 (inclusive) - 1 (exclusive). We want 1-6 (inclusive). 
// So, *6 gives 0 (inclusive) - 6 (exclusive). Then +1 gives the 1 (inclusive) - 7 (exclusive).
// Math.floor rounds DOWN to neareast integer. Hence we will get integers between 1 - 6 (inclusive), which is what we are after.

let currentDiceRoll = "3"

while (currentDiceRoll != 1){
    console.log(currentDiceRoll)
    currentDiceRoll = Math.floor(Math.random()*6)+1
}
console.log(currentDiceRoll)


// Activity 3: For ages 1-30 yrs old.

let age = 1;

while (age < 18){
    console.log(`Your age is ${age}, you are a child.`)
    age = Math.floor(Math.random()*30)+1
}
console.log(`Your age is ${age}, you are an adult.`)


// Activity 4: for numbers between 1 and 50.

let randomNum = []

while (randomNum.length < 6){
    let i = Math.floor(Math.random()*50)+1
    randomNum.push(i)
}
console.log(randomNum)


// Activity 5

let films = [
    "Toy Story 1",
    "Toy Story 2",
    "Ghostbusters",
    "Men In Black"
]

for (let i=0; i < films.length; i++){
    console.log(films[i])
}

if (films[2] == "Ghostbusters")[
        console.log("Yay it's Ghostbusters.")
]
else[
        console.log("Boo! We want Ghostbusters!")
]


// Activity 6

let newRandom = []

while (newRandom.length < 6){
    let i = Math.floor(Math.random()*30)+1
    newRandom.push(i)
    if (i % 7 == 0)[
        console.log(`${i} is divisible by 7`)
    ]
    else [
        console.log(`${i} is not divisible by 7`)
    ]
}
console.log(`The values considered were ${newRandom}.`)


// Activity 7

let bobsFollowers = ["Billy", "Brad", "Beatrice", "Briana"]
let hannahsFollowers = ["Harry", "Billy", "Harrold", "Briana"]

for (let a = 0; a < bobsFollowers.length; a++) {
  for (let b = 0; b < hannahsFollowers.length; b++) {
    if (bobsFollowers[a] == hannahsFollowers[b]) {
      console.log(`Both Bob and Hannah are followed by ${bobsFollowers[a]}`);
    }
  }
}
