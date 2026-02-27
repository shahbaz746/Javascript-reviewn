// import { saqure,multiply,divied,add } from "./math.js";
// import {sum,multply,divien as div} from "./utils.js"

// import greet from "./defult.js";

// console.log(greet("Tofeeq"))


// console.log(sum(3,5))
// console.log(multply(3,5))
// console.log(div(3,5))
// console.log(saqure(4));
// console.log(multiply(4,5));
// console.log(divied(4,7));
// console.log(add(4,8));

import { createUser } from "./services/userService.js";
import greet from "./services/userService.js";

console.log(greet("Tofeeq"))
const user = createUser("Shahbaz Tofeeq", "123456", "test@gmail.com");

console.log(`User signed up: ${user.name}`);