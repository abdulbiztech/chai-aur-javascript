const Array = [1,2,3,4,5,6]
// const Array2  = new Array(1,2,3,4,5,6,7)
// console.log("Array",Array);
//Method in Array
const NewArray = Array.slice(1,3)
// console.log("slice",NewArray);
const NewArray2 = Array.splice(1,3)
// console.log("splice",NewArray2);
// console.log("Array",Array);


//How to merge or concat arrays
const firstArray = [1,2,4,5]
const secArray = [6,7,8,9,10]
const thirdArray = [...firstArray,...secArray]
console.log("thirdArray",thirdArray);

//Notes
//slice method can be used to create a copy of an array or return a portion of an array.
//splice() method will change the contents of the original array