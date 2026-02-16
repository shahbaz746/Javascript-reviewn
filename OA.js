// 🧩 Practice Problems (Important)
// 🟢 Basic


Create a function with default parameter.
const  shahbaz = (a=10,b=20) => {
 return a + b;   
}
console.log(shahbaz());

// Create an object with method that returns full name.
const person = {
    fname: "Shahbaz",
    lname: "Tofeeq",
    fullName: ()=> {
        return person.fname + " " + person.lname;
    }
}
console.log(person.fullName())

Add and remove elements from array using push/pop.
let arr = [1,2,3,4,5,6,3,7,78,8,9,10];

arr.pop()
// const ali = arr.push(11);
console.log(arr)


// Use forEach to print all values.
const users = [{
 u1:"Shahbaz",
 u2:"Ali",
 u3:"Ahmed",
 u4:"Usman"
}
]
users.forEach(u => {
    console.log(u);
});

Intermediate
let numbers = [10, 20, 30, 40, 50,35,34];

let saq = numbers.map(num => {
    return num * num;
})
console.log(saq)

let even = numbers.filter(num => num % 2 === 0 && num)
console.log(even)


let users = [
    {
        1:"Ali",
        2:"Shahbaz",
        3:"Noman",
        4:"Waris"
    }
]

let find = users.find(user => user.key % 2 === 0 && user)

console.log(find)


let users = [
    {
        admin: "Shahbaz",
        guest : "Ali",
        user : "Noman",
        member : "Waris"
    }
]

let check = users.some(user => Object.keys(user).some(key => key === "admin" && console.log(user[key])))

console.log(check)


let numbers = [10, 20, 30, 40, 50];

const every = numbers.every(num => num % 2 === 0 && num)
console.log(every)


// let check = users.some(user => Object.keys(user).some(key => key === "admin" && console.log(user[key])))

// 🔵 Advanced (MERN Ready)

let products =  [
    {id: 1, name: "Tablet", price: 2000},
    {id: 2, name: "Mobile", price: 2000},
    {id: 3, name: "Mobile", price: 6000},
    {id: 4, name: "Mobile", price: 5000},
    {id: 5, name: "Laptop", price: 9000},
    {id: 6, name: "Tablet", price: 5000}
]

let result = products.reduce((acc, product) => {

    // 1️⃣ Add total price
    acc.total += product.price;

    // 2️⃣ Count frequency
    acc.frequency[product.name] = 
        (acc.frequency[product.name] || 0) + 1;

    return acc;

}, {
    total: 0,
    frequency: {}
});

console.log(result);


const users = ["Shahbaz", "Ali", "Noman", "Waris"]

let obj = Object.assign({}, users)
console.log(obj)

const persons = [
    {name: "Shahbaz", age: 25},
    {name: "Ali", age: 30},
    {name: "Noman", age: 28},
    {name: "Waris", age: 12}
]

let result = persons.filter(person => person.age > 18).map(person => person.name).sort((a, b)=> a.localeCompare(b))
console.log(result)

const orders = [
  { id: 1, total: 100, status: "completed" },
  { id: 2, total: 200, status: "pending" },
  { id: 3, total: 150, status: "completed" }
];
let result = orders.filter((order => order.status === "completed")).reduce((acc, order)=> acc + order.total, 0)
console.log(result)