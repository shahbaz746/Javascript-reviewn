// 🧩 Practice Problems
// 🟢 Basic

// const person = {
//     name: "Ali",
//     age: 30
// }
// const {name, age} = person;
// console.log(name);
// console.log(age);

// const num = [1,2,3,4,5,6,7]
// const [first,secend] = num;
// console.log(first);
// console.log(secend)

// const num2 = [...num,8,9,0,10];
// console.log(num2);

//Intermediate

const user = {
    name: "Shahbaz",
    age: 25,
    city: "Karachi"
}

const {name: username} = user;
console.log(username);
const {cast = "Not Found"} = user;
console.log(cast)

const shahbaz = {
    ...user,
    profession: "Software Engineer",
    password: "secure123"
}

const {password, ...shahbazWithoutPassword} = shahbaz;
console.log(shahbazWithoutPassword);

const ali = {
    name: "Ali",
    age: 30,
    city: "Lahore"
}
const age = {
    ...ali,
    age: 35
}
console.log(age);

const avvreage = (...numbers) => {
  return  numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
}
console.log(avvreage(10, 20, 30, 40, 50,76,85,43,45,6,786,43));

const local = [
    { id: 1, name: "Ali", password: "123" },
    { id: 2, name: "Sara", password: "456" }
]

const localWithoutPasswords = local.map(({password, ...withoutPassword}) =>  withoutPassword);
console.log(localWithoutPasswords);

let user3= {
    name: "Shahbaz",
    age: 25,
    city: "Karachi"
}
const user4 = {
    ...user3,
    name: "Ali",
    age: 30,
    city: "Lahore"
}
console.log(user4)

const order = {
  id: 1,
  customer: "Ali",
  total: 200,
  status: "pending"
};

const newO = {
    ...order,
    status: "completed",
    paymentMethod: "credit card"
}
console.log(newO)