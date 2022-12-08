//----------Interface----------//

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "gaurav",
  age: 23,
  speak(text: string): void {
    console.log(text);
  },
  spend(rupee: number): number {
    return rupee;
  },
};

const greetPerson =(person: IsPerson)=>{
  console.log("hello",person.name);
}
greetPerson(me);
// const anchor = document.querySelector('a')!;
// // if(anchor){
// // console.log(anchor);
// // }
// console.log(anchor.href);

import { Invoice } from "./classes/Invoice.js";
import { ListTemplates } from "./classes/ListTemplates.js";
import { Payment } from "./classes/Pyments.js";
import { HasFormatter } from "./Interfaces/HasFormatter.js";

let docOne:HasFormatter;
let docTwo:HasFormatter;

docOne = new Invoice('yoshi','web work',250);
docTwo = new Payment('mario','plumbing work',300);

let docs : HasFormatter[]=[];
docs.push(docOne);
docs.push(docTwo);

docs.forEach((document)=>{
  console.log(document);
})

const invoiceOne = new Invoice("mario", "works on mario website", 250);
const invoiceTwo = new Invoice("luigi", "works on luigi website", 200);

//console.log(invoiceOne,invoiceTwo)

invoiceOne.amount = 1000;

let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

invoices.forEach((invoice) => {
 // console.log(invoice);
});

//const form =document.querySelector('form')!;
const form = document.querySelector(".new-item-form") as HTMLFormElement;
//console.log(form.children);
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplates(ul);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let doc: HasFormatter;
  if(type.value === 'invoice'){
    doc = new Invoice(tofrom.value,details.value,amount.valueAsNumber);
  }else{
    doc = new Payment(tofrom.value, details.value,amount.valueAsNumber);
  }
  list.render(doc,type.value,'end');
 //console.log(doc);
 // console.log(type.value, tofrom.value, details.value, amount.value);
});
