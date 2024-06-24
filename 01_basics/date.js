let date=new Date();
console.log(date.getDate());

console.log(date.toString());

console.log(date.toLocaleString());

//let newDate= new Date(2024,5,23,5,3);   Sun Jun 23 2024 05:03:00 GMT+0000 (Coordinated Universal Time)
let newDate=new Date("2024-12-14"); // Mon Dec 23 2024 00:00:00 GMT+0000
console.log(newDate.toString());


let TimeStamp= Date.now();
console.log(TimeStamp);
console.log(newDate.getTime());

let currentTime=new Date();
console.log(currentTime.getMonth()+1);

let newvalue=new Date();
console.log(Math.floor(newvalue.getTime()/1000));

console.log(`date today is ${currentTime.toString()} and time is ${currentTime.getTime()} `);

console.log(newvalue.toLocaleString('default',{
    weekday:"long"
}));
