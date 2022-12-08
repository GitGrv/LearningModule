"use strict";
let character = 'mario';
let age = 20;
let isBlackBelt = false;
character = 'gaurav';
age = 22;
isBlackBelt = true;
const circle = (diameter) => {
    return diameter * Math.PI;
};
console.log(circle(12));
//----------------arrays------------------// 
let names = ['gaurav', 'himanshu', 'akash', 'rohit'];
names.push('abhishek');
//names.push(30);
let numbers = [10, 20, 30];
numbers.push(30);
//numbers.push('john')
let mixed = ['john', 89, 98];
mixed.push('gaurav');
mixed[0] = 99;
//mixed.push(true);
let all = ['abc', 78, true];
all.push(false);
all.push(0);
all.push('hlelo');
//--------------------objects------------------//
let ninja = {
    names: 'gaurav',
    belt: 'black',
    age: 22
};
ninja.age = 30;
ninja.names = 'rahul';
//ninja.skill='games';
ninja = {
    names: 'himanshu',
    belt: 'red',
    age: 23,
};
//------------explicit Types----------------//
let a;
let b;
let c;
//a=10;
a = 'hello';
b = 40;
c = true;
let arr = [];
arr.push('hrllo');
arr.push('abc');
//---------------Union Type---------------//
let mixArray = [];
mixArray.push('hello');
mixArray.push(30);
mixArray.push(true);
console.log(mixArray);
let uid;
uid = 123;
uid = '345678';
//--------------------Any Type------------------//
let myage;
myage = 'hello';
myage = true;
myage = 213;
myage = [123, 232, 'defd', true];
myage = {
    name: 'abc',
    id: 101
};
//------------------Functions in typescript-------------------//
let greet;
greet = () => {
    console.log("hello world");
};
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(10, 45);
add(10, 20, "hello");
const multiply = (a, b) => {
    return a * b;
};
const minus = (a, b, c) => {
    console.log(`sub is ${a - b} and ${c}`);
};
minus(10, 20, ['hello', 10]);
const logdetails = (uid, item) => {
    console.log(`${item} had uid of ${uid}`);
};
//--------------------Function Signature----------//
let greeting;
greeting = (name, mygreets) => {
    console.log(`${name} wishes you ${mygreets}`);
};
let calculate;
calculate = (num1, num2, result) => {
    return result + " is : " + (num1 + num2);
};
console.log(calculate(10, 20, "output"));
