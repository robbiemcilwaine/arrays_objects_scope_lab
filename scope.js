// GLOBAL SCOPE

// let sets the scope to the block
// let creates a new variable, instead of reassigning a value to a previously defined variable
const numbers = [1, 2, 3, 4, 5];

const numbersSquared = [];

for (let number of numbers){
    numbersSquared.push(number ** 2);
}

console.log(numbersSquared);

// once we use let, we cannot access the number variable
// the scope is now local to the block
// console.log(numberToPrint);