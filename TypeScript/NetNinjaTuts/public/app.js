//----------Interface----------//
const me = {
    name: "gaurav",
    age: 23,
    speak(text) {
        console.log(text);
    },
    spend(rupee) {
        return rupee;
    },
};
const greetPerson = (person) => {
    console.log("hello", person.name);
};
greetPerson(me);
// const anchor = document.querySelector('a')!;
// // if(anchor){
// // console.log(anchor);
// // }
// console.log(anchor.href);
import { Invoice } from "./classes/Invoice.js";
import { ListTemplates } from "./classes/ListTemplates.js";
import { Payment } from "./classes/Pyments.js";
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 300);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
docs.forEach((document) => {
    console.log(document);
});
const invoiceOne = new Invoice("mario", "works on mario website", 250);
const invoiceTwo = new Invoice("luigi", "works on luigi website", 200);
//console.log(invoiceOne,invoiceTwo)
invoiceOne.amount = 1000;
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach((invoice) => {
    // console.log(invoice);
});
//const form =document.querySelector('form')!;
const form = document.querySelector(".new-item-form");
//console.log(form.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector('ul');
const list = new ListTemplates(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    //console.log(doc);
    // console.log(type.value, tofrom.value, details.value, amount.value);
});
