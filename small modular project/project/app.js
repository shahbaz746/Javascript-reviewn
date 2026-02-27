// app.js
import { add } from "./utils/math.js";
import { createUser, getUsers } from "./services/userService.js";

createUser("Shahbaz", "test@gmail.com");

console.log(getUsers());

console.log("2 + 3 =", add(2, 3));