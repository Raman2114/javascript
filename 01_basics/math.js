const num=100;
const numTwo= new Number(10.2);

console.log(num,numTwo);
console.log(numTwo.toString().length);

console.log(typeof numTwo);

console.log(numTwo.toFixed(2));  //return two zeroes after decimal
 
console.log(numTwo.toPrecision(2));  //10.5 round of to 11  ,gives the precise value


const value=100000;
console.log(value.toLocaleString('en-IN')); // 1,00,000


//math

const val= -120.56;
console.log(Math.abs(val));
console.log(Math.round(4.6));  //5
console.log(Math.ceil(4.6));  //5
console.log(Math.floor(4.6)); //4  gives down value


console.log(Math.min(4,5,6,2,3));  //2
console.log(Math.max(4,5,6,2,3));  //6

console.log((Math.random()*10)+1);
console.log(Math.random()*10+1);

const max=20;
const min=10;
console.log(Math.floor((Math.random()*(max-min+1))+min));






