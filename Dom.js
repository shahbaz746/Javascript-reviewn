// varibale
let btn2 = document.querySelector("#toggal")

// access element
let h1 = document.querySelector("#text-h1");
let btn = document.querySelector("#text-color");
let input = document.querySelector("#count-text");
let decrease = document.querySelector("#decrease");
let increase = document.querySelector("#increase");
let count = document.querySelector("#count");
let search = document.querySelector("#search");

let removedata = document.querySelector("#remove-data")

let add_data = document.querySelector("#add_data");

let data = ["shahbaz","Ali","Ahmed"]

add_data.addEventListener("click", () => {
    let data = prompt("Enter the data");
    const li = document.createElement("li");
    li.textContent = data;

    document.querySelector("#ul-data").appendChild(li);
})
data.map((name)=> {
    const li = document.createElement("li");
    li.textContent = name;
    document.querySelector("#ul-data").appendChild(li);
})


removedata.addEventListener("click",()=>{
   data.pop();
   console.log(data)
})


let foam = document.querySelector("#foam");

foam.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop page reload

    let name = document.querySelector("#name").value;
    let password = document.querySelector("#password").value;

    console.log("Name:", name);
    console.log("Password:", password);
});


let names = ["shahbaz", "ali", "hassan", "hussain", "ahmed"];


// logic
let toggal = false;
let counter = 0;



search.addEventListener("input", (e) => {
    let value = e.target.value.toLowerCase();
    let namesList = document.querySelectorAll("#names");
    names.filter((name) => name.toLocaleLowerCase().includes(value)).map((name) => {
        let li = document.createElement("li");
        li.textContent = name;
        document.querySelector("#names").appendChild(li);
    });
})

increase.addEventListener("click", () => {
    counter++;
    count.textContent = counter;
})
decrease.addEventListener("click", () => {
    counter--;
    count.textContent = counter;
})

input.addEventListener("input", (e) => {
    h1.textContent = e.target.value;
})
btn2.addEventListener("click", () => {
    if (!toggal) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        toggal = true;
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        toggal = false;
    }
})

btn.addEventListener("click", () => {
    if (h1.style.color === "red") {
        h1.style.color = "black";
        return;
    } else {
        h1.style.color = "red";
    }
})