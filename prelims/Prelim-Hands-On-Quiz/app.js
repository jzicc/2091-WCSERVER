const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

console.log(add(subtract(multiply(divide(300, 4, 6)))));
