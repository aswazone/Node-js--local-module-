// ingane aan LOCAL MODULE wrk cheyya
// const add = require("./add.js");
// console.log("I'm Local module..!!!");
// const sum = add(2,3);
// console.log(sum);

// require('./batman')
// require('./superman');

// require('./iife')

const superHero = require('./super-Hero');
superHero.setName("Wonder-woman");
console.log(superHero.getName());
// module caching

const newSuperHero = require('./super-Hero');
console.log(newSuperHero.getName());

