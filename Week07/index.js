// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// Use a loop to iterate through the array and calculate the average age.
{
    let ages = [3, 9, 23, 64, 2, 8, 28, 93];
    console.log((ages[ages.length-1] - ages[0]));
    ages.push(12);
    console.log((ages[ages.length-1] - ages[0]));
    // .reduce iterates across each value in the array, adding each value to the result of the previous addition until complete. Using this value divided by the array length gives an average since the reduce function used gives the sum of all.
    let avgAge = ages.reduce((a, b) => a + b) / ages.length;
    console.log(avgAge);
}

// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// Use a loop to iterate through the array and calculate the average number of letters per name.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

    let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
    // charCount to store the length of each name
    let charCount = 0;

    for (let i = 0; i < names.length; i++) {
        charCount += names[i].length;
    }

    console.log('The average number of letters per name is ' + (charCount / names.length));

    // nameList runs through each element at its index and the loop adds it to the empty string + a space between each addition.
    let nameList = '';
    for (let i = 0; i < names.length; i++) {
        nameList += names[i] + ' ';
    }
    console.log(nameList);

// How do you access the last element of any array?
// .length-1 will give you the value of the array length minus one so it is pointing at the proper index number, not the total length.
{
    let anyArray = ['this', 'is', 'an', 'array'];
    console.log(anyArray[anyArray.length-1]);
}
// How do you access the first element of any array?
// Index[0] is the first element of every array.
{
    let anyArray = ['this', 'is', 'an', 'array'];
    console.log(anyArray[0]);
}
// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

// This loop runs through each element of names, and pushes the value of each character length to the new array.
let nameLengths = [];
for (i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);


// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
// Using the reduce function to get the sum.
console.log(nameLengths.reduce((a, b) => a + b));

// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function repeat (word, n) {
    let repeatString = '';
    for (i = 0; i < n; i++){
        repeatString += word;
    }
    console.log(repeatString);
}
repeat ('Test', 3);
repeat ('Quintuple', 5);


// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.k
function fullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}
fullName('John', 'Smith');

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numArray = [50, 12, 24, 36];

function overHundred() {
if ((numArray.reduce((a, b) => a + b)) > 100) {
    return true;
    }
}

console.log(overHundred(numArray));
// Write a function that takes an array of numbers and returns the average of all the elements in the array.
function getAverage (arr) { 
    return arr.reduce((a, b) => a + b) / arr.length; 
}
console.log(getAverage(numArray));
// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
numArray2 = [3, 6, 32]
function checkArr (arr1, arr2) {
    if ((arr1.reduce((a, b) => a + b) / arr1.length) > (arr2.reduce((a, b) => a + b) / arr2.length)){
        return true;
    } else {
        return false;
    }
}
console.log(checkArr(numArray, numArray2));
// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
    if ((isHotOutside === true) && (moneyInPocket > 10.50)) {
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(true, 10.51));
console.log(willBuyDrink(false, 10.51));
console.log(willBuyDrink(true, 10));
// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// I made this function to double check if two weeks after the due date is considered late, asking for a friend.
let dueDate = new Date('2024/02/03');
let submitDate = new Date('2024/02/17');

function checkDate(dueDate, submitDate){
    if (dueDate < submitDate) {
        console.log('This assignment is late! :(');
    }
}

checkDate(dueDate, submitDate);