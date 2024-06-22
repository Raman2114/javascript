let val=3;
let negValue = -val;
console.log(negValue);

console.log(2*3); //multiply
console.log(2**3);//power
console.log(2+3);
console.log(2-3);
console.log(2/3);//modulus

//memory : stack(primitive)   any change in value leads to change in the copy of value
// heap (non-primitive)   leads to change the  original value reference


let a="raman";
let b=a;
console.log(a);
b="rahul";
console.log(b);



let objectOne={
    name:"raman",
    email:"rpk2114@gmail.com",
}

let objectTwo =objectOne;
console.log(objectTwo);

objectTwo.name="komal";
console.log(objectTwo);
console.log(objectOne);

