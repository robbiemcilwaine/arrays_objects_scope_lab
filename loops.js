shoppingList = ["apples", "milk", "tea", "sugar", "banana"];

// for-of - for ARRAYS
for (item of shoppingList){
    // console.log(item.toUpperCase());
}

// classic for loops
for (i = shoppingList.length-1; i >= 0; i--){
    // console.log(shoppingList[i]);
}

// while loop
counter = 0;
while(counter<10){
    counter++;
    // console.log(counter);
}

// iterate over an object
colin = {
    firstName : "Colin",
    pet : "Saffron",
    age : 25,
    favouriteColour : "Green",
    // if a key is of the same name, the last one overrides any before it
    firstName : "Zsolt",
    "weird-key" : "BNTA"
};

// for in - for OBJECTS
for(key in colin){
    console.log(colin[key]);
}