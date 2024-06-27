const marvels= new Array("thor","spiderman");
const dc_heroes=new Array("superman","batman");

//marvels.push(dc_heroes);
//console.log(marvels);

// const newArr=marvels.concat(dc_heroes);
// console.log(newArr);

const newArrTwo=[...marvels,...dc_heroes];
console.log(newArrTwo);

const newArrThree=[1,2,3,4,5,[6,7],8,9,[10,[11,12]]];

const newArrFour= newArrThree.flat(Infinity);

console.log(newArrFour);

console.log(Array.isArray("Raman"));
console.log(Array.from("Raman"));   //[ 'R', 'a', 'm', 'a', 'n' ]


const a=100;
const b=100;
const c=100;

console.log(Array.of(a,b,c));

