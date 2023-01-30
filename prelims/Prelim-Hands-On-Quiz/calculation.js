function add(a, b, c, d) {
  return a + b + c + d;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b, c) {
  return a * b * c;
}
function divide(a, b, c) {
  return a / b / c;
}

const gross = 7200;
const sss = 1200;
const pfund = 300;
const phealth = 400;

module.exports = { add, subtract, multiply, divide, gross, sss, pfund, phealth };
