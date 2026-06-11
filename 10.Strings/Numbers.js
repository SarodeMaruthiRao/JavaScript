
let x = new Number(100);

// isInteger() --> It is used to check wheather is an integer or nor
x = 10;
let y=1.8;
let z="x";
console.log(Number.isInteger(x)) // true
console.log(Number.isInteger(y)) // false
console.log(Number.isInteger(z)) // false

// parseInt() --> converts string into numbers
s = "1234";
console.log(typeof(s))
console.log(typeof(Number.parseInt(s)));

// parseFloat() --> convert string into number float
f = "123.78"
console.log(typeof(f)); // string
console.log(typeof(Number.parseFloat(f))); // number

// toString() --> Convert number into string
console.log("----tostring()----")
let n = 1234;
console.log(typeof(n))
console.log(typeof(Number.toString(n)))
