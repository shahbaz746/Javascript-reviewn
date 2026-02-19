let h1 = document.querySelector("#text-h1");
let btn = document.querySelector("#text-color");
let toggal = false;
let btn2 = document.querySelector("#toggal")

btn2.addEventListener("click", ()=> {
    if(!toggal){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        toggal = true;
    }else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        toggal = false;
    }
})

btn.addEventListener("click", () => {
    if (h1.style.color === "red") {
        h1.style.color = "black";
        return;
    }else {
        h1.style.color = "red";
    }
})