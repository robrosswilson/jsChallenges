// Higher Order Functions

// Example

const whichGreeting = (timeOfDay) => {
    console.log(`Good ${timeOfDay}`);
}

const greet = (time, fn) => {
    if (time < 1200){
        fn("Morning");
    }
    else if (time >= 1200 && time < 1800){
        fn("Afternoon");
    }
    else {
        fn("Evening");
    }
}

greet (1400, whichGreeting);


// Example

const add = (num1) => {
    return (num2) => {
        return num1 + num2;
    }
}

console.log(add(6)(4));



// Activity 1

const sayHello = () => {
    console.log("Hello Code Nation");
}

const repeatHello = (helloFunction) => {
    for (let i=0; i<5; i++){
        helloFunction();
    }
}

repeatHello(sayHello)



// Activity 2

let numbers = [1,2,3,4,5]
let newNumbers = numbers.map(i => i * 3)
console.log(newNumbers)
