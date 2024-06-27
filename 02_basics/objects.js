 
//singleton when we use object.create for creating onjects


const mySym= Symbol("myKey1");
const mySymTwo= Symbol("myKey2");


const jsUser= {
    Name:"Raman",
    age:20,
    [mySym]: "myKey1",
    [mySymTwo]:"myKey",
    Location:"Rajpura",
    isLoggedin:"false",
    lastLogin:["sunday"]
};

console.log(jsUser.Name);
console.log(jsUser[mySymTwo]);    //symbol

jsUser.Name="Raman";
//Object.freeze(jsUser);  // so that no one can change any value of this object

jsUser.greeting= function(){
    console.log("hello");
}

jsUser.greetingTwo= function(){
    console.log(`hello,${this.Name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
