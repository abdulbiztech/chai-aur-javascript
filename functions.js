function myFunction(number1,number2){
    // console.log(number1+number2);
}
myFunction(8,6)

function newfunction(username){
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}
// console.log(newfunction("abdul"));


// numbers=[1,2,3,4,5,6,7,8]
// const double = numbers.map(num=>num*2)
// console.log(double);

const number = 3
for(let i = 1; i <= 10; i++) {
    const result = i * number;
    // console.log(`${number} * ${i} = ${result}`);
}


