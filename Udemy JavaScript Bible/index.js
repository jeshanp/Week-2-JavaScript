const a = 1;
const b = 2;

console.log(`a = ${a}`);
console.log(`b = ${b}`);

//Named function
function doCalc(num1, num2){
    return num1+num2;
}
//Usage:
console.log(`a + b = ${doCalc(a,b)}`);


//Traditional ANONYMOUS function:
var anon1 = function (num1){
    return num1 + 100;
  }
//Usage:
console.log(anon1(100));

//Arrow function - ES6 Style (use this) syntax: (parameters) => function body
const arrow1 = a => a + 100; 
//const safer than var because function expression always constant

//Example 2
//Traditional:
var anon2 = function(i,j){
    return i*j;
}
//Arrow function:
const arrow2 = (i,j) => i*j;


