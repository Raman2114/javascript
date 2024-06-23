let name="Raman";
let age=23;

console.log(`my name is ${name} and my age is ${age}`);  

const str=new String("ram");

console.log(str.__proto__);
console.log(typeof str);

console.log(str.length);

console.log(str.toUpperCase());

console.log(str.charAt(2));  // which char is present at this position

console.log(str.indexOf('a'));


console.log(str.substring(0,2));   //or 
const newStr=str.substring(0,3);
console.log(newStr);



const newStringOne="    rajat     ";
console.log(newStringOne);

const strTwo=newStringOne.trim();

console.log(strTwo);

const nameOne= "raman-kaur-jandoria";

console.log(nameOne.split('-')); //[ 'raman', 'kaur', 'jandoria' ]