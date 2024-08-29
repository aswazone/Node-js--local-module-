
// // its the methode importing of ESM modules
// import add from "./math-esm.mjs" ;

// console.log(add(2,4));

// import math from "./math-esm.mjs" ;//second pattern

// console.log(math.add(2,4));
// console.log(math.substract(2,4));

// import math from "./math-esm.mjs" ;//third pattern
// const {add,substract} = math;
// console.log(add(2,4));
// console.log(substract(2,4));

import {add,substract} from "./math-esm.mjs" ;//fourth pattern
console.log(add(2,4));
console.log(substract(2,4));

