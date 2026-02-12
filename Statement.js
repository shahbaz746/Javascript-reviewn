// let day = prompt("Enter a day of the week:");
// switch(day.toLocaleLowerCase()){
//     case "monday":
//         console.log("It's the first day of the week");
//         break;
//     case "tuesday":
//         console.log("It's the second day of the week");
//         break;
//     case "wednesday":
//         console.log("It's the third day of the week");
//         break;
//     case "thursday":
//         console.log("It's the fourth day of the week");
//         break;
//     case "friday":
//         console.log("It's the fifth day of the week");
//         break;
//     case "saturday":
//         console.log("It's the sixth day of the week");
//         break;
//     case "sunday":
//         console.log("It's the seventh day of the week");
//         break;
//     default:
//         console.log("Invalid day of the week");
// }



// Begnier Level
// Write a program that checks if a number is positive or negative.

// let number = prompt("Enter a number:");
// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }

//Check if a number is even or odd.

// let num = prompt("Enter a number:");
// if (num % 2 === 0) {
//     console.log("The number is even.");
// } else {
//     console.log("The number is odd.");
// }

// Check if a user is eligible to vote (18+).

// let age = prompt("Enter your age:");
// if (age >= 18) {
//     console.log("You are eligible to vote.");
// } else {
//     console.log("You are not eligible to vote.");
// }

// Create a simple login check:
// username === "admin"
// password === "1234"

// const userName = prompt("Enter your username:");
// const password = prompt("Enter your password:");

// if (userName === `${userName}` && password === `${password}`) {
//     console.log("Login successful");
// } else {
//     console.log("Login failed");
// }

// Use switch to print the name of a month (1–12).

// let month = prompt("Enter a month number (1-12):");
// switch (month) {
//     case "1":
//         console.log("January");
//         break;
//     case "2":
//         console.log("February");
//         break;
//     case "3":
//         console.log("March");
//         break;
//     case "4":
//         console.log("April");
//         break;
//     case "5":
//         console.log("May");
//         break;
//     case "6":
//         console.log("June");
//         break;
//     case "7":
//         console.log("July");
//         break;
//     case "8":
//         console.log("August");
//         break;
//     case "9":
//         console.log("September");
//         break;
//     case "10":
//         console.log("October");
//         break;
//     case "11":
//         console.log("November");
//         break;
//     case "12":
//         console.log("December");
//         break;
//     default:
//         console.log("Invalid month number.");
// }


//🟡 Intermediate Level

//Create a grading system using if...else if.

// let score = prompt("Enter your score:");
// if (score >= 90) {
//     console.log("Grade: A");
// } else if (score >= 80) {
//     console.log("Grade: B");
// } else if (score >= 70) {
//     console.log("Grade: C");
// } else if (score >= 60) {
//     console.log("Grade: D");
// } else {
//     console.log("Grade: F");
// }

// Build a calculator using switch:
// let num1 = parseFloat(prompt("Enter the first number:"));
// let num2 = parseFloat(prompt("Enter the second number:"));
// let operator = prompt("Enter an operator (+, -, *, /):");

// switch (operator) {
//     case "+":
//         console.log(`${num1} + ${num2} = ${num1 + num2}`);
//         break;
//     case "-":
//         console.log(`${num1} - ${num2} = ${num1 - num2}`);
//         break;
//     case "*":
//         console.log(`${num1} * ${num2} = ${num1 * num2}`);
//         break;
//     case "/":
//         if (num2 !== 0) {
//             console.log(`${num1} / ${num2} = ${num1 / num2}`);
//         } else {
//             console.log("Error: Division by zero is not allowed.");
//         }
//         break;
//     default:
//         console.log("Error: Invalid operator.");
// }

// Check if a year is leap year.

// let year = prompt("Enter a year:");
// if (year % 4 === 0){
//     console.log("This is a leaf year")
// }else{
//     console.log("This is not a leaf year")
// }


// Check if a number is divisible by both 3 and 5.

// let num = prompt("Enter a number:");
// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("The number is divisible by both 3 and 5.");
// } else {
//     console.log("The number is not divisible by both 3 and 5.");
// }

//Create a traffic light system using switch.

