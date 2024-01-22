//1. Arithematic Operators
let x = 10;
let y = 3;
console.log(x + y); //addition
console.log(x - y); //subtraction
console.log(x * y); //multiplication
console.log(x / y); //division -> quotient
console.log(x % y); //division -> remainder
console.log(x ** y); //exponent

//2.Assignment Operator
let a = 10; //assigns RHS to LHS
console.log((a += 2)); // a = a + 2
console.log(a);
a -= 2;
console.log(a);
a *= 10;
console.log(a); //a = a*10
a /= 3;
console.log("It will give quotient " + a);
a %= 2;
console.log("It will give remainder" + a);

//3.Relational operators

let b = 20;
let c = 10;

console.log(c > b); //greater than
console.log(c < b); //less than
console.log(c >= b); //greater than equal to
console.log(c <= b); //less than equal to

//Logical operators

console.log(true && false); //AND
console.log(5 > 3 && 5 > 3);
console.log(true || false); //OR
console.log(!(2 > 4)); //NOT
