
const myArr=[1,2,3,4,5,6];
const myArrTwo=[7,8,9];
console.log(myArr[5]);
console.log(myArrTwo[2]);


const myArrThree = new Array(1,2,3,4);

// myArrThree.push(5);
// myArrThree.pop();
// myArrThree.unshift(9);
// myArrThree.shift();
// console.log(myArrThree.includes(6));
// console.log(myArrThree.indexOf(3));

myArrThree.join();
console.log(typeof myArrThree);
console.log(myArrThree);

// slice ,splice

const myvalue=new Array(1,2,3,4,5);
console.log(myvalue);

const myth=myvalue.slice(1,3);
console.log(myth); //[ 2, 3 ]

const myth2=myvalue.splice(1,3);
console.log(myth2);  //[ 2, 3, 4 ]
console.log(myvalue); //[ 1, 5 ]