// let light = prompt("Enter a traffic light color (red, yellow, green):");
// switch (light.toLocaleLowerCase()) {
//     case "red":
//         console.log("Stop");
//         break; 
//     case "yellow":
//         console.log("Get ready");
//         break;
//     case "green":
//         console.log("Go");
//         break;
// }


// Advanced Level
//Rewrite a large if...else chain into a switch statement.

// let num1 = parseFloat(prompt("Enter the first number:"));
// let num2 = parseFloat(prompt("Enter the second number:"));
// let choice = prompt("Enter a choice (1-5):");

// switch (choice) {
//     case "1":
//         console.log(`${num1} + ${num2} = ${num1 + num2}`);
//         break;
//     case "2":
//         console.log(`${num1} - ${num2} = ${num1 - num2}`);
//         break;
//     case "3":

//         console.log(`${num1} * ${num2} = ${num1 * num2}`);
//         break;
//     case "4":
//         if (num2 !== 0) {
//             console.log(`${num1} / ${num2} = ${num1 / num2}`);
//         } else {
//             console.log("Error: Division by zero is not allowed.");
//         }
//         break;
//     case "5":
//         console.log(`Exit`);
//         break;
//     default:
//         console.log("Error: Invalid choice.");
// }


// Create nested if statements for login + role check.
// let user = prompt("Enter your username:");
// let pass = prompt("Enter your password:");

// if (user === "admin" && pass === "1234") {
//     let role = prompt("Enter your role (admin/user):");
//     if (role === "admin"){
//         console.log("Welcome Admin! You have full access.");
//     }
//     else if (role === "user"){
//         console.log("Welcome User! You have limited access.");
//     }
//     else{
//         console.log("Invalid role.");
//     }
// }
// else if(user === "guest" && pass === "9900"){
//     console.log("Welcome Guest! You have guest access.");
// }
// else{
//     console.log("Login failed.");
// }


// Build a simple CLI-style menu:

// Deposit
// 2 - Withdraw
// 3 - Check Balance
// 4 - Exit

// let balance = 1000;
// let choice = prompt("Enter a choice (1-4):\n1 - Deposit\n2 - Withdraw\n3 - Check Balance\n4 - Exit");

// switch (choice) {
//     case "1":
//         let depositAmount = parseFloat(prompt("Enter the amount to deposit:"));
//         if (depositAmount > 0) {
//             balance += depositAmount;
//             console.log(`Deposit successful. New balance: $${balance}`);
//         } else {
//             console.log("Invalid deposit amount.");
//         }
//         break;
//     case "2":
//         let withdrawAmount = parseFloat(prompt("Enter the amount to withdraw:"));
//         if (withdrawAmount > 0 && withdrawAmount <= balance) {
//             balance -= withdrawAmount;
//             console.log(`Withdrawal successful. New balance: $${balance}`);
//         } else {
//             console.log("Invalid withdrawal amount or insufficient funds.");
//         }
//         break;
//     case "3":
//         console.log(`Your current balance is: $${balance}`);
//         break;
//     case "4":
//         console.log("Thank you for using our service. Goodbye!");
//         break;
//     default:
//         console.log("Invalid choice. Please enter a number between 1 and 4.");
// }


// Create a discount system:

// If customer is premium AND cart > 5000 → 20%

// If cart > 5000 → 10%

// Else → 0%

let isPremium = prompt("Are you a premium customer? (yes/no):").toLocaleLowerCase() === "yes";
let cartTotal = parseFloat(prompt("Enter your cart total:"));
let finalPrice = 0;

if (isPremium && cartTotal > 5000) {
    let discountAmount = (20/100)*cartTotal;
    finalPrice = cartTotal - discountAmount;
    console.log(`You are eligible for a 20% discount. Discount amount: $${discountAmount.toFixed(2)}. Final price: $${finalPrice.toFixed(2)}`);
    console.log("Thank you for being a premium customer!");
}
else if(cartTotal > 5000){
    let discountAmount = (10/100)*cartTotal;
    finalPrice = cartTotal - discountAmount;
    console.log(`You are eligible for a 10% discount. Discount amount: $${discountAmount.toFixed(2)}. Final price: $${finalPrice.toFixed(2)}`);
    console.log("Consider becoming a premium customer for more benefits!");
}
else{
    console.log("You are not eligible for a discount.");
}