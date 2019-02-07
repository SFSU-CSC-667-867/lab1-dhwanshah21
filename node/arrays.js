// Arrays in js

// arrays can be delared explicitly
const array = [9, 3, 4];

// or with new keyword
const anotherArray = new Array(5);

// access array elements
console.log(array[0]);

// change elements
array[1] = 'hello';

// for practice

// use forEach
// array.forEach((n)=>{
//         console.log(n);
// });
const arrayTest= [9, 10, 11];
arrayTest[7]= 15;
console.log(arrayTest);
// use map
const newArray = arrayTest.map(i=>i*2);
console.log(newArray);

// use pop
newArray.pop();
console.log(newArray);
// use push
newArray.push(21);
console.log(newArray);

// use shift

newArray.shift();
console.log(newArray);

// use unshift
newArray.unshift(17);
console.log(newArray);
// use filter
