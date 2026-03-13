//Variable Introduction
/*var name = "Parth";
console.log(name);*/
/*let a = 10;
a = "Parth";
console.log(a);*/
/*{
const name = 20;
console.log(typeof name);
}*/
const add = (a, b) => a + b;
console.log(add(5, 2));
let numbers = [1, 2, 3, 4, 5, 6, 7];
let square = numbers.map(num => num * num);
console.log(square);
let numbers2 = [10, 15, 20, 25];
let result = numbers2.filter(num => num > 15);
console.log(result);
let numbers3 = [20, 40, 60, 80, 100];
let sum = numbers3.reduce((total, num) => total + num, 0);
console.log(sum);