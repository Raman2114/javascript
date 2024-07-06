function sum(num1,num2){
     //console.log(num1 + num2);
 }
 sum(2,3);

function addTwo (number1, number2){
    return number1+number2 ;
}
const result= addTwo(3,"c");
//console.log("Result: ",result);

function userInfo(username){
    if(!username){
        //console.log("enter usename");
        return
    }
    return `${username} just logged in`;
}

//console.log(userInfo());


function num(val,val2,...val1){
    return val;
}

//console.log(num(1,2,3,4,5));



// const handleObject={
//     username:"Raman",
//     price:"200"
// }

function object(Value){
    console.log(`username is ${Value.username} and price is ${Value.price}`  );
}

object({
    username:"Sam",
    price:500
});


const newArr =[1,2,3,4,5];

function Array(AnyArray){
    console.log(AnyArray[4]);
}

Array([1,2,3,4,5,6]);
console.log(fun1(5));
function fun1(num){
    return num+1;
};


const sum2=function fun2(num){
    return num+1;
}
console.log(sum2(5));
