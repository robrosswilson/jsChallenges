// Example function

const holidayDestination = () => {
    console.log("Yay! I'm going on holiday!")
}
holidayDestination()


// // Activity 1

// const sayHello = () => {
//     console.log("Hi there, how are you?")
// }
// sayHello()


// Parameters + Arguments

const holidayDestination2 = (country, month) => {
    console.log(`Yay! I'm going on holiday to ${country} in ${month}. I can't wait.`)
}
holidayDestination2("Spain", "June")


// Example

const inventory = (productCode, departmentName, quantity) => {
    console.log(`${quantity} of ${productCode} sold from ${departmentName} department, need to update stock by ${quantity}`)
}
inventory(412345, "baked goods", 65)


// Activity 2 

const sayHello = (myName, drink) => {
    console.log(`Hi there ${myName}, would you like a ${drink}?`)
}
sayHello("Rob", "Beer")


// Using return

const multiply = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(2,5))


// Functions can call other functions
// For this if quantity<10, then replenishStock function is called
// if quantity >100, then reducePrice function is called
// else, we log "Don't order stock" 

const replenishStock = (productCode) => {
    console.log(`Order product number ${productCode} stock is low!`)
}

const reducePrice = (productCode, originalPrice) => {
    let salePrice = originalPrice / 2
    console.log(`product number ${productCode} is now £${salePrice}`)
}

const checkStock = (productCode, quantity, originalPrice) => {
    if (quantity <= 10){
        replenishStock(productCode)
    }
    else if (quantity > 100) {
        reducePrice(productCode, originalPrice)
    }
    else {
        console.log("Don't order stock")
    }
}
checkStock(345678, 200, 100)


// Note: we arrow function syntax for functions
// This was done for secuirty reasons, to stop hackers seeing it is a function
// Arrow function is shown again below:

const addMe = (num1, num2) => {
    return num1 + num2
}
console.log(addMe(4,5))


// Outdated syntax includes Function declarations:

// function addMe(num1, num2) {
//     return num1 + num2
// }
// console.log(addMe(4,5))


// Another outdated syntax includes Expression/Anonymous function:

// const addMe = function(num1, num2) {
//     return num1 + num2
// }
// console.log(addMe(4,5))