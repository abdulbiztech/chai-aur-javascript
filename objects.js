//Object Leterals  <------
const mySym= Symbol("newone")
const myObj = {
    name:"Abdul",
    age:23,
    "full name":"karim",
    [mySym]:"newone",
    city:"Mumbai",
    gmail:"abdul@gmail.com"
}
// console.log(myObj[mySym]);

// console.log(myObj);

//if in object by default variable in string
//if we need to access the string value so we use the [] brackets

//Object SingleTon  <------
const newObj = new Object()//its a singleton Object
const newObj2 = {}//its not a singleton Object
// console.log(newObj);
// console.log(newObj2);

// let suppose we have one object and object ke andar object how we can achive it 
let newObject = {
    fullname:{
        age:{

            newage:20
        }
    }
}
console.log(newObject.fullname.age?.newage);///Some time we need to use the ? if data exited or not