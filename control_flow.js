// console.log("does one equal two?");
// console.log(1 == 2);

// console.log("does two equal two?");
// console.log(2 == 2);

// // == loose equality - to make sure there are less bugs on the front end
// console.log("is two loosely equal to 'two'?");
// console.log(2 == "2");

// // === strict equality - use this at all times for now
// console.log(2 === "2");

// console.log("is three less than five?");
// console.log(3 < 5);
// console.log("is three more than five?");
// console.log(3 > 5);

// console.log("is a earlier in the alphabet than z?");
// console.log("a" < "z");

// secretNumber = 888;
// userGuess = 999;

// if (secretNumber === userGuess){
//     console.log("You win");
// } else if (secretNumber > userGuess) {
//     console.log("Too low, guess higher");
// } else {
//     console.log("Too high, guess lower");
// }

console.log("hello" + 123);

// type coercion

// falsy values - if you really want to turn a data type into a boolean, it will evaluate to false
// if the result of an operation is 0, it can be considered as falsy
false
""
null
undefined
NaN // not a number e.g. trying to divide a string by a number

userName = 1;

if(userName){
    console.log("Welcome " + userName);
}