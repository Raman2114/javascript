const obj1= {1:"a",2:"c"};
const obj2= {3:"d",4:"e"};

//const obj2=new Object();
const obj3={obj1,obj2}
//console.log(obj3);

//const obj4= Object.assign(obj1,obj2);  //assign(target, source) {} is taken as target in some cases.  const obj4= Object.assign({},obj1,obj2);

const obj4 ={...obj1,...obj2}
console.log(obj4);

const tinderUser=new Object();
tinderUser.id=123;
tinderUser.Name="Raman";
tinderUser.Email="rpk2114@gmail.com";

//console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


const Users=[
    {

    },
    {
        
    }
]

console.log(tinderUser.hasOwnProperty('id'));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course={
    course: "Maths",
    price: "999",
    courseInstructor:"raman"

};

console.log(course.courseInstructor);

const {courseInstructor : Instructor} = course;
console.log(Instructor);

// {
//     "Name" : "Raman",           json structure in which keys and values both are in quotes
//     "Branch" : "CSE"
// }