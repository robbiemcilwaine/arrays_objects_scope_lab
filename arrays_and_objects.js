// ARRAYS
emptyArray = [];
numbers = [1, 2, 3, 4, 5];
letters = ["a", "b", "c", "d", "e"];
badIdea = ["a", 12345, NaN, numbers]; // do not do this

shoppingList = ["apples", "milk", "tea"];

// functions
// add to an array
shoppingList.push("eggs");

lengthOfArray = shoppingList.length;
// console.log(shoppingList.pop());

// accessing the array
firstItem = shoppingList[0];
// console.log(firstItem);

// OBJECTS
colinArray = ["Colin", "Saffron", 25, "Green"];
colin = {
    firstName : "Colin",
    pet : "Saffron",
    age : 25,
    favouriteColour : "Green",
    // if a key is of the same name, the last one overrides any before it
    firstName : "Zsolt",
    "weird-key" : "BNTA"
};

// access the object - square brackets or dot notation
console.log(colin["firstName"]);
console.log(colin.favouriteColour);

// for weird key, must use square brackets
console.log(colin["weird-key"]);
// console.log(colin.weird-key);

colin.occupation = "Trainer";
console.log(Object.keys(colin));