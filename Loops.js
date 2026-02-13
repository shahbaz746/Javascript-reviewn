
const array = [1, 2, 3, 4, 5];

for (const value of array) {
    console.log(value);
}

const users = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 25 }
];

for (const user of users) {
    console.log(user.name);
}

const user = {
  name: "Ali",
  age: 22,
  city: "Lahore"
};

for (const key in user) {
    console.log(key)
    console.log(user[key])
}

// 🟢 Easy Questions

// Print numbers from 1 to 50.

for(let i = 1; i <= 50; i++){
    console.log(i);
}

// Print even numbers from 1 to 100.

for (i = 1; i <= 100; i++){
    i % 2 === 0 && console.log(i);
}

// Print numbers from 10 to 1 (reverse).

for (i = 10; i >= 1; i--){
    console.log(i);
}

// Print multiplication table of 5.

for (i = 1; i <= 10; i++){
    console.log(`5 * ${i} = ${5 * i}`);
}

// 🟡 Medium Questions

// Calculate sum of numbers from 1 to 100.

let sum = 0;
for (i = 1; i <= 100; i++){
    sum += i;
    console.log(sum);
}

// Find factorial of a number.
let factorial = 1;
let number = 5;
for (i = 1; i <= number; i++){
    factorial *= i;
    console.log(factorial);
}

// Reverse a string using loop.

let shahbaz = "Shahbaz Toffeq"
let reversed = "";

while (shahbaz.length > 0) {
    reversed += shahbaz[shahbaz.length - 1];
    shahbaz = shahbaz.slice(0, -1);
}
console.log("Reversed string:", reversed);


// Count how many vowels are in a string.

let str = "Shahbaz Toffeq";
let vowelCount = 0;
let vawels = "aeiou";

while (str.length > 0) {
    const char = str[str.length - 1].toLowerCase();
    if (vawels.includes(char)) {
        vowelCount++;
    }
    str = str.slice(0, -1);
}
console.log(vowelCount);

// Find the largest number in an array.

let arr = [10, 25, 3, 47, 5];
let largest = arr[0];

for (i = 1; i < arr.length; i++){
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log(largest);

// 🔵 Advanced (Important for Interviews)

// Remove duplicates from array using loop.

let arr = [1, 2, 3, 2, 4, 1, 5];
let newArr = [];
for (i = 0; i < arr.length; i++){
    if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);

Count frequency of elements in array.

let arr = [1, 2, 3, 2, 4, 1, 5];
let frequency = {};
for (i = 0; i < arr.length; i++){
    const element = arr[i];
    frequency[element] = (frequency[element] || 0) + 1;
}
console.log(frequency);

// Find second largest number in array.

let arr = [10, 45, 3, 24, 5];
let largest = arr[0];
let secendLargest = arr[0];
for (i = 1; i < arr.length; i++){
    if (arr[i] > largest){
        largest = arr[i];
        for (j = 0; j < arr.length; j++){
            if (arr[j] > secendLargest && arr[j] < largest){
                secendLargest = arr[j];
            }
        }
    }
}
console.log(secendLargest);

// Create a star pattern:

let rows = 5;
let pattern = "";
for (i = 1; i <= rows; i++){
    for (j = 1; j <= i; j++){
        pattern += "* ";
    }
    console.log(pattern);
} 


let arr = [
    obj = { name: "Ali", age: 22 },
    obj2 = { name: "Sara", age: 25 },
    obj3 = { name: "Ahmed", age: 30 },
    obj4 = { name: "Ayesha", age: 17 }
];
for (i = 0; i < arr.length; i++){
    if (arr[i].age > 18) {
        console.log(arr[i].name);
    }
}
