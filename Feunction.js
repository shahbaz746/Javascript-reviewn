
var sayHi = function () {
  console.log("Hi");
};
sayHi();
function test() {
  console.log(a);
  var a = 10;
}

// test();

//🧩 PRACTICE QUESTIONS (Very Important)
// 🟢 Basic

// Create a function that returns the square of a number.
let num = 5;
function saqure(num){
    return num * num;
}
console.log(saqure(num));


// Create a function that checks if a number is even.
let num = 5;
function checkEven(num){
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkEven(num));


// Create a function that checks if a number is even.
let num1 = 10;
let num2 = 20;

function findMax(num1, num2){
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "Both numbers are equal";
    }
}
console.log(findMax(num1, num2));


Convert a function declaration into arrow function
const user = ()=>{
    console.log("Hello World");}
user();

//Medium (Logic Building)

//Create a function that counts vowels in a string.
let shr = "shahbaz tofeeq";
let vawals = ["a", "e", "i", "o", "u"];
let count = 0;

const countVowels = (shr) => {
    for (let i = 0; i < shr.length; i++){
        if (vawals.includes(shr[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}
countVowels(shr);
console.log(count);

// Create a function that reverses a string.
    let shr = "shahbaz tofeeq";
    let reversed = "";

    const reverseString = (shr) => {
        for (let i = shr.length - 1; i >= 0; i--){
            reversed += shr[i];
        }
    }
    reverseString(shr);
    console.log(reversed);


    //Create a function that removes duplicates from array.
    let arr = [1, 2, 3, 4, 5,5,6,7,8,9,10];

    const removeDuplicates = (arr) => {
        let uniqueArr = [];
        for (let i = 0; i < arr.length; i++){
            if (!uniqueArr.includes(arr[i])){
                uniqueArr.push(arr[i]);
            }
        }
        return uniqueArr;
    }

    console.log(removeDuplicates(arr));
   

    // Create a function that sums all numbers in an array.
    const arr = [10, 20, 30, 40, 50];
    const sumArray = (arr) => {
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        return sum;
    }
    console.log(sumArray(arr));

// 🔵 Advanced (Important for Interviews)


// Create a function that finds the largest number in an array.
// let user = [{
//     name: "Shahbaz",
//     age: 25,
//     city: "Karachi"
// },{
//     name: "Ali",
//     age: 30,
//     city: "Lahore"
// },{
//     name: "Ahmed",
//     age: 8,
    city: "Islamabad"
}];

const findAge = (user) => {
    let ages = [];
    for (let i = 0; i < user.length; i++){
        if (user[i].age > 18) {
            ages.push(user[i].name);
        }
    }
    return ages;
}
console.log(findAge(user));

