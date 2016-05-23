import { sayHello } from "./greet";

interface Salute {
    name: string;
    lastNames: string;
    age: any
}

class Student {
    fullName: string;
    constructor(public name: string, public middleName: string, public lastNames: string, public age: any){
        this.fullName = name + ' ' + middleName + ' ' +  lastNames + ', has the age of:' + age;
    }
}

function hi (person: Salute){
    return 'hello ' + person.name + ' ' + person.lastNames + ', your age is:' + person.age ;
}

var student = new Student('romel', 'j.', 'gomez herrera', 31);

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

console.log(hi(student));
console.log(sayHello("TypeScript"));
showHello("greeting", "TypeScript");
console.log('ok this is new');