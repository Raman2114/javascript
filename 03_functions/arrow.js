// const user={
//     username:"Raman",
//     Branch:"CSE",
//     WelcomeMess: function welcome(){
//         console.log(`${this.username} ,welcome to website`);
//         console.log(this);
//     }
// };

// user.WelcomeMess();
// console.log(this)


// function arrow(){
//     username="raman"
//     console.log(this.username);
// }
// arrow();

// const data= function(){
//     username="raman"
//     console.log(this.username);
// }
// data();

// const detail=()=>{
//     username="Raman",
//     Branch= "CSE"
//      console.log(this.Branch);
// };
// detail();

const Arr=(num1,num2)=>{
    return num1+num2;
};
console.log(Arr(3,4));

const arr= (num1,num2) => (num1+num2) ;
console.log(arr(3,4));

