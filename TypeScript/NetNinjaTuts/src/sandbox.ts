let character ='mario';
let age=20;
let isBlackBelt=false;

character='gaurav';
age=22;
isBlackBelt=true;

const circle = (diameter : number)=>{
    return diameter*Math.PI;
}
console.log(circle(12));

//----------------arrays------------------// 

let names = ['gaurav','himanshu','akash','rohit'];
names.push('abhishek');
//names.push(30);

let numbers=[10,20,30];
numbers.push(30);
//numbers.push('john')

let mixed=['john',89,98];
mixed.push('gaurav')
mixed[0]=99
//mixed.push(true);

let all=['abc',78,true];
all.push(false);
all.push(0);
all.push('hlelo');


//--------------------objects------------------//

let ninja = {
    names:'gaurav',
    belt:'black',
    age:22
}
ninja.age=30;
ninja.names='rahul';
//ninja.skill='games';
ninja={
    names:'himanshu',
    belt:'red',
    age:23,
}

//------------explicit Types----------------//

let a:string;
let b:number;
let c:boolean;
//a=10;
a='hello';
b=40;
c=true;

let arr:string[]=[];
arr.push('hrllo');
arr.push('abc');


//---------------Union Type---------------//

let mixArray:(string|number|boolean)[]=[];
mixArray.push('hello');
mixArray.push(30);
mixArray.push(true);
console.log(mixArray);

let uid:string|number;
uid=123;
uid='345678';

//--------------------Any Type------------------//

let myage: any;
myage='hello';
myage=true;
myage=213;
myage=[123,232,'defd',true];
myage={
    name:'abc',
    id:101
}

//------------------Functions in typescript-------------------//

let greet : Function;

greet= ()=>{
    console.log("hello world");
}

const add =(a:number , b:number, c?:number | string)=>{
    console.log(a+b);
    console.log(c);
}

add(10,45);
add(10,20,"hello");

const multiply = (a:number,b:number): number =>{
    return a*b;
}
const minus = (a:number,b:number,c?:any):void=>{
    console.log(`sub is ${a-b} and ${c}`);
}
minus(10,20,['hello',10])

//------------Type alais---------------//

type StringorNumber = string|number;
type onlyString=string;

const logdetails = (uid:StringorNumber,item:onlyString)=>{
    console.log(`${item} had uid of ${uid}`);
}


//--------------------Function Signature----------//

let greeting : (a:string,b:string)  => void;

greeting = (name:string , mygreets:string)=>{
    console.log(`${name} wishes you ${mygreets}`);
}

let calculate : (a:number,b:number,c:string) => number|string; 

calculate = (num1:number,num2:number,result:string)=>{
    return result+" is : "+(num1+num2);
}
console.log(calculate(10,20,"output"));

//--------------Generics--------------------//

const addUID =<T extends object>(obj :T)=>{
    let uid = Math.floor(Math.random()*100);
    return {...obj,uid};
}

let docOne = addUID({name:'yoshi',age:40});
let docTwo = addUID({name:'hello'});